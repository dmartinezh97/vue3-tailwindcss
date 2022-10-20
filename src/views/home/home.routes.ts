import type { RouteRecordRaw } from "vue-router"
import HomeViewVue from "./HomeView.vue"

const routes: RouteRecordRaw[] = [
    {
        path: '',
        name: 'Inicio',
        component: HomeViewVue
    },
]

export default routes