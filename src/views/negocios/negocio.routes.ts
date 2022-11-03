import type { RouteRecordRaw } from "vue-router"
import { PageEnum } from '../../enums/pageEnum';
import AddNegocioViewVue from "./negocio/AddNegocioView.vue";
import BaseNegocioViewVue from "../BaseNegocioView.vue";
import VerNegocioViewVue from "./negocio/VerNegocioView.vue";
import InformacionGeneralViewVue2 from "./informacion/InformacionGeneralView.vue";
import InformacionGeneralViewVue from "./informacion/InformacionGeneralView.vue";
import ListarNegociosViewVue from "./negocio/ListarNegociosView.vue";
import ListarEventosViewVue from "./eventos/ListarEventosView.vue";
import AddEditarEventoViewVue from "./eventos/AddEditarEventoView.vue";
import HomeNegociosViewVue from "../home/SeleccionarNegocioView.vue";
import SeleccionarTipoNegocioViewVue from "./crear/SeleccionarTipoNegocioView.vue";
import DescripcionNegocioViewVue from "./crear/DescripcionNegocioView.vue";
import FotosNegocioViewVue from "./crear/FotosNegocioView.vue";
import UbicacionNegocioViewVue from "./crear/UbicacionNegocioView.vue";
import RevisarNegocioViewVue from "./crear/RevisarNegocioView.vue";
import DashboardNegocioViewVue from "./dashboard/DashboardNegocioView.vue";
import BaseViewVue from "../BaseView.vue";
import BaseCrearNegocioViewVue from "../BaseCrearNegocioView.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/negocio/crear',
        name: "CrearNegocio",
        component: BaseCrearNegocioViewVue,
        children: [
            {
                path: 'tipo-negocio',
                name: PageEnum.SELECCIONAR_TIPO_NEGOCIO,
                component: SeleccionarTipoNegocioViewVue,
            },
            {
                path: 'descripcion',
                name: PageEnum.DESCRIPCION_NEGOCIO,
                component: DescripcionNegocioViewVue,
            },
            {
                path: 'fotos',
                name: PageEnum.FOTOS_NEGOCIO,
                component: FotosNegocioViewVue,
            },
            {
                path: 'ubicacion',
                name: PageEnum.UBICACION_NEGOCIO,
                component: UbicacionNegocioViewVue,
            },
            {
                path: 'revisar',
                name: PageEnum.REVISAR_NEGOCIO,
                component: RevisarNegocioViewVue,
            },
        ]
    },
    {
        path: '/negocios',
        name: "BaseNegocio",
        component: BaseNegocioViewVue,
        children: [
            {
                path: ':id',
                name: PageEnum.VER_NEGOCIO,
                component: VerNegocioViewVue,
                redirect: {
                    name: PageEnum.DASHBOARD_NEGOCIOS,
                },
                children: [
                    {
                        path: 'dashboard',
                        name: PageEnum.DASHBOARD_NEGOCIOS,
                        component: DashboardNegocioViewVue,
                    },
                    {
                        path: 'informacion',
                        name: PageEnum.INFORMACION_GENERAL_NEGOCIO,
                        component: InformacionGeneralViewVue,
                    },
                    {
                        path: 'eventos/listar',
                        name: PageEnum.EVENTOS_NEGOCIO,
                        component: ListarEventosViewVue,
                    },
                    {
                        path: 'eventos/editar/:idevento',
                        name: PageEnum.EDITAR_EVENTO,
                        component: AddEditarEventoViewVue,
                    },
                ]
            },
        ]
    },
    // {
    //     path: 'crear',
    //     name: PageEnum.BASE_NEGOCIO,
    //     // component: BaseNegocioViewVue,
    //     redirect: {
    //         name: PageEnum.SELECCIONAR_TIPO_NEGOCIO
    //     },
    //     children: [
    //         {
    //             path: 'tipo-negocio',
    //             name: PageEnum.SELECCIONAR_TIPO_NEGOCIO,
    //             component: SeleccionarTipoNegocioViewVue,
    //         },
    //         {
    //             path: 'descripcion',
    //             name: PageEnum.DESCRIPCION_NEGOCIO,
    //             component: DescripcionNegocioViewVue,
    //         },
    //         {
    //             path: 'fotos',
    //             name: PageEnum.FOTOS_NEGOCIO,
    //             component: FotosNegocioViewVue,
    //         },
    //         {
    //             path: 'ubicacion',
    //             name: PageEnum.UBICACION_NEGOCIO,
    //             component: UbicacionNegocioViewVue,
    //         },
    //         {
    //             path: 'revisar',
    //             name: PageEnum.REVISAR_NEGOCIO,
    //             component: RevisarNegocioViewVue,
    //         },
    //         // {
    //         //     path: 'listado',
    //         //     name: PageEnum.LISTAR_NEGOCIOS,
    //         //     component: ListarNegociosViewVue,
    //         // },

    //         {
    //             path: 'add',
    //             name: PageEnum.ADD_NEGOCIO,
    //             component: AddNegocioViewVue,
    //         },
    //         // {
    //         //     path: ':id',
    //         //     name: PageEnum.VER_NEGOCIO,
    //         //     component: VerNegocioViewVue,
    //         //     redirect: {
    //         //         name: PageEnum.INFORMACION_GENERAL_NEGOCIO
    //         //     },
    //         //     children: [
    //         //         {
    //         //             path: 'informacion',
    //         //             name: PageEnum.INFORMACION_GENERAL_NEGOCIO,
    //         //             component: InformacionGeneralViewVue,
    //         //         },
    //         //         {
    //         //             path: 'eventos',
    //         //             name: PageEnum.BASE_EVENTOS,
    //         //             component: BaseEventosViewVue,
    //         //             redirect: {
    //         //                 name: PageEnum.EVENTOS_NEGOCIO
    //         //             },
    //         //             children: [
    //         //                 {
    //         //                     path: 'listado',
    //         //                     name: PageEnum.EVENTOS_NEGOCIO,
    //         //                     component: ListarEventosViewVue,
    //         //                 },
    //         //                 // {
    //         //                 //     path: 'editar',
    //         //                 //     name: PageEnum.ADD_EVENTO,
    //         //                 //     component: AddEditarEventoViewVue,
    //         //                 // },
    //         //                 {
    //         //                     path: 'editar/:idevento',
    //         //                     name: PageEnum.EDITAR_EVENTO,
    //         //                     component: AddEditarEventoViewVue,
    //         //                 },
    //         //             ]
    //         //         },
    //         //     ]
    //         // }
    //     ]
    // },
]

export default routes