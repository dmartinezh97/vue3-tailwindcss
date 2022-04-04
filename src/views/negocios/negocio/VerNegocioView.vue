<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from "vue";
import { PageEnum } from '@/enums/pageEnum';
import { useNegocioStore } from '@/stores/modulos/negocio';
import { router } from '@/router/index';
import { useRoute } from "vue-router";

const negocioStore = useNegocioStore();
const route = useRoute();

onBeforeMount(async () => {
  if(route.params.id){
    await negocioStore.esMiNegocio(route.params.id.toString());
  }
})

</script>

<template>
  <router-view v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </Transition>
  </router-view>
</template>
