<script lang="ts">

export default defineComponent({
  setup(props, { slots }) {
    return () => {
    return h('div', { class: 'test vertical' })
    }
  },
})
</script>