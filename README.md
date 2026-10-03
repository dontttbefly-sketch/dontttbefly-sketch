<div align="center">

# 空杯

**独立开发者 · 把业务里反复出现的麻烦事，做成能跑、能验证、能交接的工具**

业务自动化 · 数据工具 · 可交互网页作品

[![Portfolio](https://img.shields.io/badge/Portfolio-Live_Site-2563eb?style=flat-square)](https://dontttbefly-sketch.github.io/dontttbefly-sketch/)
[![Playable](https://img.shields.io/badge/Playable_Demos-7-0f766e?style=flat-square)](#作品--selected-works)
[![GitHub](https://img.shields.io/badge/GitHub-dontttbefly--sketch-181717?style=flat-square&logo=github)](https://github.com/dontttbefly-sketch)

</div>

---

## 关于我

我在电商业务一线干活：客服知识库、话术生成、数据回流、门店协作。看到反复出现的手工流程，就忍不住把它做成工具——先跑通最小闭环，再持续迭代。

写东西的三条原则：

1. **真实约束优先。** 脏数据、权限边界、人工确认环节，都是设计的一部分，不是障碍。
2. **产出可验证。** 关键操作留痕、有验收记录、能回读断言，结果不靠"应该没问题"。
3. **能交接。** README、截图、发布说明齐全，别人接手不用来问我。

---

## 作品 / Selected Works

按来源分三组：精选项目、公司项目与练习项目，其中 7 个可以直接在线体验。公司项目大多在私有仓库，只简单列出。每个项目的完整介绍见 [作品集站点](https://dontttbefly-sketch.github.io/dontttbefly-sketch/)。

### 精选项目

#### 1 · [知识书架 / vibe-shelf](https://github.com/dontttbefly-sketch/vibe-shelf)

<a href="https://github.com/dontttbefly-sketch/vibe-shelf"><img src="assets/project-thumbnails/vibe-shelf-note.webp" width="100%" alt="知识书架：读书时划词提问，回答写在页边"></a>

把一个项目的源码写成一本可以继续生长的项目书：放进本地文件夹或 GitHub 仓库，写一句最想读懂什么，AI 就写出一本有章节、有目录、有自己书皮的主书。读到哪里没懂就划词提问，回答写在页边；点书里的文件路径就回到源码原文；书里没讲的方向在书底接着探索，值得留下的回答长成一本探索小书。

- 只依据源码：每个项目存一份不可变的源码快照，书、旁注和探索都从这里取材，找不到就照实说。
- 阅读器叠在书页上面，不改原书一个字；每本书的书皮各不相同，用的是同一套阅读器。
- 原生 HTML / CSS / JS + 零依赖的 Node.js 服务，接任意 OpenAI 兼容模型；常开版部署在自己的服务器上，GitHub 登录、邀请制。
- **[→ 在线体验](https://dontttbefly-sketch.github.io/vibe-shelf/)** · [README 里有动图演示](https://github.com/dontttbefly-sketch/vibe-shelf#readme)

#### 2 · [简历工作台 / resume-ai](https://github.com/dontttbefly-sketch/resume-ai)

<a href="https://github.com/dontttbefly-sketch/resume-ai"><img src="assets/project-thumbnails/resume-ai-studio.webp" width="100%" alt="简历工作台：点纸上的一句话，AI 给出改写候选"></a>

AI 求职工作台：写简历、对岗位、投简历、攒经历，都在一个页面里完成。AI 帮你改简历、写打招呼话术、判断岗位值不值得投，引用的每个事实都来自你自己的简历和经历库，不编数字、不拔高。

- **简历**：所见即所得的 A4 纸，点哪句让 AI 改哪句，导出可搜索的真文字 PDF。
- **岗位**：粘贴岗位描述，本地算出匹配度和缺口，再生成三条可以直接发的打招呼话术。
- **投递**：在 BOSS 直聘上逐张读岗位描述，AI 按你的判岗规则决定投或跳过，执行和记录都留在本机。
- **经历**：和 AI 聊出经历细节存进经历库，供上面三处引用。
- **React 19 + TypeScript + Vite**，Vercel 私有部署（邀请制）。**[→ 在线体验](https://dontttbefly-sketch.github.io/resume-ai/)** · [README 里有动图演示](https://github.com/dontttbefly-sketch/resume-ai#readme)

#### 3 · [Import to Photos / import-to-photos](https://github.com/dontttbefly-sketch/import-to-photos)

纯本地 macOS 小工具：把截图或图片一键导入 iCloud 同步相册，导入后自动标记、避免重复导入。

- 不联网不上传，支持 jpg / heic / png / RAW 等常见格式。
- Finder 右键同步，写入扩展属性标记跳过已导入文件。
- Release DMG 提供 pkg 安装器与卸载脚本，支持 `--dry-run` 预览。
- **[→ 下载安装](https://github.com/dontttbefly-sketch/import-to-photos/releases)**

#### 4 · [Unizen · 个人项目驾驶舱 / unizen](https://github.com/dontttbefly-sketch/unizen)

本地优先的 macOS 原生应用，用来长期运营个人项目：每个项目是一本「项目书」，未完成的事项留在项目里持续推进，完成的工作沉淀为可追溯的进展历史。解决的是「一个项目做了半年，我还能立刻看懂它、接得上、写得回」。

- **Swift 6** 原生开发，数据只存在本机。
- AI 协作协议：AI 通过访谈生成本地暂存的提纲，用户逐项确认才写入正式的「项目 → 目标 → 事项」，AI 永远不能直接写正式数据。
- 用架构决策记录（ADR）约束性能与写入边界，核心模块有单元测试覆盖。

### 公司项目

在电商公司一线做的业务工具，多数在私有仓库：

- **蓝禾学 · 部门学习平台** `私有仓库`：新人培训平台，每门课是视频 + 思维导图 + PPT，新人每天解锁一关。React 19 + TypeScript。
- **智能转化知识库** `私有仓库`：把公司源表清洗、组织成可直接上传的标准知识库，约 1000 工时的整理压到 16 工时。
- **[飞书客服差评转发器](https://github.com/dontttbefly-sketch/feishu-review-forwarder)**：差评告警按客服账号自动原话私聊转发，客服查看一条差评从 3 分钟缩到 5 秒。
- **[淘宝直播 AI 巡检系统](https://github.com/dontttbefly-sketch/taobao-live-inspector)**：自动录制、语音转写、高亮切片、出复盘报告，上线后直播极限词减少 80%。[→ 在线演示](https://dontttbefly-sketch.github.io/taobao-live-inspector/)

### 练习项目

<a href="https://dontttbefly-sketch.github.io/Xingtu-Targets/"><img src="assets/project-thumbnails/xingtu-overview.webp" width="49%" alt="星图目标管理"></a> <a href="https://dontttbefly-sketch.github.io/dontttbefly-sketch/brick-breaker/"><img src="assets/project-thumbnails/brick-breaker-screenshot.webp" width="49%" alt="霓虹破壁"></a>
<a href="https://dontttbefly-sketch.github.io/milky-way-3d-explorer/"><img src="assets/project-thumbnails/milky-way-screenshot.webp" width="49%" alt="真实宇宙 3D 探索"></a> <a href="https://dontttbefly-sketch.github.io/pupkit-dog-toy-store/"><img src="assets/project-thumbnails/pupkit-home-hero.webp" width="49%" alt="PUPKIT 小型犬玩具实验室"></a>

- **[星图目标管理](https://github.com/dontttbefly-sketch/Xingtu-Targets)**：把目标画成星图，每完成一次 routine 就点亮一段轨道。React + Vite 的 Web / PWA 版，macOS 原生版用 SwiftUI 推进中。[→ 在线体验](https://dontttbefly-sketch.github.io/Xingtu-Targets/)
- **[真实宇宙 3D 探索](https://github.com/dontttbefly-sketch/milky-way-3d-explorer)**：React + TypeScript + Three.js 的银河系学习模拟器，16 类图层可切换，用「实测 / 模型 / 艺术近似」标明每处数据的可信边界。[→ 在线体验](https://dontttbefly-sketch.github.io/milky-way-3d-explorer/)
- **[霓虹破壁](https://github.com/dontttbefly-sketch/brick-breaker)**：打砖块 × 肉鸽构筑的单文件 HTML 游戏，纯 Canvas + Web Audio，12 关流程、BOSS 节点与协议卡构筑。[→ 在线体验](https://dontttbefly-sketch.github.io/dontttbefly-sketch/brick-breaker/)
- **[PUPKIT 小型犬玩具实验室](https://github.com/dontttbefly-sketch/pupkit-dog-toy-store)**：不用任何真实商品图、全部用 CSS 图形表达的互动电商独立站，组合筛选、详情抽屉与玩具袋购物流完整。[→ 在线体验](https://dontttbefly-sketch.github.io/pupkit-dog-toy-store/)
- **[小说站点爬虫](https://github.com/dontttbefly-sketch/hetushu-obsidian-scraper)**：用 Playwright 把和图书的小说章节抓取并整理成 Obsidian Markdown 笔记，附中文教学文档。
- **[Markdown 公众号发布器](https://github.com/dontttbefly-sketch/wechat-md-publisher)**：本地 Markdown 一键转成公众号草稿，自动上传封面与正文图片，发布前检查敏感信息；只建草稿，人工确认后再发布。
- **[Codex Lark Skills](https://github.com/dontttbefly-sketch/codex-lark-skills)**：可复用的 Codex / Lark skill 合集，包括 STAR 周报整理、协作过程教程化、公开发布脱敏检查。

---

## 合集 / Archive

早期的轻量实验和 skill 收敛进两个合集，原独立仓库已归档：

- [**Portfolio Labs**](https://github.com/dontttbefly-sketch/portfolio-labs)：早期小工具与实验快照。
- [**Codex Lark Skills**](https://github.com/dontttbefly-sketch/codex-lark-skills)：可复用的 Codex / Lark skill 快照。

`import-to-photos`、`hetushu-obsidian-scraper` 与 `wechat-md-publisher` 已恢复为独立维护。

---

## 技术栈

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-f7df1e?style=flat-square&logo=javascript&logoColor=111111)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=ffffff)
![Python](https://img.shields.io/badge/Python-3776ab?style=flat-square&logo=python&logoColor=ffffff)
![Playwright](https://img.shields.io/badge/Playwright-2eAD33?style=flat-square&logo=playwright&logoColor=ffffff)
![React](https://img.shields.io/badge/React-20232a?style=flat-square&logo=react&logoColor=61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square&logo=typescript&logoColor=ffffff)
![Vite](https://img.shields.io/badge/Vite-646cff?style=flat-square&logo=vite&logoColor=ffffff)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=ffffff)
![HTML5](https://img.shields.io/badge/HTML5-e34f26?style=flat-square&logo=html5&logoColor=ffffff)
![CSS3](https://img.shields.io/badge/CSS3-1572b6?style=flat-square&logo=css3&logoColor=ffffff)
![Swift](https://img.shields.io/badge/Swift-f05138?style=flat-square&logo=swift&logoColor=ffffff)

</div>

---

## 仓库地图

| 仓库 | 类型 | 一句话 |
|---|---|---|
| [dontttbefly-sketch](https://github.com/dontttbefly-sketch/dontttbefly-sketch) | 主页 | 这份 README 与作品集站点 |
| [feishu-review-forwarder](https://github.com/dontttbefly-sketch/feishu-review-forwarder) | 公司项目 | 飞书差评自动转发 |
| [taobao-live-inspector](https://github.com/dontttbefly-sketch/taobao-live-inspector) | 公司项目 · 可在线演示 | 淘宝直播 AI 巡检与复盘 |
| [vibe-shelf](https://github.com/dontttbefly-sketch/vibe-shelf) | 精选 · 可在线体验 | 知识书架：把项目源码写成一本可以划词提问的书 |
| [resume-ai](https://github.com/dontttbefly-sketch/resume-ai) | 精选 · 可在线体验 | 简历工作台：改简历、对岗位、投简历、攒经历 |
| [import-to-photos](https://github.com/dontttbefly-sketch/import-to-photos) | 精选 · 工具 | macOS 截图/图片一键导入 iCloud 相册 |
| [unizen](https://github.com/dontttbefly-sketch/unizen) | 精选 | macOS 个人项目驾驶舱 |
| [Xingtu-Targets](https://github.com/dontttbefly-sketch/Xingtu-Targets) | 练习 · 可在线体验 | 星图目标管理 |
| [milky-way-3d-explorer](https://github.com/dontttbefly-sketch/milky-way-3d-explorer) | 练习 · 可在线体验 | 真实宇宙 3D 探索 |
| [brick-breaker](https://github.com/dontttbefly-sketch/brick-breaker) | 练习 · 可在线体验 | 霓虹破壁小游戏 |
| [pupkit-dog-toy-store](https://github.com/dontttbefly-sketch/pupkit-dog-toy-store) | 练习 · 可在线体验 | PUPKIT 互动电商概念站 |
| [hetushu-obsidian-scraper](https://github.com/dontttbefly-sketch/hetushu-obsidian-scraper) | 练习 · 工具 | 和图书章节抓取整理为 Obsidian 笔记 |
| [wechat-md-publisher](https://github.com/dontttbefly-sketch/wechat-md-publisher) | 练习 · 工具 | 本地 Markdown 转公众号草稿 |
| [portfolio-labs](https://github.com/dontttbefly-sketch/portfolio-labs) | 合集 | 小工具与实验快照 |
| [codex-lark-skills](https://github.com/dontttbefly-sketch/codex-lark-skills) | 合集 | Codex / Lark skill 快照 |
| study | fork | AI agent 学习 |

另有 4 个私有仓库承载业务工作流（蓝禾学、智能转化知识库等）；历史快照见两个合集仓库。

---

## 小记

这个主页是我的一张作品地图：哪些在做、哪些已归档、下一步往哪走，一目了然。
