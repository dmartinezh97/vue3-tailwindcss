<script lang="ts" setup>

const DefaultLayoutVerticalNav = defineAsyncComponent(() => import('./components/DefaultLayoutVerticalNav.vue'))

</script>

<template>
  <div class="default">
    <DefaultLayoutVerticalNav></DefaultLayoutVerticalNav>
  </div>
</template>