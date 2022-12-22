import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import { homeModule } from '@/views/home';
import { negocioModule } from '@/views/negocios';
import { profileModule } from '@/views/profile';
import BaseViewVue from '@/views/app/BaseView.vue';
import BaseNegocioViewVue from '@/views/admin/BaseAdminView.vue';
import BaseAdminViewVue from '@/views/admin/BaseAdminView.vue';
import { adminModule } from '@/views/admin';
import { PageEnum } from '@/enums/pageEnum';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: PageEnum.BASE_INICIO,
      component: BaseViewVue,
      children: [
        ...homeModule.routes,
        //...profileModule.routes,
      ]
    },
    {
      path: '/admin',
      name: PageEnum.BASE_ADMIN,
      component: BaseAdminViewVue,
      children: [
        ...adminModule.routes,
      ]
    },
    //...negocioModule.routes
  ]
})

//Config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}