/**
 * @description: Login parametros
 */
export interface LoginParams {
    username: string;
    password: string;
}

/**
 * @description: Login valores de retorno
 */
export interface LoginResultModel {
    idUsuario: string | number;
    nombre: string;
    apellidos: string;
    email: string;
    token: string;
}

/**
 * @description: Información básica del usuario
 */
export interface UserInfoModel {
    nombre: string;
    apellidos: string;
    email: string;
    telefono: string;
    fecha_nacimiento: string;
}