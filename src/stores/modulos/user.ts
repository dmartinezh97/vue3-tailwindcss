import { TOKEN_KEY, USER_INFO_KEY } from '@/enums/cacheEnum';
import type { UserState } from '@/types/store'
import { defineStore } from 'pinia'
import type { UserInfo } from '../../types/store';
import { StorageSerializers, useStorage } from '@vueuse/core';
import axios from 'axios';
import { loginApi, infoUserApi, updateInfoUserApi } from '../../api/user';
import type { LoginParams, UserInfoModel } from '../../api/model/userModel';
import { router } from '../../router/index';
import { reactive, ref, toRefs } from 'vue';
import { PageEnum } from '@/enums/pageEnum';


export const useUserStore = defineStore({
    id: 'user',
    state: (): UserState => ({
        user: useStorage<UserInfo>(USER_INFO_KEY, null, undefined, { serializer: StorageSerializers.object }),
        token: useStorage<string>(TOKEN_KEY, ""),
    }),
    getters: {
        getIsLogged(): boolean {
            return this.user != null;
        },
        getUserInfo(): UserInfo {
            return this.user || {};
        },
        getFullName(): string {
            return this.user.nombre + " " + this.user.apellidos;
        },
        getToken(): string {
            return this.token || "";
        },
    },
    actions: {
        resetState() {
            this.user = null;
            this.token = "";
        },
        setUserInfo(info: UserInfo | null) {
            this.user = info;
        },
        setToken(info: string | undefined) {
            this.token = info ? info : ''; // for null or undefined value
        },
        /**
         * @description: Iniciar sesión
         */
        async login(param: LoginParams): Promise<any | null> {
            try {
                const result = await loginApi(param)
                const { data } = result
                this.setUserInfo(data)
                this.setToken(data.token)
                router.push(PageEnum.INICIO)
            } catch (error) {
                return Promise.reject(error)
            }
        },
        /**
         * @description: Recibe la Información del usuario
         */
        async infoUser(): Promise<UserInfoModel> {
            try {
                const result = await infoUserApi()
                const { data } = result
                return data;
            } catch (error) {
                return Promise.reject(error)
            }
        },
        /**
         * @description: Actualiza la Información usuario
         */
        async updateInfoUser(params: UserInfoModel): Promise<boolean> {
            try {
                await updateInfoUserApi(params)
                return true;
            } catch (error) {
                return Promise.reject(error)
            }
        }
    }
})
