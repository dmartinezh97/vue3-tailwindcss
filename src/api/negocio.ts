import axios from 'axios';
import type { NegocioParams } from './model/negocioModel';
import type { NegocioResultModel } from './model/negocioModel';
import type { MisNegociosResultModel } from './model/negocioModel';

enum Api {
    MisNegocios = '/Negocio/MisNegocios',
    CrearNegocio = '/Negocio/CrearNegocio',
}

/**
 * @description: Crear un negocio API
 */
export function misNegociosAPI() {
    return axios.get<MisNegociosResultModel[]>(Api.MisNegocios);
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