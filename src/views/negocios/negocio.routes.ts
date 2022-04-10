import type { RouteRecordRaw } from "vue-router"
import { PageEnum } from '../../enums/pageEnum';
import AddNegocioViewVue from "./negocio/AddNegocioView.vue";
import BaseNegociosViewVue from "./negocio/BaseNegociosView.vue";
import VerNegocioViewVue from "./negocio/VerNegocioView.vue";
import InformacionGeneralViewVue from "./informacion/InformacionGeneralView.vue";
import BaseEventosViewVue from "./eventos/BaseEventosView.vue";
import TrabajadoresViewVue from "./TrabajadoresView.vue";
import ListarNegociosViewVue from "./negocio/ListarNegociosView.vue";
import ListarEventosViewVue from "./eventos/ListarEventosView.vue";
import AddEditarEventoViewVue from "./eventos/AddEditarEventoView.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/negocios',
        name: PageEnum.BASE_NEGOCIO,
        component: BaseNegociosViewVue,
        redirect: {
            name: PageEnum.LISTAR_NEGOCIOS
        },
        //redirect: PageEnum.BUSCAR_NEGOCIO, //TODO: Cambiar al listado con todos tus negocios añadidos
        children: [
            {
                path: 'listado',
                name: PageEnum.LISTAR_NEGOCIOS,
                component: ListarNegociosViewVue,
            },
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
                                component: ListarEventosViewVue,
                            },
                            // {
                            //     path: 'editar',
                            //     name: PageEnum.ADD_EVENTO,
                            //     component: AddEditarEventoViewVue,
                            // },
                            {
                                path: 'editar/:idevento',
                                name: PageEnum.EDITAR_EVENTO,
                                component: AddEditarEventoViewVue,
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