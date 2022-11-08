import { useAppStore } from "@/stores/modulos/app";
import { useUserStore } from "@/stores/modulos/user";
import type { RouteLocationNormalized, Router } from "vue-router";
import { createPermissionGuard } from "./permissionGuard";


// No cambiar el orden de creación
export function setupRouterGuard(router: Router) {
    //createPageGuard(router);
    //createPageLoadingGuard(router);
    //createHttpGuard(router);
    //createScrollGuard(router); /* Funcionaba antes de tener la página con un div interior en flex */
    //createMessageGuard(router);
    //createProgressGuard(router);
    createPermissionGuard(router);
    //createParamMenuGuard(router); // must after createPermissionGuard (menu has been built.)
    //createStateGuard(router);
}

/**
 * Hooks para controlar el estado de la página
 */
function createPageGuard(router: Router) {
    const loadedPageMap = new Map<string, boolean>();

    router.beforeEach(async (to) => {
        // La página ya ha sido cargada, será más rápido abrirla de nuevo, no es necesario hacer la carga y otros procesamientos
        to.meta.loaded = !!loadedPageMap.get(to.path);
        // Notificar los cambios de ruta
        // TODO:

        return true;
    });

    router.afterEach((to) => {
        loadedPageMap.set(to.path, true);
    });
}

// Used to handle page loading status
function createPageLoadingGuard(router: Router) {
    const userStore = useUserStore();
    const appStore = useAppStore();
    //const { getOpenPageLoading } = useTransitionSetting();
    router.beforeEach(async (to) => {
        if (!userStore.getToken) {
            return true;
        }
        if (to.meta.loaded) {
            return true;
        }

        // if (unref(getOpenPageLoading)) {
        //     appStore.setPageLoadingAction(true);
        //     return true;
        // }

        return true;
    });
    router.afterEach(async () => {
        // if (unref(getOpenPageLoading)) {
        //     // TODO Looking for a better way
        //     // The timer simulates the loading time to prevent flashing too fast,
        //     setTimeout(() => {
        //         appStore.setPageLoading(false);
        //     }, 220);
        // }
        return true;
    });
}

// En el cambio de ruta volver a la parte superior de la página
function createScrollGuard(router: Router) {
    const isHash = (href: string) => {
        return /^#/.test(href);
    };

    const body = document.body;

    router.afterEach(async (to) => {
        // scroll top
        isHash((to as RouteLocationNormalized & { href: string })?.href) && body.scrollTo(800, 800);
        return true;
    });
}