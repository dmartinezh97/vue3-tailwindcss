import { ToastProps } from '../components/Toasts/typing';

export interface FrmLogin {
    email: string;
    password: string;
}

export interface FrmSignup {
    nombre: string;
    apellidos: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface UserState {
    user: Nullable<UserInfo>;
    token: RemovableRef<string>;
    //roleList: RoleEnum[];
    // sessionTimeout?: boolean;
    // lastUpdateTime: number;
}

export interface ToastState {
    toasts: ToastProps[];
}

export interface AppState {
    pageLoading: boolean;
}

export interface UserInfo {
    idUsuario: string | number;
    nombre: string;
    apellidos: string;
    email: string;
}

//TODO: Temporal
export interface LocalInfo {
    nombre: string;
    direccion: string;
    img: string;
    puntuacion: string;
}

//TODO: Temporal
export interface EventInfo {
    nombre: string;
    fecha: string;
    img: string;
    ubicacion?: string;
}