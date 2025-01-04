# 构建阶段
FROM node:18 AS builder

# 设置工作目录
WORKDIR /app

# 复制项目的 package.json 和 package-lock.json
COPY package.json package-lock.json ./

# 安装项目依赖
RUN npm install

# 复制项目文件到工作目录
COPY . .

# 构建生产版本的前端文件
RUN npm run build

# 生产阶段，使用 Nginx 来提供静态文件服务
FROM nginx:alpine

# 复制构建后的前端文件到 Nginx 的默认 HTML 目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 暴露 Nginx 默认端口 80
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
