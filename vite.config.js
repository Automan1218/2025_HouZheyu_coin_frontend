import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // 默认是 "dist"，可以改成自定义路径
    emptyOutDir: true, // 每次构建时清理输出目录
  },
  // 解决本地开发环境跨域问题
  server: {
    port: 5173, // 本地开发端口
    host: true, // 允许通过 IP 地址访问
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 指向后端 API 的地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
