import type { Router } from 'vue-router';
import { useUserStore } from '../../stores/modulos/user';
import { PageEnum } from '../../enums/pageEnum';


export function createPermissionGuard(router: Router) {
    const userStore = useUserStore();
    router.beforeEach(async (to, from, next) => {
        const isLogged = userStore.getIsLogged
        const requiresAuth = from.meta.requiresAuth

        if(requiresAuth && !isLogged){
            router.push({ name: PageEnum.INICIO })
        }else{
            next();
        }

        //console.log("Logeado:" + userStore.getIsLogged);

        // if (to.path == PageEnum.INICIO && !userStore.getIsLogged) {
        //     router.push(PageEnum.BIENVENIDA)
        // }
        // if ((to.path == PageEnum.LOGIN || to.path == PageEnum.REGISTRO) && userStore.getIsLogged) {
        //     router.push(PageEnum.INICIO)
        // }
        //next();
    });
}