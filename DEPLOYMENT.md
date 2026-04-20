# 部署指南：Cloudflare Pages + GitHub

## 前置要求
- 项目已成功同步到GitHub仓库（当前已完成）
- 已注册Cloudflare账户（https://dash.cloudflare.com/sign-up）

## 部署方式一：通过Cloudflare Dashboard部署（推荐）

### 第一步：准备项目
确保您的项目已满足以下要求：
- 根目录有 `package.json`，包含 `build` 脚本
- 项目使用React + Vite（已满足）

### 第二步：在Cloudflare Dashboard中设置
1. **登录Cloudflare**：访问 https://dash.cloudflare.com/
2. **进入Workers & Pages**：点击左侧菜单的 "Workers & Pages"
3. **创建新应用**：点击 "Create application"
4. **选择Pages**：切换到 "Pages" 标签页
5. **连接GitHub**：点击 "Connect to Git"，选择您的GitHub仓库 `moziqi1/moziqi`
6. **配置构建设置**：
   - **Project name**：为您的项目命名（如：商务数据分析实训平台）
   - **Production branch**：选择 `master`
   - **Build command**：`npm run build`
   - **Build output directory**：`dist`
   - **Environment variables**（可选）：添加您的环境变量，如 `VITE_API_URL`

### 第三步：部署
1. 点击 "Save and Deploy"
2. 等待部署完成（通常1-2分钟）
3. 部署成功后，您会收到一个类似 `https://your-project-name.pages.dev` 的链接

## 部署方式二：通过Cloudflare CLI部署

### 第一步：安装Wrangler CLI
```bash
npm install -g wrangler
```

### 第二步：登录Cloudflare
```bash
wrangler login
```
按照提示完成登录流程

### 第三步：创建Pages项目
```bash
wrangler pages project create
```
按照提示输入项目名称

### 第四步：部署
```bash
# 构建项目
npm run build

# 部署到Pages
wrangler pages deploy dist
```

## 后端API部署建议

由于Cloudflare Pages主要托管静态内容，您的后端API需要单独部署。推荐方案：

### 方案一：使用Cloudflare Workers
将Express应用迁移到Cloudflare Workers，实现全栈部署。

### 方案二：使用其他托管服务
- Vercel Serverless Functions
- Railway
- Render
- AWS Lambda

### 方案三：简化部署（演示用）
将模拟数据集成到前端，暂时不需要后端API。

## 更新API配置
如果您部署了后端API，需要更新环境变量：

1. 在Cloudflare Pages项目设置中添加环境变量：
   ```
   VITE_API_URL=https://your-api-domain.com/api
   ```

2. 重新部署项目使配置生效

## 持续部署设置
一旦部署成功，Cloudflare Pages会自动设置GitHub Webhook：
- 每次push到 `master` 分支，都会自动触发新的部署
- 您可以在 "Deployments" 标签页查看部署历史和状态

## 域名绑定（可选）
1. 在Cloudflare Pages项目设置中
2. 点击 "Custom domains" 标签页
3. 添加您的自定义域名
4. 按照提示完成DNS配置

## 故障排除

### 构建失败
- 检查构建日志中的错误信息
- 确保所有依赖在 `package.json` 中声明
- 确保TypeScript编译通过

### 路由问题（React Router）
在项目根目录创建 `_redirects` 文件：
```
/*    /index.html   200
```
这将确保所有路由都正确返回index.html

## 项目当前状态
✅ 项目已成功推送到GitHub
✅ 项目包含完整的构建配置
✅ 使用Vite + React + TypeScript，完全兼容Cloudflare Pages
✅ 响应式设计已实现

---

祝您部署顺利！如有任何问题，请参考Cloudflare官方文档：https://developers.cloudflare.com/pages/
