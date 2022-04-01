import axios from 'axios';
import type { NegocioParams, NegocioResultModel,MisNegociosResultModel, NegocioInformacionGeneralResultModel } from './model/negocioModel';

enum Api {
    MisNegocios = '/Negocio/MisNegocios',
    CrearNegocio = '/Negocio/CrearNegocio',
    EsMiNegocio = '/Negocio/EsMiNegocio',
    InformacionGeneral = '/Negocio/InformacionGeneral',
}

/**
 * @description: Crear un negocio API
 */
export function crearNegocioAPI(data: FormData) {
    return axios.post<NegocioResultModel>(Api.CrearNegocio, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

/**
 * @description: Recibe un listado de negocios API
 */
export function misNegociosAPI() {
    return axios.get<MisNegociosResultModel[]>(Api.MisNegocios);
}

/**
 * @description: Comprueba si tengo acceso a este negocio
 */
export function esMiNegocioAPI(idnegocio: string) {
    return axios.post<boolean>(Api.EsMiNegocio, null, {
        params: {
            idnegocio
        }
    });
}

/**
 * @description: Recibe la información general del negocio
 */
export function getInformacionGeneralAPI(idnegocio: string) {
    return axios.get<NegocioInformacionGeneralResultModel>(Api.InformacionGeneral, {
        params: {
            idnegocio
        }
    });
}