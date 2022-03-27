/**
 * @description: Parametros para iniciar sesión
 */
export interface LoginParams {
    username: string;
    password: string;
}

/**
 * @description: Los valores de retorno cuando inicia sesión
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