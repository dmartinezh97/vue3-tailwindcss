import { TOKEN_KEY, USER_INFO_KEY } from '@/enums/cacheEnum';
import type { ToastState, UserState } from '@/types/store'
import { defineStore } from 'pinia'
import type { UserInfo } from '../../types/store';
import { StorageSerializers, useStorage } from '@vueuse/core';
import axios from 'axios';
import { loginApi, infoUserApi, updateInfoUserApi } from '../../api/user';
import type { LoginParams, UserInfoModel } from '../../api/model/userModel';
import { router } from '../../router/index';
import { reactive, ref, toRefs } from 'vue';
import type { ToastProps } from '../../components/Toasts/typing';
import type { SizeEnum } from '@/enums/sizeEnum';
import { ToastTypeEnum } from '../../enums/toastEnum';
import { buildShortUUID } from '../../utils/uuid';


export const useToastStore = defineStore({
    id: 'toast',
    state: (): ToastState => ({
        toasts: []
    }),
    actions: {
        info(msg: string) {
            this.toasts.push({msg, type: ToastTypeEnum.SUCCESS })
        },
        warning(msg: string) {
            this.toasts.push({ msg, type: ToastTypeEnum.WARNING })
        },
        error(msg: string) {
            this.toasts.push({ msg, type: ToastTypeEnum.ERROR })
        },
        clearToast(msg: string) {
            let index = this.toasts.findIndex((t) => t.msg === msg);
            this.toasts.splice(index, 1);
        },
    }
})
