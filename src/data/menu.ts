import { PageEnum } from "@/enums/pageEnum";

export const listadoMenuPrincipal = [
  {
    label: 'Negocios',
    icon: 'store',
    route: PageEnum.SELECCIONAR_NEGOCIO,
  },
]

export const listadoMenuNegocios = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    route: PageEnum.DASHBOARD_NEGOCIOS,
  },
  {
    label: 'Información',
    icon: 'description',
    route: PageEnum.INFORMACION_GENERAL_NEGOCIO,
  },
  {
    label: 'Eventos',
    icon: 'description',
    route: PageEnum.EVENTOS_NEGOCIO,
  },
]