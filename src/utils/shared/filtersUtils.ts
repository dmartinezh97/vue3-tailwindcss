
// app.config.globalProperties.$filters = {
//     currencyEUR(value: any) {
//         return value + '€'
//     },
//     // formatDate(value: Date, type: string) {
//     //     if (type === 'date') {
//     //         return value.toLocaleDateString()
//     //     } else if (type === 'time') {
//     //         return value.toLocaleTimeString()
//     //     } else {
//     //         return value.toLocaleString()
//     //     }
//     // }
//     formatDate(value: Date) {
//         return value.toLocaleString()
//     }
// }

const filters = {
    currencyEUR(value: any) {
        return value + '€'
    },
    formatDate(value: string, type: string) {
        const fechaTemp = new Date(value)
        if (type === 'date') {
            return fechaTemp.toLocaleDateString("es-ES", {
                weekday: 'short',
                year: '2-digit',
                month: 'short',
                day: 'numeric'
            })
        } else if (type === 'time') {
            return fechaTemp.toLocaleTimeString()
        } else {
            return fechaTemp.toLocaleDateString()
        }
    }
}

export default filters;