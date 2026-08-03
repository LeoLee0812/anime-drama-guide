# 从 0 开始的 AI 漫剧之旅

[![Astro](https://img.shields.io/badge/Astro-7.1-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![Starlight](https://img.shields.io/badge/Starlight-0.41-0EA5E9?style=flat-square&logo=astro&logoColor=white)](https://starlight.astro.build/)
[![Deploy](https://img.shields.io/badge/Vercel-已部署-000000?style=flat-square&logo=vercel&logoColor=white)](https://manju.saveme505.help)
[![License](https://img.shields.io/badge/内容-仅供学习-f97316?style=flat-square)](#版权说明)

面向零基础创作者的 AI 漫剧知识库。**先看懂影视行话，再写对提示词，然后少踩官方已经写明白的坑。**

线上地址：<https://manju.saveme505.help>

## 这个站在解决什么问题

做 AI 漫剧卡住的从来不是"哪个按钮点不下去"，而是两件事：看不懂影视行话，和不知道模型到底吃哪一套提示词。

市面上的教程要么在教点按钮，要么在堆没人验证过的"魔法咒语"。这个站反过来——**把影视语言讲成人话，把字节官方文档扒出来原文摘录**，最后才给能直接抄的模板。

## 内容结构

| 册 | 内容 |
|---|---|
| 第 1 册 · 影视语言扫盲 | 景别、运镜、机位、分镜表、剪辑节奏、180 度轴线、情绪→身体动作对照表 |
| 第 2 册 · 提示词工程 | 官方公式、符号语法、分镜时序、多模态参考、约束词与 API 参数 |
| 第 3 册 · 风格词库 | 17 种画风流派、光影词、色调词、情绪氛围与风格前缀 |
| 第 4 册 · 官方避坑手册 | 火山引擎「常见问题」全 12 条原文 |
| 第 5 册 · 模板库 | 生产管线、角色卡、三个题材的完整可复制提示词、剧本与分镜指令 |
| 附录 · 平台与成本 | 平台选型、成本量级、官方文档直达链接 |

## 内容来源

站内所有内容分三类，正文中均有标注：

- **官方原文**：火山引擎 [Seedance 2.0](https://docs.volcengine.com/docs/82379/2222480) / [1.5 Pro](https://docs.volcengine.com/docs/82379/2168087) / [1.0](https://docs.volcengine.com/docs/82379/1631633) 提示词指南，逐字摘录未做改写
- **影视通识**：影视行业成熟概念
- **创作者实测**：社区教程总结，注明出处，需自行验证

价格、额度这类易变数字仅供判断量级，**以官方页面为准**。

## 本地开发

```bash
npm install
npm run dev      # 本地预览 localhost:4321
npm run build    # 构建静态站到 dist/
```

Node 版本要求 `>=22.12.0`。

## 部署

纯静态输出，托管在 Vercel，绑定自定义域名 `manju.saveme505.help`。

推送到 `main` 分支后 Vercel 自动部署，**不使用手动 `vercel deploy`**。

## 版权说明

站内引用的火山引擎官方文档内容版权归字节跳动所有，本站仅作学习整理与中文归纳之用。创作者教程内容均已标注原始出处链接。
