import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import routes from '~pages'


export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...setupLayouts(routes),
  ]
})

//Config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}