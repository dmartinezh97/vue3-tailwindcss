import type { AxiosRequestConfig, AxiosResponse, AxiosInstance } from "axios"
import axios from 'axios';
import { useUserStore } from '../../../stores/modulos/user';
import { useToastStore } from '../../../stores/modulos/toast';
import { useAppStore } from "@/stores/modulos/app";

// interface VueConstructor {
//     $axios: AxiosInstance;
// }


export namespace Http {
    export class ApiJwtService {
        constructor() {
            this.request();
            this.response();
        }
        
        protected request() {
            axios.interceptors.request.use(
                (config: AxiosRequestConfig) => {
                    const appStore = useAppStore();
                    //appStore.setPageLoading(true);
                    const userStore = useUserStore();
                    const token = userStore.getToken;
                    if(token && config && config.headers){
                        config.headers.Authorization = "Bearer " + token;
                        // config.headers.common["Authorization"] = "Bearer " + token;
                    }
                    //TODO: Filtrar por permiso de rutas si es Auth para enviar token

                    return config;
                },
                (err: any) => {
                    return Promise.reject(err);
                }
            );
        }

        protected response() {
            axios.interceptors.response.use(
                (response: AxiosResponse) => {
                    const appStore = useAppStore();
                    //appStore.setPageLoading(false);
                    return response;
                },
                (error: any) => {
                    const toastStore = useToastStore();
                    if(error && error.response && error.response.status){
                        //TODO: Si da un 401, redireccionar a una página personalizada
                        switch (error.response.status) {
                            case 400:
                                toastStore.error('¡Ups! Algo ha salido mal.. :/');
                                break;
                            // case 401:
                            //     toastStore.error("Por favor, inicia sesión");
                            //     break;
                            default:
                                toastStore.warning(error.response.data.message);
                                break;
                        }
                    }
                    return Promise.reject(error);
                }
            );
        }
    }
}