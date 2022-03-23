import type { RouteRecordRaw } from "vue-router"
import BienvenidaViewVue from "./BienvenidaView.vue"
import { PageEnum } from '../../enums/pageEnum';

const routes: RouteRecordRaw[] = [
    {
        path: PageEnum.BIENVENIDA,
        name: 'Bienvenida',
        component: BienvenidaViewVue
    },
]

export default routes