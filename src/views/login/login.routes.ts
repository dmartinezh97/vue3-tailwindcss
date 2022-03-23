import type { RouteRecordRaw } from "vue-router"
import LoginViewVue from "./LoginView.vue"

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'Login',
        component: LoginViewVue
    },
]

export default routes