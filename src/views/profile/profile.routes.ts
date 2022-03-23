import type { RouteRecordRaw } from "vue-router"
import ProfileViewVue from "./ProfileView.vue"

const routes: RouteRecordRaw[] = [
    {
        path: '/profile',
        name: 'Profile',
        component: ProfileViewVue
    },
]

export default routes