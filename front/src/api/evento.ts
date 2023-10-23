import axios from 'axios';
import type { EventoInformacionModel, MisEventosResultModel } from './model/eventoModel';
import type { ServicioModel } from './model/eventoModel';

enum Api {
    CrearEvento = '/Evento/CrearEvento',
    MisEventos = '/Evento/MisEventos',
    GetInformacion = '/Evento/Informacion',
    CrearServicio = '/Evento/CrearServicio',
    UpdateEvento = '/Evento/ActualizarEvento',
    EliminarServicio = '/Evento/EliminarServicio',
    UpdateCabecera = '/Evento/UpdateCabecera',
}

/**
 * @description: Crear un evento API
 */
export function crearEventoAPI(idnegocio: string) {
    return axios.post<number>(Api.CrearEvento, null, {
        params: {
            idnegocio
        }
    });
}

/**
 * @description: Recibe un listado de eventos API
 */
export function misEventosAPI(idnegocio: string) {
    return axios.get<MisEventosResultModel[]>(Api.MisEventos, {
        params: {
            idnegocio
        }
    });
}

/**
 * @description: Recibe la información de un evento API
 */
export function getInformacionAPI(idevento: string) {
    return axios.get<EventoInformacionModel>(Api.GetInformacion, {
        params: {
            idevento
        }
    });
}

/**
 * @description: Crear un evento API
 */
export function crearServicioAPI(idevento: string) {
    return axios.post<boolean>(Api.CrearServicio, null, {
        params: {
            idevento
        }
    });
}

/**
 * @description: Crear un evento API
 */
export function updateInformacionEventoAPI(data: EventoInformacionModel) {
    return axios.put<boolean>(Api.UpdateEvento, data);
}


/**
 * @description: Eliminar un servicio del evento API
 */
export function eliminarServicioAPI(idservicio: number) {
    return axios.delete<boolean>(Api.EliminarServicio, {
        params: {
            idservicio
        }
    });
}

/**
 * @description: Actualiza la imagen de cabecera de un negocio
 */
 export function updateImgCabeceraEventoAPI(idevento: number, frmData: FormData) {
    return axios.put<boolean>(Api.UpdateCabecera, frmData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        params: {
            idevento
        }
    });
}