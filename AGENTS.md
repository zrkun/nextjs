---
inclusion: always
---

# AGENT 执行规范

本文件定义当前仓库的执行硬约束。

本仓库是一个基于 `Next.js` App Router 的前端项目，当前主要技术栈包括：

- `Next.js 16`
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`
- `Radix UI`
- `oxlint` / `oxfmt`

项目内自定义 skills 统一以 `.agent/skills/` 为准。

涉及 React / Next 页面、组件、交互、Hook、路由、API Route 时，统一先遵循 `react-codex` skill 的工作流；本文件只负责说明仓库级规则，不重复展开实现细节。

## 1. 优先级

1. 本文件是仓库级执行规范。
2. 只要在本仓库内工作，必须优先遵守本文件。
3. 若本文件与默认行为冲突，以本文件为准。
4. 若任务命中 React / Next 开发范畴，必须先加载 `react-codex`，再继续分析和修改。

## 2. 项目识别

在本仓库内，默认按以下事实理解项目结构与约束：

- 使用 `app/` 目录和 App Router。
- 页面、布局、路由处理通常位于 `app/**`。
- 可复用组件通常位于 `components/**`。
- 工具方法与 API 封装通常位于 `lib/**`。
- 路径别名使用 `@/*`。
- 包管理器使用 `pnpm`。
- 常用校验命令为 `pnpm lint`、`pnpm typecheck`、`pnpm build`。

若发现实际结构已变更，应先以仓库现状为准，再在实现中做适配。

## 3. React 任务前置要求

当任务涉及 React / Next 代码编写、修改、重构时，必须先加载 `react-codex`，再进行分析、设计和改码。

### 3.1 触发条件

命中任一即视为 React / Next 任务：

- `react`
- `next`
- `next.js`
- `app router`
- `page`
- `layout`
- `route`
- `组件`
- `component`
- `tsx`
- `jsx`
- `hook`
- `useState`
- `useEffect`
- `use client`
- `use server`
- `button`
- `card`
- `form`
- `table`
- `ui`
- `交互`
- `页面`
- `路由`
- `前端开发`
- `性能优化`
- `重构`

以及以下目录下的代码改动：

- `app/**`
- `components/**`
- 任意 `*.tsx`

### 3.2 必须执行的命令

```bash
npx openskills read react-codex
```

### 3.3 豁免场景

以下场景通常不要求先加载 `react-codex`：

- 纯问答或咨询，不涉及代码改动
- 纯代码审查、问题定位、bug 分析，但暂不改代码
- 仅修改文档文件，如 `README.md`、`DEPLOY.md`、`CERTIFICATE.md`、`AGENTS.md`
- 仅修改配置文件，如 `package.json`、`tsconfig.json`、`next.config.ts`、`postcss.config.mjs`
- 仅修改纯样式文件，如 `.css`
- 仅修改类型声明文件，如 `.d.ts`
- 仅修改与 React 无关的工具函数、脚本或工程配置

## 4. 执行前自检

开始实现前，至少检查以下事项：

1. 当前任务是否命中 React / Next 触发条件。
2. 若命中，是否已执行 `npx openskills read react-codex`。
3. 是否已结合当前仓库结构选择正确落点，例如 `app/`、`components/`、`lib/`。
4. 是否使用 `pnpm` 相关命令，而不是假定使用 `npm` 或 `yarn`。
5. 是否避免重复加载已在上下文中的同一 skill。

## 5. 实施约束

在本仓库中执行修改时，额外遵守以下约束：

- 优先保持现有 App Router 目录结构，不随意改回 Pages Router 风格。
- 新增或修改导入时，优先使用 `@/` 别名。
- 修改页面或组件时，兼顾服务端组件 / 客户端组件边界，避免无必要添加 `"use client"`。
- 若涉及 API 调用，优先复用 `lib/api/**` 中已有封装。
- 若涉及代码校验，优先使用仓库已定义脚本，不自行引入新的 lint / format 体系。

## 6. 验证约定

完成改动后，按任务影响范围选择合适验证方式：

- 小范围修改：至少运行相关检查
- 涉及类型影响：运行 `pnpm typecheck`
- 涉及代码规范或批量调整：运行 `pnpm lint`
- 涉及路由、构建或框架行为：优先补充 `pnpm build`

若因环境、耗时或非本次范围原因未执行，应在结果说明中明确写出。

## 7. 失败补救策略

若发现本应触发 React / Next 流程却未加载 `react-codex`：

1. 立即停止继续实现。
2. 先执行 `npx openskills read react-codex`。
3. 重新基于该 workflow 校验方案与改动点。
4. 再继续任务。

## 8. 职责边界

- `AGENTS.md` 负责仓库级强约束。
- `react-codex` 负责 React / Next 任务的具体工作流。

换句话说：

- `AGENTS.md` 管“这个仓库里必须先做什么、优先遵守什么”。
- `react-codex` 管“React / Next 任务具体怎么分析、实现和验证”。
