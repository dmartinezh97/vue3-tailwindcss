import type { RouteRecordRaw } from "vue-router"
import TestViewVue from "./TestView.vue"

const routes: RouteRecordRaw[] = [
    {
        path: '/test',
        name: 'Test',
        component: TestViewVue
    },
]

export default routes