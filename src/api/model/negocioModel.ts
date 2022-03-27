/**
 * @description: Parametros para crear un negocio
 */
export interface NegocioParams {
    nombre: string;
    descripcion: string;
    tipo_negocio: string;
    ubicacion: string;
}

/**
 * @description: Los valores de retorno cuando crea un negocio
 */
export interface NegocioResultModel {
    idnegocio: number;
}

/**
 * @description: Listado con mis negocios
 */
export interface MisNegociosResultModel {
    idnegocio: number;
    nombre: string;
    img_logo: string;
    img_cabecera: string;
}
