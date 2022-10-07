import { ToastProps } from '../components/Toasts/typing';
import { MisNegociosResultModel } from '../api/model/negocioModel';
import type { MisEventosResultModel } from '@/api/model/eventoModel';

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
    cookiesAceptadas: RemovableRef<boolean>;
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

export interface NegocioState {
    negocios: MisNegociosResultModel[];
    negocio: Partial<NuevoNegocio>;
}

export interface NuevoNegocio{
    nombre: string;
    descripcion: string;
    tipo_negocio: string;
    logo: any;
    imgCabecera: any;
    direccion: DireccionNegocio;
}

export interface DireccionNegocio{
    calle: string;
    numero: string;
    localidad: string;
    cp: string;
    provincia: string;
    pais: string;
}

export interface EventoState {
    eventos: MisEventosResultModel[];
}

export interface UserInfo {
    IdUsuario: string;
    Nombre: string;
    Apellidos: string;
    Usuario: string;
    Telefono: string;
    Email: string;
    Rol: string;
    Token: string;
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