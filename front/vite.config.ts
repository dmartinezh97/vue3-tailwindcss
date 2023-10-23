import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 80
  },
  plugins: [
    vue(),
    Components({
      dirs: ['src/@core/components'],
      dts: true,
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },

    ]
    // alias: {
    //   '@': fileURLToPath(new URL('./src', import.meta.url))
    // }
  }
})
