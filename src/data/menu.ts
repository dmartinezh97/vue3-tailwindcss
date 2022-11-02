import { PageEnum } from "@/enums/pageEnum";

export const listadoMenuPrincipal = [
  {
    label: 'Negocios',
    icon: 'store',
    route: PageEnum.HOME_NEGOCIOS,
  },
]

export const listadoMenuNegocios = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    route: PageEnum.DASHBOARD_NEGOCIOS,
    children: []
  },
  {
    label: 'Negocios',
    icon: 'store',
    route: PageEnum.HOME_NEGOCIOS,
    children: [
      {
        label: 'Información',
        icon: 'dashboard',
        route: PageEnum.INFORMACION_GENERAL_NEGOCIO,
      },
    ]
  },
]