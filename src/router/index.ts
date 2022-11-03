import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import { discoverModule } from '@/views/discover';
import { homeModule } from '@/views/home';
import { loginModule } from '@/views/login';
import { negocioModule } from '@/views/negocios';
import { profileModule } from '@/views/profile';
import { signupModule } from '@/views/signup';
import { testModule } from '@/views/test';
import BaseViewVue from '@/views/BaseView.vue';
import BaseNegocioViewVue from '@/views/BaseNegocioView.vue';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: "BaseInicio",
      component: BaseViewVue,
      children: [
        ...homeModule.routes,
        ...loginModule.routes,
        ...signupModule.routes,
        ...discoverModule.routes,
        ...profileModule.routes,
        ...testModule.routes,
      ]
    },
    ...negocioModule.routes
  ]
})

//Config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}