# 自动部署说明（裸仓库 + post-receive）

本文档说明当前线上自动部署机制：本地 `git push` 到云服务器裸仓库后，自动构建并重启服务。

## 1. 目录约定

- 裸仓库：`/www/git/nextjs.git`
- 运行目录：`/www/apps/nextjs-app`
- Hook 脚本：`/www/git/nextjs.git/hooks/post-receive`
- 部署日志：`/var/log/nextjs-deploy.log`
- PM2 进程名：`nextjs-app`

## 2. 部署原理

1. 本地代码推送到服务器裸仓库。
2. 裸仓库触发 `post-receive`。
3. 脚本把代码检出到运行目录。
4. 执行 `pnpm install --frozen-lockfile` + `pnpm build`。
5. 执行 `pm2 restart nextjs-app`（不存在则 `pm2 start`）。

## 3. 本地推送命令

先确认远程：

```bash
git remote -v
```

当前使用的是 `cvm` 远程（示例）：

```bash
git push cvm main
```

如果首次设置上游：

```bash
git push -u cvm main
```

## 4. 服务器检查命令

查看 PM2 状态：

```bash
pm2 status
pm2 logs nextjs-app --lines 100
```

查看部署日志：

```bash
tail -n 200 /var/log/nextjs-deploy.log
```

查看服务端口（以 3000 为例）：

```bash
ss -lntp | grep 3000
```

## 5. 常见问题

`fatal: 'prod' does not appear to be a git repository`

- 原因：本地没有 `prod` 这个远程名，实际远程是 `cvm`。
- 处理：使用 `git push cvm main`，或把远程重命名为 `prod`。

`fatal: not a git repository`

- 原因：在非项目目录执行了 `git push`（例如服务器 `~` 目录）。
- 处理：回到本地项目目录再推送。

`pnpm: command not found`

- 原因：服务器环境变量没有 `pnpm` 路径。
- 处理：安装 `pnpm` 并把路径加入 `PATH`（已在 hook 脚本中处理常见路径）。
