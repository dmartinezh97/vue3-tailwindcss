import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import vuetify from 'vite-plugin-vuetify'
import Layouts from 'vite-plugin-vue-layouts'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '.',
  server: {
    host: '0.0.0.0',
    port: 80
  },
  plugins: [
    vue(),

    // ℹ️  https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin
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
    Layouts({
      layoutsDirs: './src/layouts'
    }),
    Components({
      dirs: ['src/@core/components', 'src/components'],
      dts: true,
    }),
    // ℹ️ Más información: https://www.npmjs.com/package/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', 'vue-i18n', 'pinia'],
      vueTemplate: true
    })
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@core', replacement: fileURLToPath(new URL('./src/@core', import.meta.url)) },
      { find: '@plugins', replacement: fileURLToPath(new URL('./src/plugins', import.meta.url)) },
      { find: '@layouts', replacement: fileURLToPath(new URL('./src/@layouts', import.meta.url)) },
      { find: '@configuracion-variables', replacement: fileURLToPath(new URL('./src/@core/css/base/_variables.scss', import.meta.url)) },
    ]
  },
  build: {
    // ℹ️ https://vitejs.dev/config/build-options.html#build-chunksizewarninglimit
    chunkSizeWarningLimit: 5000,
  },
  optimizeDeps: {
    exclude: ['vuetify'],
    entries: [
      './src/**/*.vue',
    ],
  },
})
