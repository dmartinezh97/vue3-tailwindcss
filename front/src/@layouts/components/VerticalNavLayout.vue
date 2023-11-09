<script lang="ts">

import VerticalNav from '@layouts/components/VerticalNav.vue'

export default defineComponent({
    setup(props, { slots }) {
        return () => {

            // 👉 Componente de barra navegación vertical
            const verticalNav = h(VerticalNav)

            // 👉 Componente de navbar que va dentro de verticalNav
            const navbar = h(
                'header',
                { class: 'layout-navbar' },
            )

            // 👉 Slots por defecto
            const main = h('main', { class: 'layout-main-content' }, h('div', { class: 'main-content-container' }, slots.default?.()))

            // Retornará el div padre con la clase .test-vertical y los siguientes components:
            // 👉 El componente VerticalNav contendrá la barra vertical lateral izquierda
            // Renderizará un div con la clase .layout-content-container y dentro de ella meteremos la barra de navegación superior
            // Los slots por defecto irán dentro de main

            return h('div', { class: 'test-vertical' }, [verticalNav, h('div', { class: 'layout-content-container' }, [navbar, main])])
        }
    },
})
</script>