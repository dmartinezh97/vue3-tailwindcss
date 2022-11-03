<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from "vue";
import { PageEnum } from '@/enums/pageEnum';
import { useNegocioStore } from '@/stores/modulos/negocio';
import { router } from '@/router/index';
import { useRoute } from "vue-router";

const negocioStore = useNegocioStore();
const { params } = useRoute();

onBeforeMount(async () => {
  if(params.id){
    await negocioStore.esMiNegocio(params.id.toString());
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
