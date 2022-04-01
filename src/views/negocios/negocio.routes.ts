import type { RouteRecordRaw } from "vue-router"
import { PageEnum } from '../../enums/pageEnum';
import AddNegocioViewVue from "./negocio/AddNegocioView.vue";
import BaseNegociosViewVue from "./BaseNegociosView.vue";
import VerNegocioViewVue from "./negocio/VerNegocioView.vue";
import InformacionGeneralViewVue from "./informacion/InformacionGeneralView.vue";
import BaseEventosViewVue from "./eventos/BaseEventosView.vue";
import EventosViewVue from "./eventos/EventosView.vue";
import TrabajadoresViewVue from "./TrabajadoresView.vue";
import AddEventoViewVue from "./eventos/AddEventoView.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/negocios',
        name: PageEnum.BASE_NEGOCIO,
        component: BaseNegociosViewVue,
        //redirect: PageEnum.BUSCAR_NEGOCIO, //TODO: Cambiar al listado con todos tus negocios añadidos
        children: [
            {
                path: 'add',
                name: PageEnum.ADD_NEGOCIO,
                component: AddNegocioViewVue,
            },
            {
                path: ':id',
                name: PageEnum.VER_NEGOCIO,
                component: VerNegocioViewVue,
                redirect: {
                    name: PageEnum.INFORMACION_GENERAL_NEGOCIO
                },
                children: [
                    {
                        path: 'informacion',
                        name: PageEnum.INFORMACION_GENERAL_NEGOCIO,
                        component: InformacionGeneralViewVue,
                    },
                    {
                        path: 'eventos',
                        name: PageEnum.BASE_EVENTOS,
                        component: BaseEventosViewVue,
                        redirect: {
                            name: PageEnum.EVENTOS_NEGOCIO
                        },
                        children: [
                            {
                                path: 'listado',
                                name: PageEnum.EVENTOS_NEGOCIO,
                                component: EventosViewVue,
                            },
                            {
                                path: 'add',
                                name: PageEnum.ADD_EVENTO,
                                component: AddEventoViewVue,
                            },
                        ]
                    },
                    {
                        path: 'trabajadores',
                        name: PageEnum.NEGOCIO_TRABAJADORES,
                        component: TrabajadoresViewVue,
                    },
                ]
            }
        ]
    },
]

export default routes