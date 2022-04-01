import { defineStore } from 'pinia'
import { useToastStore } from './toast';
import { crearEventoAPI, misEventosAPI } from '@/api/evento';
import { router } from '@/router';
import { PageEnum } from '@/enums/pageEnum';
import type { EventoState } from '@/types/store';
import type { MisEventosResultModel } from '@/api/model/eventoModel';

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
                const result = await crearEventoAPI(dataFrm)
                const { data } = result;
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
                //this.eventos = data;
                return data;
            } catch (error) {
                return Promise.reject(error)
            }
        },
    }
})
