import type { RouteRecordRaw } from "vue-router"
import SignupViewVue from "./SignupView.vue"

const routes: RouteRecordRaw[] = [
    {
        path: '/signup',
        name: 'Signup',
        component: SignupViewVue
    },
]

export default routes