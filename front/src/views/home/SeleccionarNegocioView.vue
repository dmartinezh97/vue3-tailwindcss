<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useNegocioStore } from '../../stores/modulos/negocio';
import { onBeforeMount, computed, ref, Suspense } from 'vue';
import { router } from '@/router';
import { PageEnum } from '@/enums/pageEnum';
import DialogAddNegocio from '../../components/Negocio/DialogAddNegocio.vue';
import DialogOkCancel from '../../components/ui/dialogs/DialogOkCancel.vue';
import CardNegocio from '../../components/app/negocio/CardNegocio.vue';


const negocioStore = useNegocioStore();
let showModal = ref(false);

onBeforeMount(() => {
  negocioStore.misNegocios()
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
  <div class="grid grid-cols-4 gap-6 gap-y-10 p-4">
    <div @click="onClickOpenModalCrearNegocio"
      class="flex flex-col items-center justify-center w-full max-w-md mx-auto cursor-pointer">
      <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"></div>
      <div class="w-56 -mt-5 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3
          class="py-2 px-4 font-bold capitalize tracking-wide whitespace-nowrap text-ellipsis overflow-hidden text-center text-gray-800">
          Añadir negocio </h3>
      </div>
    </div>
    <!-- <router-link v-for="negocio in getMisNegocios" :key="'negocio-' + negocio.idnegocio"
      :to="{ name: PageEnum.VER_NEGOCIO, params: { id: negocio.idnegocio } }"
      class="flex flex-col items-center justify-center w-full max-w-md mx-auto">
      <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
        :style="'background-image: url(' + negocio.img_cabecera + ')'"></div>
      <div class="w-56 -mt-5 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3
          class="py-2 px-4 font-bold capitalize tracking-wide whitespace-nowrap text-ellipsis overflow-hidden text-center text-gray-800">
          {{ negocio.nombre }} </h3>
        </div>
      </router-link> -->
      <router-link v-for="negocio in getMisNegocios" :to="{ name: PageEnum.VER_NEGOCIO, params: { id: negocio.idnegocio } }">
        <CardNegocio :nombre="negocio.nombre" :img-cabecera="negocio.img_cabecera"></CardNegocio>
      </router-link>
    
    <!-- Dialogs -->
    <DialogOkCancel v-model="showModal" @submit="onSubmitCrearNegocio" titulo="Crear negocio" descripcion="Promociona, vende y gestiona entradas online. Añade un negocio para empezar"></DialogOkCancel>
    <!-- <DialogAddNegocio v-model="showModal"></DialogAddNegocio> -->
    <!-- Dialogs -->
  </div>
</template>
