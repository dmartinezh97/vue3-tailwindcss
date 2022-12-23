import { PageEnum } from "@/enums/pageEnum";

export const listadoMenuPrincipal = [
  {
    label: 'Inicio',
    icon: 'store',
    route: PageEnum.INICIO,
  },
  {
    label: 'Componentes',
    icon: 'store',
    route: PageEnum.COMPONENTES,
  },
]

export const listadoMenuPanelAdministrador = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    route: PageEnum.ADMIN_DASHBOARD,
  },
  {
    label: 'Usuarios',
    icon: 'group',
    route: PageEnum.ADMIN_USUARIOS,
  },
  {
    label: 'Logs',
    icon: 'warning',
    route: PageEnum.ADMIN_LOGS,
  },
]