/**
 * @description: Parametros para crear un evento
 */
export interface EventoParams {
    nombre: string;
    descripcion: string;
    img_cabecera: string;
    fecha_inicio: string;
    fecha_fin: string;
}

/**
 * @description: Listado de mis eventos
 */
export interface MisEventosResultModel {
    idevento: number;
    nombre: string;
    descripcion: string;
    img_cabecera: string;
    fecha_creacion: string;
    fecha_modificacion: string;
}


/**
 * @description: Recibe la información de un evento
 */
export interface EventoInformacionModel {
    idevento: number;
    nombre: string;
    descripcion: string;
    img_cabecera: string;
    fecha_creacion: string;
    fecha_modificacion: string;
    servicios: ServicioModel[];
}


/**
 * @description: Servicio de un evento
 */
export interface ServicioModel {
    idevento: number;
    idservicio: number;
    nombre: string;
    descripcion: string;
    precio: number;
    precio_en_puerta: number;
    visibilidad: boolean;
    cantidad: number;
    fecha_inicio_venta: string;
    fecha_fin_venta: string;
    idestadoservicio: number;
    cantidad_max_pp: number;
}