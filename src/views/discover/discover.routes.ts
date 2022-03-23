import type { RouteRecordRaw } from "vue-router"
import DiscoverViewVue from "./DiscoverView.vue"

const routes: RouteRecordRaw[] = [
    {
        path: '/discover',
        name: 'Discover',
        component: DiscoverViewVue
    },
]

export default routes