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
import HomeNegociosViewVue from "./home/HomeNegociosView.vue";
import SeleccionarTipoNegocioViewVue from "./home/SeleccionarTipoNegocioView.vue";
import DescripcionNegocioViewVue from "./home/DescripcionNegocioView.vue";
import FotosNegocioViewVue from "./home/FotosNegocioView.vue";
import UbicacionNegocioViewVue from "./home/UbicacionNegocioView.vue";
import RevisarNegocioViewVue from "./home/RevisarNegocioView.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/negocios',
        name: PageEnum.BASE_NEGOCIO,
        component: BaseNegociosViewVue,
        redirect: {
            name: PageEnum.LISTAR_NEGOCIOS
        },
        children: [
            {
                path: 'home',
                name: PageEnum.HOME_NEGOCIOS,
                component: HomeNegociosViewVue,
            },
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
            // {
            //     path: 'listado',
            //     name: PageEnum.LISTAR_NEGOCIOS,
            //     component: ListarNegociosViewVue,
            // },
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
                ]
            }
            // {
            //     path: ':id',
            //     name: PageEnum.VER_NEGOCIO,
            //     component: VerNegocioViewVue,
            //     redirect: {
            //         name: PageEnum.INFORMACION_GENERAL_NEGOCIO
            //     },
            //     children: [
            //         {
            //             path: 'informacion',
            //             name: PageEnum.INFORMACION_GENERAL_NEGOCIO,
            //             component: InformacionGeneralViewVue,
            //         },
            //         {
            //             path: 'eventos',
            //             name: PageEnum.BASE_EVENTOS,
            //             component: BaseEventosViewVue,
            //             redirect: {
            //                 name: PageEnum.EVENTOS_NEGOCIO
            //             },
            //             children: [
            //                 {
            //                     path: 'listado',
            //                     name: PageEnum.EVENTOS_NEGOCIO,
            //                     component: ListarEventosViewVue,
            //                 },
            //                 // {
            //                 //     path: 'editar',
            //                 //     name: PageEnum.ADD_EVENTO,
            //                 //     component: AddEditarEventoViewVue,
            //                 // },
            //                 {
            //                     path: 'editar/:idevento',
            //                     name: PageEnum.EDITAR_EVENTO,
            //                     component: AddEditarEventoViewVue,
            //                 },
            //             ]
            //         },
            //         {
            //             path: 'trabajadores',
            //             name: PageEnum.NEGOCIO_TRABAJADORES,
            //             component: TrabajadoresViewVue,
            //         },
            //     ]
            // }
        ]
    },
]

export default routes