<div align="center">

# 你好，我是空杯

**独立开发者，正在把重要项目保留为独立入口，把轻量实验和 skill 收敛进合集仓库。**

我现在的 GitHub 重点是 6 个项目：一个私有业务工作流案例、一个飞书自动化工具、三个可在线体验的网页作品，以及一个互动电商独立站。<br>
其他小工具、学习实验和 Codex / Lark skill 已整理进统一合集，主页只展示真正值得单独展开的项目。

[![GitHub](https://img.shields.io/badge/GitHub-dontttbefly--sketch-181717?style=for-the-badge&logo=github)](https://github.com/dontttbefly-sketch)
[![核心项目](https://img.shields.io/badge/Focus-Core%20Projects-2563eb?style=for-the-badge)](#重要项目--core-projects)
[![项目合集](https://img.shields.io/badge/Collections-Portfolio%20Labs-0f766e?style=for-the-badge)](https://github.com/dontttbefly-sketch/portfolio-labs)

</div>

---

## 关于我

我是 **空杯**，正在系统地练习独立开发：从产品想法、交互设计、前端实现、工程组织，到 README、截图、安全脱敏、测试与发布说明，都尽量自己完整走一遍。

我现在更关注两件事：

- **保留重要项目的独立性**：业务价值清晰、体验完整、能持续迭代的项目单独展示。
- **把零散实验收敛起来**：小工具、学习代码和 skill 不再分散占据 GitHub 主页，而是进入合集仓库留档。

---

## 重要项目 / Core Projects

### 探域 1111 商品话术工作流 / tanyu-1111-skill-build

私有业务工作流项目，用于把 3C 商品资料、话术表、买家原声和品类思维导图整理成可上传的客服 QA 知识库表。公开主页只展示脱敏后的项目价值和流程，不公开源码。

**项目重点**

- 用 Python 脚本准备结构化证据包，Codex 做语义匹配、去重、答案选择和风险修复。
- 输出可审计的 `v1.xlsx`、流程验收记录和 `audit.json`。
- 通过独立同步流程把本地结果上传到飞书表格并回填 QA Base。
- 真实业务约束强，重点在质量门、可追溯来源和人工确认边界。

### [星图目标管理 / Xingtu-Targets](https://github.com/dontttbefly-sketch/Xingtu-Targets)

以宇宙星图为创意的目标规划工具。它把目标、routine、复盘和进度追踪组织成一张可视化星图，让长期计划不只是列表里的文字，而是可以持续点亮、推进和回望的成长路径。

**项目重点**

- Web/PWA 版本使用 React + Vite 构建。
- macOS 原生版本正在使用 SwiftUI 推进。
- iOS 原生版本框架已整理。
- 在线预览：[dontttbefly-sketch.github.io/Xingtu-Targets](https://dontttbefly-sketch.github.io/Xingtu-Targets/)

### [真实宇宙 3D 探索 / milky-way-3d-explorer](https://github.com/dontttbefly-sketch/milky-way-3d-explorer)

基于 React、TypeScript、Three.js 和 Vite 的沉浸式宇宙学习网页。项目用真实天文资料作为学习锚点，再结合程序化星场、银河结构、图层控制和中文学习面板，帮助用户理解太阳、银河系、星团、星系群与可观测宇宙之间的尺度关系。

**项目重点**

- 全屏 WebGL 3D 场景，支持拖拽、缩放、搜索和预设视角。
- 内置图层控制，可切换银河盘、旋臂、尘埃、星云、星团等视觉层。
- 用“实测 / 模型 / 艺术近似”标明数据可信边界。
- 在线预览：[dontttbefly-sketch.github.io/milky-way-3d-explorer](https://dontttbefly-sketch.github.io/milky-way-3d-explorer/)

### [霓虹破壁 / brick-breaker](https://github.com/dontttbefly-sketch/brick-breaker)

一个单文件 HTML 打砖块小游戏，核心体验是“经典打砖块 + 肉鸽构筑 + 霓虹街机反馈”。玩家在 12 关连续挑战中选择协议卡，形成多球、激光、重击、支援等不同打法。

**项目重点**

- 使用 HTML5 Canvas、原生 JavaScript 和 Web Audio API。
- 零依赖、无需构建，打开 HTML 文件即可游玩。
- 包含 12 关流程、BOSS 节点、特殊砖块、主动技能、得分与结算。
- 在线预览：[dontttbefly-sketch.github.io/dontttbefly-sketch/brick-breaker](https://dontttbefly-sketch.github.io/dontttbefly-sketch/brick-breaker/)

### [飞书客服差评转发器 / feishu-review-forwarder](https://github.com/dontttbefly-sketch/feishu-review-forwarder)

把飞书群自定义机器人收到的差评告警，按客服账号自动原话私聊转发给对应客服，减少人工盯群、复制消息和漏处理。

**项目重点**

- 识别指定飞书群机器人消息，并从内容中解析客服账号。
- 客服映射规则由飞书多维表格维护，人员字段自动映射接收人。
- 本地记录发送结果，方便排查成功、失败、权限和匹配问题。
- 项目围绕真实运营协作流设计，公开版本已做脱敏处理。

### [PUPKIT 小型犬玩具实验室 / pupkit-dog-toy-store](https://github.com/dontttbefly-sketch/pupkit-dog-toy-store)

一个作品集用途的互动电商独立站概念项目，主题是“小型犬玩具”。项目不依赖真实商品图片，而是用 CSS 图形、统一视觉系统和细节动效完成品牌表达、商品浏览、组合筛选、详情抽屉和玩具袋体验。

**项目重点**

- 纯静态站点，包含首页、商店页和玩法指南页，可直接打开预览。
- 商品浏览支持按玩法气质、身体尺度和购买心情组合筛选。
- 商品详情使用右侧抽屉承接浏览流，玩具袋支持数量、小计、减少、移除和支付占位反馈。
- 在线预览：[dontttbefly-sketch.github.io/pupkit-dog-toy-store](https://dontttbefly-sketch.github.io/pupkit-dog-toy-store/)

---

## 合集 / Archive

### [Portfolio Labs](https://github.com/dontttbefly-sketch/portfolio-labs)

轻量实验和小工具快照合集。这里保留 `wechat-md-publisher`、`hetushu-obsidian-scraper`、`import-to-photos`、`VideoCode` 的远端 `main` 快照；原仓库已归档，不再作为主要维护入口。

### [Codex Lark Skills](https://github.com/dontttbefly-sketch/codex-lark-skills)

公开 Codex / Lark skill 快照合集。这里保留周报整理、Vibe Coding 教程整理、公开发布脱敏检查等 skill；原独立 skill 仓库已归档。

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
当前重点：tanyu 业务工作流、飞书消息自动化、星图目标管理、宇宙 3D、PUPKIT、霓虹破壁
项目结构：重要项目独立维护，轻量实验和 skill 进入合集归档
技术方向：JavaScript / Node.js / Python / Playwright / React / TypeScript / Three.js / SwiftUI
长期目标：把零散实验收敛成更清晰、更能被真实使用和展示的独立项目组合
```

---

## 小记

这个主页会随着项目继续更新。<br>
我希望它不是一个不断堆项目名的列表，而是一张更清晰的作品地图：哪些项目真正重要，哪些经验已经归档，哪些方向值得继续投入。
