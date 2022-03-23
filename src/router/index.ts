import { bienvenidaModule } from '@/views/bienvenida';
import { discoverModule } from '@/views/discover';
import { homeModule } from '@/views/home';
import { loginModule } from '@/views/login';
import { negocioModule } from '@/views/negocio';
import { profileModule } from '@/views/profile';
import { signupModule } from '@/views/signup';
import { testModule } from '@/views/test';
import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...bienvenidaModule.routes,
    ...homeModule.routes,
    ...negocioModule.routes,
    ...loginModule.routes,
    ...signupModule.routes,
    ...discoverModule.routes,
    ...profileModule.routes,
    ...testModule.routes
  ]
})

//Config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}