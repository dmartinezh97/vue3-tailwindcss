/**
 * @description: Convertir un string a slug
 * @returns:
 * @example:
 */
export function convertToSlug(cadena: string): string {
    return cadena.toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');
}