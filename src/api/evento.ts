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