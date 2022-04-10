import { defineStore } from 'pinia'
import { useToastStore } from './toast';
import { crearEventoAPI, eliminarServicioAPI, getInformacionAPI, misEventosAPI, updateInformacionEventoAPI } from '@/api/evento';
import { router } from '@/router';
import { PageEnum } from '@/enums/pageEnum';
import type { EventoState } from '@/types/store';
import type { EventoInformacionModel, MisEventosResultModel, ServicioModel } from '@/api/model/eventoModel';
import { crearServicioAPI } from '../../api/evento';

export const useEventoStore = defineStore({
    id: 'evento',
    state: (): EventoState => ({
        eventos: []
    }),
    actions: {
        /**
         * @description: Crear un evento
         */
        async crearEvento(idnegocio: string): Promise<any | null> {
            try {
                //TODO: Hacer validaciónn de datos
                const result = await crearEventoAPI(idnegocio)
                const { data } = result;
                useToastStore().success("¡Evento creado!")
                console.log(data);
                router.push({
                    name: PageEnum.EDITAR_EVENTO,
                    params: {
                        idevento: data
                    }
                })
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
        /**
         * @description: Crea un nuevo servicio en el evento
         */
        async crearServicio(idevento: string): Promise<boolean> {
            try {
                await crearServicioAPI(idevento)
                return true;
            } catch (error) {
                return Promise.reject(error)
            }
        },
        /**
         * @description: Actualiza la información de un servicio
         */
        async updateInformacionEvento(payload: EventoInformacionModel): Promise<boolean> {
            try {
                await updateInformacionEventoAPI(payload)
                return true;
            } catch (error) {
                return Promise.reject(error)
            }
        },
        /**
         * @description: Elimina el servicio de un evento
         */
        async eliminarServicio(idservicio: number): Promise<boolean> {
            try {
                await eliminarServicioAPI(idservicio)
                return true;
            } catch (error) {
                return Promise.reject(error)
            }
        },
    }
})
