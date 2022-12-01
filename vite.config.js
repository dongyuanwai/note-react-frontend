import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createStyleImportPlugin } from 'vite-plugin-style-import';

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
})
