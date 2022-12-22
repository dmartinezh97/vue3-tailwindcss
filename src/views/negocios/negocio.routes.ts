import type { RouteRecordRaw } from "vue-router"
import { PageEnum } from '../../enums/pageEnum';
import AddNegocioViewVue from "./negocio/AddNegocioView.vue";
import BaseNegocioViewVue from "../admin/BaseAdminView.vue";
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
import BaseViewVue from "../app/BaseView.vue";
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
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'descripcion',
                name: PageEnum.DESCRIPCION_NEGOCIO,
                component: DescripcionNegocioViewVue,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'fotos',
                name: PageEnum.FOTOS_NEGOCIO,
                component: FotosNegocioViewVue,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'ubicacion',
                name: PageEnum.UBICACION_NEGOCIO,
                component: UbicacionNegocioViewVue,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'revisar',
                name: PageEnum.REVISAR_NEGOCIO,
                component: RevisarNegocioViewVue,
                meta: {
                    requiresAuth: true
                }
            },
        ],
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/negocios',
        name: "BaseNegocio",
        component: BaseNegocioViewVue,
        meta: {
            requiresAuth: true
        },
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
        ],
    },
]

export default routes