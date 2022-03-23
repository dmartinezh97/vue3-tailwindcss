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
                    config.headers.common["Authorization"] = "Bearer " + token;

                    console.log("request");
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
                    console.log("response");
                    return response;
                },
                (error: any) => {
                    return Promise.reject(error);
                }
            );
        }
    }
}