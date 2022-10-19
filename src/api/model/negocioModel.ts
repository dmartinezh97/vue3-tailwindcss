/**
 * @description: Parametros para crear un negocio
 */
export interface NegocioParams {
    nombre: string;
    descripcion: string;
    tipo_negocio: number;
}

/**
 * @description: Los valores de retorno cuando crea un negocio
 */
export interface NegocioResultModel {
    IdNegocio: number;
    Nombre: string;
    Slug: string;
    Descripcion: string;
    IdTipoNegocio: string;
    ImgCabecera: string;
    Logo: string;
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

/**
 * @description: Recibe la información general del negocio
 */
export interface NegocioInformacionGeneralModel {
    idnegocio: number;
    nombre: string;
    slug: string;
    descripcion: string;
    tipo_negocio: string;
    ubicacion: string;
    img_logo: string;
    img_cabecera: string;
}