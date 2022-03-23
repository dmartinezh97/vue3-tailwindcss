import type { RouteRecordRaw } from "vue-router"
import EventosViewVue from "./EventosView.vue";
import { PageEnum } from '../../enums/pageEnum';

const routes: RouteRecordRaw[] = [
    {
        path: PageEnum.EVENTOS,
        name: 'Eventos',
        component: EventosViewVue
    },
]

export default routes