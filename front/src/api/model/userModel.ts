import type { UserInfo, UserTokens } from "@/types/store";

/**
 * @description: Parametros para iniciar sesión
 */
export interface LoginParams {
    email: string;
    password: string;
}

/**
 * @description: Parametros para crear cuenta
 */
export interface SignupParams {
    name: string;
    email: string;
    password: string;
}

/**
 * @description: Los valores de retorno cuando inicia sesión
 */
export interface LoginResultModel {
    user: UserInfo
    tokens: UserTokens
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