import type { RouteRecordRaw } from "vue-router"
import { PageEnum } from '../../enums/pageEnum';
import BaseNegocioViewVue from "./BaseNegocioView.vue";
import BuscarNegocioViewVue from "./BuscarNegocioView.vue";

const routes: RouteRecordRaw[] = [
    {
        path: PageEnum.BASE_NEGOCIO,
        name: 'Negocio',
        component: BaseNegocioViewVue,
        redirect: PageEnum.BUSCAR_NEGOCIO,
        children: [
            {
                path: PageEnum.BUSCAR_NEGOCIO,
                name: 'BuscarNegocio',
                component: BuscarNegocioViewVue,
            },
            // {
            //     path: PageEnum.ADD_NEGOCIO,
            //     name: 'AddNegocio',
            //     component: AddNegocioViewVue,
            // }
        ]

    },
]

export default routes