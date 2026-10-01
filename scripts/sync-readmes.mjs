#!/usr/bin/env node
// 把各项目仓库的 README 同步成主页详情浮窗用的 HTML 片段。
//
//   node scripts/sync-readmes.mjs            同步全部
//   node scripts/sync-readmes.mjs unizen     只同步指定 slug
//
// 项目清单读自 index.html：带 data-repo 的项目卡片都会同步，
// README 不在仓库根目录时，在卡片上加 data-readme-dir="子目录"。
// 没有 data-repo 的私有项目（片段是手写的脱敏介绍）不会被覆盖。
//
// 依赖：已登录的 gh CLI（CI 里用 GH_TOKEN）、cwebp（macOS: brew install webp；Ubuntu: apt install webp）。
// 产物：assets/readmes/<slug>.html 与 assets/readmes/<slug>/ 下的图片。
// README 由 GitHub 渲染（与仓库页面一致），图片下载到本站托管，
// 避免访客直连 raw.githubusercontent.com。
// GitHub Actions 每天跑一次本脚本，见 .github/workflows/sync-readmes.yml。

import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, renameSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, "assets", "readmes");
const MAX_IMAGE_WIDTH = 1600;

function readProjects() {
  const html = readFileSync(path.join(ROOT, "index.html"), "utf8");
  const projects = [];
  for (const [, attrs] of html.matchAll(/<article class="project-card[^"]*"([^>]*)>/g)) {
    const attr = (name) => new RegExp(`\\s${name}="([^"]*)"`).exec(attrs)?.[1];
    const slug = attr("data-project");
    const repoUrl = attr("data-repo");
    const match = repoUrl && /^https:\/\/github\.com\/([^/]+)\/([^/#?]+)/.exec(repoUrl);
    if (slug && match) {
      projects.push({ slug, owner: match[1], repo: match[2], dir: attr("data-readme-dir") });
    }
  }
  return projects;
}

function gh(args, encoding = "utf8") {
  return execFileSync("gh", args, { encoding, maxBuffer: 64 * 1024 * 1024 });
}

function decodeEntities(value) {
  return value.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
}

function isRelative(url) {
  return !/^(?:[a-z][a-z0-9+.-]*:|#|\/\/)/i.test(url);
}

function resolveRepoPath(baseDir, url) {
  const clean = decodeURIComponent(url.split("#")[0].split("?")[0]);
  return path.posix.normalize(path.posix.join(baseDir, clean)).replace(/^(\.\/)+/, "");
}

function encodePath(repoPath) {
  return repoPath.split("/").map(encodeURIComponent).join("/");
}

async function downloadImage(project, baseDir, src) {
  if (isRelative(src)) {
    const repoPath = resolveRepoPath(baseDir, src);
    const buffer = gh(["api", `repos/${project.owner}/${project.repo}/contents/${encodePath(repoPath)}`, "-H", "Accept: application/vnd.github.raw"], "buffer");
    return { buffer, name: path.posix.basename(repoPath) };
  }
  const response = await fetch(src);
  if (!response.ok) {
    throw new Error(`下载图片失败 ${response.status}: ${src.slice(0, 80)}`);
  }
  const name = path.posix.basename(new URL(src).pathname) || "image.png";
  return { buffer: Buffer.from(await response.arrayBuffer()), name };
}

function webpSize(file) {
  const data = readFileSync(file);
  const chunk = data.toString("ascii", 12, 16);
  if (chunk === "VP8X") {
    return { width: 1 + data.readUIntLE(24, 3), height: 1 + data.readUIntLE(27, 3) };
  }
  if (chunk === "VP8L") {
    const bits = data.readUInt32LE(21);
    return { width: (bits & 0x3fff) + 1, height: ((bits >>> 14) & 0x3fff) + 1 };
  }
  if (chunk === "VP8 ") {
    return { width: data.readUInt16LE(26) & 0x3fff, height: data.readUInt16LE(28) & 0x3fff };
  }
  return { width: 0, height: 0 };
}

// 返回写入的文件名与尺寸；gif / svg 原样保存，其余转成 webp，过宽的缩到 MAX_IMAGE_WIDTH
function saveImage(buffer, name, index, imgDir) {
  const stem = `${String(index).padStart(2, "0")}-${name.replace(/\.[^.]+$/, "").replace(/[^\w-]+/g, "-")}`;
  const ext = path.extname(name).toLowerCase();
  if (ext === ".gif" || ext === ".svg") {
    writeFileSync(path.join(imgDir, stem + ext), buffer);
    return { fileName: stem + ext, width: 0, height: 0 };
  }
  const input = path.join(imgDir, `.source${ext || ".png"}`);
  const output = path.join(imgDir, `${stem}.webp`);
  writeFileSync(input, buffer);
  const encode = (extra) => execFileSync("cwebp", ["-quiet", "-q", "80", "-m", "6", ...extra, input, "-o", output]);
  encode([]);
  let size = webpSize(output);
  if (size.width > MAX_IMAGE_WIDTH) {
    encode(["-resize", String(MAX_IMAGE_WIDTH), "0"]);
    size = webpSize(output);
  }
  rmSync(input);
  return { fileName: `${stem}.webp`, ...size };
}

async function rewriteImages(html, project, baseDir, stagingDir) {
  const tags = html.match(/<img\b[^>]*>/g) || [];
  const replacements = new Map();
  let index = 0;

  for (const tag of tags) {
    if (replacements.has(tag)) {
      continue;
    }
    const src = decodeEntities(/\ssrc="([^"]*)"/.exec(tag)?.[1] || "");
    const canonical = decodeEntities(/\sdata-canonical-src="([^"]*)"/.exec(tag)?.[1] || src);
    const alt = /\salt="([^"]*)"/.exec(tag)?.[1] || "";
    if (!src || /shields\.io|badge/i.test(canonical)) {
      replacements.set(tag, "");
      continue;
    }
    index += 1;
    const { buffer, name } = await downloadImage(project, baseDir, src);
    mkdirSync(stagingDir, { recursive: true });
    const { fileName, width, height } = saveImage(buffer, name, index, stagingDir);
    const size = width && height ? ` width="${width}" height="${height}"` : "";
    replacements.set(tag, `<img src="./assets/readmes/${project.slug}/${fileName}" alt="${alt}"${size} loading="lazy" decoding="async">`);
  }

  return html.replace(/<img\b[^>]*>/g, (tag) => replacements.get(tag) ?? tag);
}

