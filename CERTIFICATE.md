# HTTPS 证书配置说明

本文档记录 `zrksite.tech` 在腾讯云 CVM 上通过 `nginx` 反向代理 Next.js 服务并启用 HTTPS 的做法。

## 环境信息

- 域名：`zrksite.tech`
- `www` 域名：`www.zrksite.tech`
- 服务器公网 IP：`43.142.0.214`
- 应用端口：`127.0.0.1:3000`
- Web 服务器：`nginx`
- 证书下载类型：`Nginx（适用于大部分场景）`

## 1. 域名解析

先在 DNSPod 中添加两条 A 记录：

- `@` -> `43.142.0.214`
- `www` -> `43.142.0.214`

验证命令：

```bash
nslookup zrksite.tech 8.8.8.8
nslookup www.zrksite.tech 8.8.8.8
```

## 2. 验证 Next.js 服务

确认应用已经在本机 `3000` 端口运行：

```bash
ss -lntp | grep 3000
curl -I http://127.0.0.1:3000
```

## 3. 配置 HTTP 反向代理

当前业务 nginx 配置文件为：

```text
/etc/nginx/conf.d/nextjs-app.conf
```

HTTP 版本示例配置：

```nginx
server {
    listen 80;
    server_name zrksite.tech www.zrksite.tech;

    location ^~ /.well-known/pki-validation/ {
        root /usr/share/nginx/html;
        default_type text/plain;
    }

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

检查并重载：

```bash
nginx -t
systemctl reload nginx
```

## 4. 证书域名验证

如果证书平台要求通过文件校验域名，需要创建验证目录和文件：

```bash
mkdir -p /usr/share/nginx/html/.well-known/pki-validation
vi /usr/share/nginx/html/.well-known/pki-validation/fileauth.txt
```

将平台提供的校验内容完整写入 `fileauth.txt`，然后验证公网访问：

```bash
curl http://www.zrksite.tech/.well-known/pki-validation/fileauth.txt
```

## 5. 上传证书文件

在服务器中创建证书目录：

```bash
mkdir -p /etc/nginx/ssl
```

将下载的证书文件上传到该目录。建议整理成固定文件名：

- `/etc/nginx/ssl/zrksite.tech.crt`
- `/etc/nginx/ssl/zrksite.tech.key`

检查上传结果：

```bash
ls -l /etc/nginx/ssl
```

## 6. 启用 HTTPS

将 `/etc/nginx/conf.d/nextjs-app.conf` 调整为：

```nginx
server {
    listen 80;
    server_name zrksite.tech www.zrksite.tech;

    location ^~ /.well-known/pki-validation/ {
        root /usr/share/nginx/html;
        default_type text/plain;
    }

    location / {
        return 301 https://zrksite.tech$request_uri;
    }
}

server {
    listen 443 ssl http2;
    server_name zrksite.tech www.zrksite.tech;

    ssl_certificate /etc/nginx/ssl/zrksite.tech.crt;
    ssl_certificate_key /etc/nginx/ssl/zrksite.tech.key;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

检查并重载：

```bash
nginx -t
systemctl reload nginx
```

## 7. 放行安全组端口

在腾讯云安全组中至少放行以下端口：

- `22`：SSH
- `80`：HTTP
- `443`：HTTPS

## 8. 验证访问

```bash
curl -I http://zrksite.tech
curl -I http://www.zrksite.tech
curl -I https://zrksite.tech
curl -I https://www.zrksite.tech
```

预期：

- HTTP 自动跳转到 HTTPS
- HTTPS 返回 `200` 或站点正常业务状态码
- 响应头中可见 `Server: nginx`，并由 Next.js 返回页面内容

## 9. 常见问题

`curl: (7) Failed to connect`

- 优先检查域名解析是否指向服务器公网 IP
- 检查 `nginx` 是否在监听 `80/443`
- 检查腾讯云安全组是否放行端口

`nginx: [warn] conflicting server name "_" on 0.0.0.0:80, ignored`

- 说明默认站点和业务站点都在监听 `80`
- 通常不影响业务访问，但建议后续清理默认 `server_name _;` 的配置，避免混淆

证书校验文件访问不到

- 检查 `/.well-known/pki-validation/` 是否走静态目录
- 检查验证文件路径和文件内容是否完全一致
