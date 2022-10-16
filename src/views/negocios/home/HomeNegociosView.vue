<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useNegocioStore } from '../../../stores/modulos/negocio';
import { onBeforeMount, computed, ref } from 'vue';
import { router } from '@/router';
import { PageEnum } from '@/enums/pageEnum';
import DialogAddNegocio from '../../../components/Negocio/DialogAddNegocio.vue';

const negocioStore = useNegocioStore();
let showModal = ref(false);

onBeforeMount(() => {
  //negocioStore.misNegocios()
})

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
  <div class="flex flex-col">
    <div @click="onClickOpenModalCrearNegocio" class="flex flex-col items-center justify-center w-full max-w-md mx-auto cursor-pointer">
        <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"></div>
        <div class="w-56 -mt-5 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 class="py-2 px-4 font-bold capitalize tracking-wide whitespace-nowrap text-ellipsis overflow-hidden text-center text-gray-800"> Añadir negocio </h3>
        </div>
    </div>
    <!-- Dialogs -->
    <DialogAddNegocio v-model="showModal"></DialogAddNegocio>
    <!-- Dialogs -->
  </div>
</template>
