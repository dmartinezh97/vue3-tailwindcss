import type { AxiosRequestConfig, AxiosResponse, AxiosInstance } from "axios"
import axios from 'axios';
import { useUserStore } from '../../../stores/modulos/user';

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
                    const userStore = useUserStore();
                    const token = userStore.getToken;
                    //TODO: Filtrar por permiso de rutas si es Auth para enviar token
                    config.headers.common["Authorization"] = "Bearer " + token;

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
                    //console.log("response");
                    //Si da un 401, redireccionar a una página personalizada
                    return response;
                },
                (error: any) => {
                    return Promise.reject(error);
                }
            );
        }
    }
}