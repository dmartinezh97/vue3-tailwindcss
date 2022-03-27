import type { RouteRecordRaw } from "vue-router"
import { PageEnum } from '../../enums/pageEnum';
import AddNegocioViewVue from "./AddNegocioView.vue";
import BaseNegocioViewVue from "./BaseNegocioView.vue";
import VerNegocioViewVue from "./VerNegocioView.vue";
import InformacionGeneralViewVue from "./InformacionGeneralView.vue";
import EventosViewVue from "./EventosView.vue";

const routes: RouteRecordRaw[] = [
    {
        path: PageEnum.BASE_NEGOCIO,
        name: 'Negocio',
        component: BaseNegocioViewVue,
        //redirect: PageEnum.BUSCAR_NEGOCIO, //TODO: Cambiar a ruta general con todos tus negocios añadidos
        children: [
            {
                path: '/negocio/add',
                name: PageEnum.ADD_NEGOCIO,
                component: AddNegocioViewVue,
            },
            {
                path: '/negocio/:id',
                name: PageEnum.VER_NEGOCIO,
                component: VerNegocioViewVue,
                redirect: {
                    name: PageEnum.NEGOCIO_INFORMACION_GENERAL
                },
                children: [
                    {
                        path: '/negocio/:id/informacion',
                        name: PageEnum.NEGOCIO_INFORMACION_GENERAL,
                        component: InformacionGeneralViewVue,
                    },
                    {
                        path: '/negocio/:id/eventos',
                        name: PageEnum.NEGOCIO_EVENTOS,
                        component: EventosViewVue,
                    },
                ]
            }
        ]
    },
]

export default routes