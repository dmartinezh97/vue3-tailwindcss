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
    fecha_creacion: Date;
    fecha_modificacion: Date;
}