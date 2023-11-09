<script lang="ts">

import VerticalNav from '@layouts/components/VerticalNav.vue'

export default defineComponent({
  setup(props, { slots }) {
    return () => {

        const verticalNav = h(VerticalNav)

        return h('div', { class: 'test vertical' }, [verticalNav])

    }
  },
})
</script>