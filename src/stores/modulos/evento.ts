import { defineStore } from 'pinia'
import { useToastStore } from './toast';
import { crearEventoAPI, getInformacionAPI, misEventosAPI } from '@/api/evento';
import { router } from '@/router';
import { PageEnum } from '@/enums/pageEnum';
import type { EventoState } from '@/types/store';
import type { EventoInformacionModel, MisEventosResultModel } from '@/api/model/eventoModel';

export const useEventoStore = defineStore({
    id: 'evento',
    state: (): EventoState => ({
        eventos: []
    }),
    actions: {
        /**
         * @description: Crear un evento
         */
        async crearEvento(dataFrm: FormData): Promise<any | null> {
            try {
                //TODO: Hacer validaciónn de datos
                await crearEventoAPI(dataFrm)
                useToastStore().success("¡Evento creado!")
                router.push({ name: PageEnum.EVENTOS_NEGOCIO })
            } catch (error) {
                return Promise.reject(error)
            }
        },
        /**
         * @description: Iniciar sesión
         */
        async misEventos(idnegocio: string): Promise<MisEventosResultModel[]> {
            try {
                //TODO: Hacer validaciónn de datos
                const result = await misEventosAPI(idnegocio)
                const { data } = result;
                return data;
            } catch (error) {
                return Promise.reject(error)
            }
        },
        /**
         * @description: Iniciar sesión
         */
        async getInformacion(idevento: string): Promise<EventoInformacionModel> {
            try {
                //TODO: Hacer validaciónn de datos
                const result = await getInformacionAPI(idevento)
                const { data } = result;
                return data;
            } catch (error) {
                return Promise.reject(error)
            }
        },
    }
})
