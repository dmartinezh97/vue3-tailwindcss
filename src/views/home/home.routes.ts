import { PageEnum } from "@/enums/pageEnum"
import type { RouteRecordRaw } from "vue-router"
import HomeViewVue from "./HomeView.vue"
import SeleccionarNegocioViewVue from "./SeleccionarNegocioView.vue"
import TestViewVue from "./TestView.vue"
import ComponentViewVue from "./ComponentView.vue"

const routes: RouteRecordRaw[] = [
    {
        path: '',
        name: 'Inicio',
        component: HomeViewVue
    },
    {
        path: 'componentes',
        name: 'ComponentView',
        component: ComponentViewVue
    },
    {
        path: 'test2',
        name: 'Test2',
        component: TestViewVue
    },
]

export default routes