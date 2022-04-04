import axios from 'axios';
import type { EventoInformacionModel, MisEventosResultModel } from './model/eventoModel';

enum Api {
    CrearEvento = '/Evento/CrearEvento',
    MisEventos = '/Evento/MisEventos',
    GetInformacion = '/Evento/Informacion',
}

/**
 * @description: Crear un evento API
 */
export function crearEventoAPI(data: FormData) {
    return axios.post<boolean>(Api.CrearEvento, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
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
