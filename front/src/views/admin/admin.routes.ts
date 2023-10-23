import type { RouteRecordRaw } from "vue-router"
import { PageEnum } from '../../enums/pageEnum';
import DashboardViewVue from "./dashboard/DashboardView.vue";
import UserListViewVue from "./user/UserListView.vue";

const routes: RouteRecordRaw[] = [
    {
        path: 'dashboard',
        name: PageEnum.ADMIN_DASHBOARD,
        component: DashboardViewVue,
    },
    {
        path: 'usuarios',
        name: PageEnum.ADMIN_USUARIOS,
        component: UserListViewVue,
    },
    {
        path: 'logs',
        name: PageEnum.ADMIN_LOGS,
        component: DashboardViewVue,
    },
]

export default routes