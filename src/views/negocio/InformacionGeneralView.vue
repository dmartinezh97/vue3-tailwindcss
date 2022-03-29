<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { useNegocioStore } from '../../stores/modulos/negocio';
import type { NegocioInformacionGeneralResultModel } from '../../api/model/negocioModel';

const negocioStore = useNegocioStore();
const { params } = useRoute()

let info = ref<NegocioInformacionGeneralResultModel | null>();

onMounted(async () => {
  await getInfo(params.id.toString())
});

onBeforeRouteUpdate(async (onRouteChange)=> {
  //Cambiamos de ruta y actualizamos toda la info :)
  await getInfo(onRouteChange.params.id.toString())
})


const getInfo = async (id: string) => {
  if(id){
    info.value = await negocioStore.getInformacionGeneral(id);
  }
};

</script>

<template>
  <div id="informaciongeneral" class="w-full p-4">
    <div v-if="info" class="max-w-7xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img class="object-cover w-full h-64" :src="info?.img_cabecera" alt="Article">
        <div class="flex justify-center -mt-40 md:ml-10 md:justify-start">
            <img class="object-cover w-48 h-48 border-2 border-uno rounded-full dark:border-uno" alt="Testimonial avatar" :src="info.img_logo">
        </div>
        <div class="p-6">
          <div>
              <h3 class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors capitalize duration-200 transform dark:text-white hover:text-gray-600">{{info?.nombre}}</h3>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ info?.descripcion }}</p>
          </div>
          <div>
            <h1>REDES SOCIALES, UBICACIÓN, ETC...</h1>
          </div>
        </div>
    </div>
  </div>
</template>
