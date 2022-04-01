import axios from 'axios';
import type { MisEventosResultModel } from './model/eventoModel';

enum Api {
    CrearEvento = '/Evento/CrearEvento',
    MisEventos = '/Evento/MisEventos',
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
