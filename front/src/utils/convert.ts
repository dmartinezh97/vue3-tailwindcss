export function convertBytesToReadableSize(bytesValue: number): string {
    // Definir los sufijos para las diferentes unidades de tamaño
    const suffixes: string[] = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];

    // Encontrar el índice del sufijo adecuado basado en la magnitud del valor en bytes
    let index: number = 0;
    while (bytesValue >= 1024 && index < suffixes.length - 1) {
        bytesValue /= 1024;
        index++;
    }

    // Formatear el valor con el sufijo apropiado
    return bytesValue.toFixed(2) + suffixes[index];
}