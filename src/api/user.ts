import type { LoginParams, LoginResultModel, UserInfoModel } from "./model/userModel";
import axios from 'axios';

enum Api {
    Login = '/Auth/Login',
    GetUserInfo = '/Usuario/GetInfo',
    UpdateUserInfo = '/Usuario/UpdateInfo',
    // Logout = '/Auth/logout',
    // GetPermCode = '/Auth/getPermCode',
}

/**
 * @description: Iniciar sesión API
 */
export function loginApi(params: LoginParams) {
    return axios.post<LoginResultModel>(Api.Login, params);
}

/**
 * @description: Información usuario
 */
export function infoUserApi() {
    return axios.get<UserInfoModel>(Api.GetUserInfo);
}

/**
 * @description: Información usuario
 */
export function updateInfoUserApi(data: UserInfoModel) {
    return axios.put<boolean>(Api.UpdateUserInfo, data);
}