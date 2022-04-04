import axios from 'axios';
import type { NegocioParams, NegocioResultModel, MisNegociosResultModel, NegocioInformacionGeneralModel } from './model/negocioModel';

enum Api {
    MisNegocios = '/Negocio/MisNegocios',
    CrearNegocio = '/Negocio/CrearNegocio',
    EsMiNegocio = '/Negocio/EsMiNegocio',
    InformacionGeneral = '/Negocio/InformacionGeneral',
    UpdateLogo = '/Negocio/UpdateLogo',
    UpdateCabecera = '/Negocio/UpdateCabecera',
    UpdateDatos = '/Negocio/UpdateDatos',
}

/**
 * @description: Crear un negocio API
 */
export function crearNegocioAPI() {
    return axios.post<NegocioResultModel>(Api.CrearNegocio);
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
    return axios.get<NegocioInformacionGeneralModel>(Api.InformacionGeneral, {
        params: {
            idnegocio
        }
    });
}

/**
 * @description: Actualiza el logo
 */
export function updateLogoAPI(data: FormData) {
    return axios.put<boolean>(Api.UpdateLogo, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

/**
 * @description: Actualiza la imagen de cabecera del negocio
 */
export function updateCabeceraAPI(data: FormData) {
    return axios.put<boolean>(Api.UpdateCabecera, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

/**
 * @description: Actualiza los datos del negocio
 */
export function updateDatosAPI(data: NegocioInformacionGeneralModel) {
    return axios.put<boolean>(Api.UpdateDatos, data);
}