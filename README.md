<div align="center">

# 你好，我是空杯

**独立开发者，正在把自动化工具链和可运行作品集做成能展示、能复用、能继续迭代的项目。**

我最近的重心是把真实工作流沉淀成工具：Markdown 到微信公众号草稿、飞书消息自动分发、Obsidian 内容整理、Codex / Lark skill。<br>
同时，我也保留成长工具、交互式可视化、小游戏和独立站项目，用它们练习产品表达、视觉体验和完整交付。

[![GitHub](https://img.shields.io/badge/GitHub-dontttbefly--sketch-181717?style=for-the-badge&logo=github)](https://github.com/dontttbefly-sketch)
[![最近重心](https://img.shields.io/badge/Focus-Automation%20Toolchain-2563eb?style=for-the-badge)](#最近推送--recent-builds)
[![当前项目](https://img.shields.io/badge/Building-WeChat%20Publisher-0f766e?style=for-the-badge)](https://github.com/dontttbefly-sketch/wechat-md-publisher)

</div>

---

## 关于我

我是 **空杯**，正在系统地练习独立开发：从产品想法、交互设计、前端实现、工程组织，到 README、截图、安全脱敏、测试与发布说明，都尽量自己完整走一遍。

我现在更关注两件事：

- **把真实流程工具化**：把公众号排版发布、飞书消息分发、Obsidian 内容整理、周报生成这些重复流程做成可运行工具。
- **把项目做成作品入口**：每个项目尽量有明确场景、文档、演示路径和后续迭代方向，而不是只停在一次性 demo。

---

## 最近推送 / Recent Builds

### [微信公众号 Markdown 发布器 / wechat-md-publisher](https://github.com/dontttbefly-sketch/wechat-md-publisher)

本地 Markdown 转微信公众号图文草稿箱的发布工具。它把文章检查、HTML 预览、正文图片上传、封面生成和草稿创建串成一条可复用链路，适合持续发布 AI 编程 / Codex 协作开发日记。

**项目重点**

- 支持 frontmatter、封面、摘要、作者和正文图片路径检查。
- 可以生成本地 HTML 预览，先看排版再进草稿箱。
- 支持 Guizang 风格公众号封面生成，包括 `21:9` 主封面和 `1:1` 方封面。
- 创建草稿前会检查敏感信息，不自动群发，保留人工确认环节。

### [飞书客服差评转发器 / feishu-review-forwarder](https://github.com/dontttbefly-sketch/feishu-review-forwarder)

把飞书群自定义机器人收到的差评告警，按客服账号自动原话私聊转发给对应客服，减少人工盯群、复制消息和漏处理。

**项目重点**

- 识别指定飞书群机器人消息，并从内容中解析客服账号。
- 客服映射规则由飞书多维表格维护，人员字段自动映射接收人。
- 本地记录发送结果，方便排查成功、失败、权限和匹配问题。
- 项目围绕真实运营协作流设计，公开版本已做脱敏处理。

### [和图书到 Obsidian 爬虫 / hetushu-obsidian-scraper](https://github.com/dontttbefly-sketch/hetushu-obsidian-scraper)

面向学习和个人整理的 Playwright 示例项目：打开真实浏览器读取 JavaScript 渲染后的章节内容，清洗水印，并按“书名 / 卷 / 章节”的结构写入 Obsidian Markdown。

**项目重点**

- 使用 Python + Playwright 处理动态网页内容。
- 自动解析标题、正文、下一章链接、卷号和章号。
- 写入 Obsidian 目录结构并维护 `00_目录.md`。
- README 中明确安全、版权、频率控制和公开发布边界。

### [Codex / Lark Skill 工具链](https://github.com/dontttbefly-sketch?tab=repositories&q=skill)

把重复的 Codex + Lark 协作流程封装成可复用 skill，重点是让工具替人做整理、检查、发布前准备和工作流编排。

**项目重点**

- [飞书 STAR 周报 Skill](https://github.com/dontttbefly-sketch/feishu-weekly-star-report-skill)：从飞书 / Lark 群聊消息整理个人周产出，生成 STAR 周报结构。
- [Vibe Coding 教程整理 Skill](https://github.com/dontttbefly-sketch/vibecoding-process-tutorial-skill)：把 Codex 协作开发过程整理成中文教学型 Markdown 文档。
- [GitHub 公开发布 Skill](https://github.com/dontttbefly-sketch/github-public-publisher-skill)：在公开发布前做脱敏审查和仓库发布流程整理。

---

## 作品集锚点

### [星图目标管理 / Xingtu-Targets](https://github.com/dontttbefly-sketch/Xingtu-Targets)

以宇宙星图为创意的目标规划工具。它把目标、routine、复盘和进度追踪组织成一张可视化星图，让长期计划不只是列表里的文字，而是可以持续点亮、推进和回望的成长路径。

**项目重点**

- Web/PWA 版本使用 React + Vite 构建。
- macOS 原生版本正在使用 SwiftUI 推进。
- iOS 原生版本框架已整理。
- 核心表达围绕恒星、行星轨道、routine 和成长路径展开。

### [真实宇宙 3D 探索 / milky-way-3d-explorer](https://github.com/dontttbefly-sketch/milky-way-3d-explorer)

基于 React、TypeScript、Three.js 和 Vite 的沉浸式宇宙学习网页。项目用真实天文资料作为学习锚点，再结合程序化星场、银河结构、图层控制和中文学习面板，帮助用户理解太阳、银河系、星团、星系群与可观测宇宙之间的尺度关系。

**项目重点**

- 全屏 WebGL 3D 场景，支持拖拽、缩放、搜索和预设视角。
- 内置图层控制，可切换银河盘、旋臂、尘埃、星云、星团等视觉层。
- 用“实测 / 模型 / 艺术近似”标明数据可信边界。
- 使用 Vitest 覆盖核心数据、坐标换算、视觉质量和生成逻辑。

### [PUPKIT 小型犬玩具实验室 / pupkit-dog-toy-store](https://github.com/dontttbefly-sketch/pupkit-dog-toy-store)

一个作品集用途的互动电商独立站概念项目，主题是“小型犬玩具”。项目不依赖真实商品图片，而是用 CSS 图形、统一视觉系统和细节动效完成品牌表达、商品浏览、组合筛选、详情抽屉和玩具袋体验。

**项目重点**

- 纯静态站点，包含首页、商店页和玩法指南页，可直接打开预览。
- 商品浏览支持按玩法气质、身体尺度和购买心情组合筛选。
- 商品详情使用右侧抽屉承接浏览流，玩具袋支持数量、小计、减少、移除和支付占位反馈。
- 视觉方向为“温暖实验室”，用奶油纸底、黑色线条、柠檬黄重点色和 CSS 玩具轮廓建立品牌识别。

### [霓虹破壁 / brick-breaker](https://github.com/dontttbefly-sketch/brick-breaker)

一个单文件 HTML 打砖块小游戏，核心体验是“经典打砖块 + 肉鸽构筑 + 霓虹街机反馈”。玩家在 12 关连续挑战中选择协议卡，形成多球、激光、重击、支援等不同打法。

**项目重点**

- 使用 HTML5 Canvas、原生 JavaScript 和 Web Audio API。
- 零依赖、无需构建，打开 HTML 文件即可游玩。
- 包含 12 关流程、BOSS 节点、特殊砖块、主动技能、得分与结算。
- 协议卡系统支持多种 build 组合和联动效果。

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

## 我正在打磨的方向

```text
当前重点：微信公众号发布器、飞书消息自动化、Obsidian 内容整理、Codex/Lark Skill
产品方向：真实工作流工具、成长系统、可视化学习、游戏化体验、独立站表达
技术方向：JavaScript / Node.js / Python / Playwright / React / TypeScript / Three.js / SwiftUI
长期目标：把零散实验整理成更完整、更能被真实使用的独立产品和自动化工具链
```

---

## 小记

这个主页会随着项目继续更新。<br>
我希望它不是一个静态简历，而是一个不断长出新作品的入口：能看到我最近 push 了什么、正在解决什么真实问题，以及怎么把一个想法推进到可以展示和复用的程度。
