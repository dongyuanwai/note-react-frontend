import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createStyleImportPlugin } from 'vite-plugin-style-import';
import path from 'path';

export default defineConfig({
  plugins: [react(),createStyleImportPlugin(
    {
      libs:[
        {
          libraryName: 'zarm',
          esModules: true,
          resolveStyle: (name)=>{
            return `zarm/es/${name}/style/css`;
          }
        }
      ]
    }
  )],
  // 配置less
  css: {
    modules: {
      localsConvention: 'dashesOnly'
    },
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      }
    }
  },
  // 配置代理
  server: {
    proxy: {
      '/api':{
        // 当遇到 /api 路径时 换成target的值
        target: 'http://127.0.0.1:7001',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/,'')
      },
    }
  },

  // 配置别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // src 路径
      'utils': path.resolve(__dirname, 'src/utils'), // src 路径
      'config': path.resolve(__dirname, 'src/config') // src 路径
    }
  },

})
