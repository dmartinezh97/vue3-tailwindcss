import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import vuetify from 'vite-plugin-vuetify'
import Layouts from 'vite-plugin-vue-layouts'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 80
  },
  plugins: [
    vue(),
    vuetify({
      styles: {
        configFile: 'src/styles/variables/_vuetify.css',
      }
    }),
    Pages({
      dirs: ['./src/pages'],
      onRoutesGenerated: routes => [
        ...routes,
      ],
    }),
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
