<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useNegocioStore } from '../../../stores/modulos/negocio';
import { onBeforeMount, computed, ref } from 'vue';
import { router } from '@/router';
import { PageEnum } from '@/enums/pageEnum';
import DialogAddNegocio from '../../../components/Negocio/DialogAddNegocio.vue';
import DialogOkCancel from '../../../components/Dialogs/DialogOkCancel.vue';

const negocioStore = useNegocioStore();
let showModal = ref(false);

// const onClickSeleccionarNegocio = () => {
//   router.push({
//     name: PageEnum.ADD_NEGOCIO
//   })
// };

const onClickOpenModalCrearNegocio = () => {
  showModal.value = !showModal.value;
};

const onSubmitCrearNegocio = () => {
  router.push({
    name: PageEnum.SELECCIONAR_TIPO_NEGOCIO
  })
};

const getMisNegocios = computed(() => {
  return negocioStore.negocios
})

</script>

<template>
  <div class="p-4">
    <h1>Dashboard</h1>
  </div>
</template>
