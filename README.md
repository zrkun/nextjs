# Next.js Clean Template

一个干净、可复用的 Next.js 模板，适合直接作为新项目起点。

## 技术栈

- Next.js 15 (App Router)
- React 19 + TypeScript
- shadcn/ui（基于 Tailwind + Radix）
- Tailwind CSS 4
- OXC（oxlint + oxfmt）

## 快速开始

```bash
pnpm install
pnpm dev
```

打开 `http://localhost:3000` 查看页面。

## 可用命令

```bash
pnpm dev        # 启动开发环境
pnpm build      # 生产构建
pnpm start      # 启动生产服务
pnpm lint       # 代码检查（oxlint）
pnpm format     # 自动格式化（oxfmt）
pnpm format:check # 检查格式（oxfmt）
pnpm typecheck  # TypeScript 类型检查
```

## 目录结构

```text
app/
  layout.tsx        # 根布局
  page.tsx          # 模板首页
  globals.css       # 全局样式
  api/health/route.ts # 示例 API 路由
components/ui/
  button.tsx        # shadcn 按钮组件
  card.tsx          # shadcn 卡片组件
lib/
  utils.ts          # cn 工具函数
  api/client.ts     # API 请求封装
  api/types.ts      # API 响应类型
public/
  favicon.ico
```

## 模板说明

这个模板已移除业务页面和示例接口，只保留基础工程能力。你可以按下面方式扩展：

1. 在 `app/` 中按路由新增页面。
2. 新建 `components/` 放通用组件。
3. 新建 `lib/` 放请求、配置和工具方法。

## API 模块

- 健康检查路由：`GET /api/health`
- 请求封装入口：`@/lib/api`

## 部署文档

- 自动部署说明：`DEPLOY.md`
- HTTPS 证书配置：`CERTIFICATE.md`
