import { PageEnum } from "@/enums/pageEnum"
import type { RouteRecordRaw } from "vue-router"
import HomeViewVue from "./HomeView.vue"
import SeleccionarNegocioViewVue from "./SeleccionarNegocioView.vue"
import TestViewVue from "./TestView.vue"

const routes: RouteRecordRaw[] = [
    {
        path: '',
        name: 'Inicio',
        component: HomeViewVue
    },
    // {
    //     path: 'seleccionar-negocio',
    //     name: PageEnum.SELECCIONAR_NEGOCIO,
    //     component: SeleccionarNegocioViewVue,
    //     meta: {
    //         requiresAuth: true
    //     }
    // },
    {
        path: 'test2',
        name: 'Test2',
        component: TestViewVue
    },
]

export default routes