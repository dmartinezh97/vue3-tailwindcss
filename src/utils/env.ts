/**
 * @description: Get variables de entorno
 * @returns:
 * @example:
 */
export function getEnv(): string {
    return import.meta.env.MODE;
}

/**
 * @description: ¿Estoy en modo desarrollo?
 * @returns:
 * @example:
 */
export function isDevMode(): boolean {
    return import.meta.env.DEV;
}