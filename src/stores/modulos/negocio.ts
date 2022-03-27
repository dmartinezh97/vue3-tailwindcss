import { defineStore } from 'pinia'
import { router } from '../../router/index';
import { PageEnum } from '@/enums/pageEnum';
import type { NegocioParams } from '@/api/model/negocioModel';
import { crearNegocioAPI, misNegociosAPI } from '../../api/negocio';
import { useToastStore } from './toast';
import type { NegocioState } from '@/types/store';

//const toastStore = useToastStore();

export const useNegocioStore = defineStore({
    id: 'negocio',
    state: (): NegocioState => ({
        negocios: []
    }),
    actions: {
        /**
         * @description: Listado de mis negocios
         */
        async misNegocios(): Promise<any | null> {
            try {
                const result = await misNegociosAPI()
                const { data } = result;
                this.negocios = data;
                return data;
            } catch (error) {
                return Promise.reject(error)
            }
        },
        /**
         * @description: Iniciar sesión
         */
        async crearNegocio(dataFrm: FormData): Promise<any | null> {
            try {
                //TODO: Hacer validaciónn de datos
                
                const result = await crearNegocioAPI(dataFrm)
                const { data } = result;
                useToastStore().success("¡Negocio creado!")
                router.push({
                    name: PageEnum.VER_NEGOCIO,
                    params: {
                        id: data.idnegocio
                    }
                })
            } catch (error) {
                return Promise.reject(error)
            }
        },
    }
})