function rewriteLinks(html, project, baseDir) {
  return html.replace(/<a\b([^>]*)>/g, (whole, attrs) => {
    const href = /\shref="([^"]*)"/.exec(attrs)?.[1];
    if (!href || href.startsWith("#")) {
      return whole;
    }
    let target = decodeEntities(href);
    if (isRelative(target)) {
      const hash = target.includes("#") ? `#${target.split("#")[1]}` : "";
      target = `https://github.com/${project.owner}/${project.repo}/blob/main/${encodePath(resolveRepoPath(baseDir, target))}${hash}`;
    }
    return `<a href="${target.replace(/&/g, "&amp;").replace(/"/g, "&quot;")}" target="_blank" rel="noopener">`;
  });
}

function cleanMarkup(html) {
  return html
    .replace(/^\s*<div id="(?:readme|file)"[^>]*>\s*<article[^>]*>/, "")
    .replace(/<\/article>\s*<\/div>\s*$/, "")
    .replace(/<div class="markdown-heading"[^>]*><(h[1-6])[^>]*>([\s\S]*?)<\/\1><a id="([^"]+)" class="anchor"[^>]*>[\s\S]*?<\/a><\/div>/g, '<$1 id="$3">$2</$1>')
    .replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/, "")
    .replace(/<div class="highlight highlight-([\w-]+)[^"]*"[^>]*>/g, '<div class="md-code" data-lang="$1">')
    .replace(/<div class="snippet-clipboard-content[^"]*"[^>]*>/g, '<div class="md-code">')
    .replace(/<\/?markdown-accessiblity-table>/g, "")
    .replace(/<table>[\s\S]*?<\/table>/g, (table) => `<div class="md-table">${table}</div>`)
    .replace(/<a target="_blank" rel="noopener noreferrer[^"]*" href="[^"]*">(<img\b[^>]*>)<\/a>/g, "$1")
    .replace(/ dir="auto"/g, "")
    .replace(/ class="notranslate"/g, "")
    .replace(/<p>\s*<\/p>/g, "")
    .trim();
}

async function syncProject(project) {
  const endpoint = `repos/${project.owner}/${project.repo}/readme${project.dir ? `/${encodeURIComponent(project.dir)}` : ""}`;
  const readmePath = gh(["api", endpoint, "--jq", ".path"]).trim();
  const baseDir = path.posix.dirname(readmePath) === "." ? "" : path.posix.dirname(readmePath);
  // readme/{dir} 接口渲染 HTML 会 500，统一按文件路径取渲染结果
  const rendered = gh(["api", `repos/${project.owner}/${project.repo}/contents/${encodePath(readmePath)}`, "-H", "Accept: application/vnd.github.html"]);
  if (rendered.trim().length < 50) {
    throw new Error("GitHub 返回的 README 渲染结果为空");
  }

  // 图片先写进临时目录，整个项目成功后再替换，失败时不留下残缺的图片
  const imgDir = path.join(OUT_DIR, project.slug);
  const stagingDir = path.join(OUT_DIR, `.staging-${project.slug}`);
  rmSync(stagingDir, { recursive: true, force: true });
  try {
    let html = cleanMarkup(rendered);
    html = await rewriteImages(html, project, baseDir, stagingDir);
    html = rewriteLinks(html, project, baseDir);

    rmSync(imgDir, { recursive: true, force: true });
    try {
      renameSync(stagingDir, imgDir);
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error;
      }
    }
    const header = `<!-- 由 scripts/sync-readmes.mjs 从 ${project.owner}/${project.repo}/${readmePath} 生成，请勿手改 -->`;
    writeFileSync(path.join(OUT_DIR, `${project.slug}.html`), `${header}\n${html}\n`);
    return readmePath;
  } finally {
    rmSync(stagingDir, { recursive: true, force: true });
  }
}

const only = new Set(process.argv.slice(2));
const projects = readProjects().filter((project) => !only.size || only.has(project.slug));
if (!projects.length) {
  console.error("index.html 里没有找到要同步的项目");
  process.exit(1);
}
mkdirSync(OUT_DIR, { recursive: true });
let failed = 0;
for (const project of projects) {
  try {
    const readmePath = await syncProject(project);
    console.log(`✓ ${project.slug}  ←  ${project.repo}/${readmePath}`);
  } catch (error) {
    failed += 1;
    console.error(`✗ ${project.slug}: ${error.message}`);
  }
}
process.exit(failed ? 1 : 0);
