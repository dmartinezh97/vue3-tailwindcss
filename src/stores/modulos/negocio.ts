import { defineStore } from 'pinia'
import { router } from '../../router/index';
import { PageEnum } from '@/enums/pageEnum';
import type { NegocioInformacionGeneralModel, NegocioParams } from '@/api/model/negocioModel';
import { crearNegocioAPI, misNegociosAPI, esMiNegocioAPI, getInformacionGeneralAPI, updateLogoAPI, updateCabeceraAPI, updateDatosAPI } from '../../api/negocio';
import { useToastStore } from './toast';
import type { NegocioState } from '@/types/store';

//const toastStore = useToastStore();

export const useNegocioStore = defineStore({
    id: 'negocio',
    state: (): NegocioState => ({
        negocios: [],
        negocio: {}
    }),
    actions: {
        resetState() {
            this.negocio = {}
        },
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
        async crearNegocio(): Promise<any | null> {
            try {
                //TODO: Hacer validaciónn de datos
                
                const result = await crearNegocioAPI()
                const { data } = result;
                useToastStore().success("¡Negocio creado!")
                this.misNegocios();
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
        /**
         * @description: Comprueba si tengo acceso a esta empresa
         */
        async esMiNegocio(idnegocio: string): Promise<boolean> {
            try {
                const result = await esMiNegocioAPI(idnegocio)
                const { data } = result;
                return data;
            } catch (error) {
                return Promise.reject(error)
            }
        },
        /**
         * @description: Comprueba si tengo acceso a esta empresa
         */
        async getInformacionGeneral(idnegocio: string): Promise<NegocioInformacionGeneralModel> {
            try {
                const result = await getInformacionGeneralAPI(idnegocio)
                const { data } = result;
                return data;
            } catch (error) {
                return Promise.reject(error)
            }
        },
        /**
         * @description: Actualiza el logo del negocio
         */
        async updateLogo(dataFrm: FormData): Promise<boolean> {
            try {
                await updateLogoAPI(dataFrm)
                useToastStore().success("¡Logo actualizado!")
                return true;
            } catch (error) {
                return Promise.reject(error)
            }
        },
        /**
         * @description: Actualiza la imagen de cabecera del negocio
         */
        async updateCabecera(dataFrm: FormData): Promise<boolean> {
            try {
                await updateCabeceraAPI(dataFrm)
                useToastStore().success("¡Portada actualizada!")
                return true;
            } catch (error) {
                return Promise.reject(error)
            }
        },
        /**
         * @description: Actualiza los datos del negocio
         */
        async updateDatos(dataFrm: NegocioInformacionGeneralModel): Promise<boolean> {
            try {
                await updateDatosAPI(dataFrm)
                useToastStore().success("Datos actualizada!")
                return true;
            } catch (error) {
                return Promise.reject(error)
            }
        },
    }
})
