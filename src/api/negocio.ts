import axios from 'axios';
import type { NegocioParams, NegocioResultModel, MisNegociosResultModel, NegocioInformacionGeneralModel } from './model/negocioModel';
import type { NuevoNegocio } from '../types/store';

enum Api {
    CrearNegocio = '/Negocio/Crear',
    UpdateLogo = '/Negocio/UpdateLogo',
    UpdateCabecera = '/Negocio/UpdateCabecera',
    
    
    MisNegocios = '/Negocio/MisNegocios',
    EsMiNegocio = '/Negocio/EsMiNegocio',
    InformacionGeneral = '/Negocio/InformacionGeneral',
    UpdateDatos = '/Negocio/UpdateDatos',
}

/**
 * @description: Crear un negocio API
 */
export function crearNegocioAPI(negocio: Partial<NuevoNegocio>) {
    return axios.post<NegocioResultModel>(Api.CrearNegocio, negocio);
}

/**
 * @description: Actualiza el logo de un negocio
 */
export function updateLogoNegocioAPI(idnegocio: number, frmData: FormData) {
    return axios.post<boolean>(Api.UpdateLogo, frmData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        params: {
            idnegocio
        }
    });
}

/**
 * @description: Actualiza la imagen de cabecera de un negocio
 */
export function updateImgCabeceraNegocioAPI(idnegocio: number, frmData: FormData) {
    return axios.post<boolean>(Api.UpdateCabecera, frmData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        params: {
            idnegocio
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