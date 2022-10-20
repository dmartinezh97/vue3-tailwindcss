<script setup lang="ts">
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';
import { ref, computed, onMounted } from 'vue';
import { router } from '@/router';
import BasicButton from '../../../components/Forms/BasicButton.vue';
import { PageEnum } from '../../../enums/pageEnum';
import { useNegocioStore } from '../../../stores/modulos/negocio';
import InputText from '../../../components/Forms/InputText.vue';

const negocioStore = useNegocioStore();

const nombre = ref('')

onMounted(() => {
  if(negocioStore.negocio.nombre != undefined){
    //descripcion.value = negocioStore.negocio.descripcion;
  }
})

const onClickAtras = () => {
  router.back()
}

const onClickGuardarCambios = () => {
  if(negocioStore.negocio!=undefined){
    negocioStore.crearNegocio(negocioStore.negocio);
  }
  // negocioStore.negocio.descripcion = descripcion.value
  // router.push({
  //   name: PageEnum.FOTOS_NEGOCIO
  // })
}

const getImageCabecera = computed(() => {
  if (negocioStore.negocio.imgCabecera) {
    var urlCreator = window.URL || window.webkitURL;
    return urlCreator.createObjectURL(negocioStore.negocio.imgCabecera);
  } else return "";
})

const getImageLogo = computed(() => {
  if (negocioStore.negocio.logo) {
    var urlCreator = window.URL || window.webkitURL;
    return urlCreator.createObjectURL(negocioStore.negocio.logo);
  } else return "";
})

</script>

<template>
  <div class="flex flex-col h-full bg-white">
    <div class="grow-0">
      <div class="text-center mx-auto md:max-w-2xl lg:max-w-5xl xl:max-w-4xl px-6 pb-12 pt-16 md:pt-20">
        <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gris via-rosa to-rosaclaro leading-tight">¡Revisa toda la información!</h1>
        <div class="font-light text-xl">
          Cuando guardes los cambios, tu negocio quedará pendiente de aprobación.
        </div>
      </div>
    </div>
    <!-- <div class="flex items-center bg-gradient-to-t from-gris via-rosa to-rosaclaro">
      <div class="max-w-2xl ml-14 mr-8">
        <h1 class="text-5xl text-white font-semibold tracking-wide mb-4">¡Revisa toda la información!</h1>
        <div class="text-white font-light text-xl">
          Cuando guardes los cambios, tu negocio quedará pendiente de aprobación.
        </div>
      </div>
    </div> -->
    <div class="flex flex-col justify-between grow bg-white">
      <div class="max-w-3xl w-full mx-auto px-3 lg:py-4">
        <div class="relative border border-gray-300 rounded-md overflow-hidden">
          <img :src="getImageCabecera" class="object-cover object-center w-full h-56">
          <!-- <div class="absolute right-3 mt-1">
            <span class="material-icons text-3xl text-gray-600">place</span>
          </div> -->
          <div class="flex justify-start ml-8 -mt-24">
            <img :src="getImageLogo" class="object-cover border-2 border-uno-500 rounded-full dark:border-uno-500 w-32 h-32">
          </div>
          <div class="py-4 px-6">
            <h1 class="text-xl font-bold tracking-wide text-gray-800">{{ negocioStore.negocio.nombre }}</h1>
            <p class="text-base text-gray-400">{{ negocioStore.negocio.descripcion }}</p>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center px-8 py-6 border-t-2 border-gray-100 bg-white">
        <div @click="onClickAtras" class="text-gray-800 underline underline-offset-4 decoration-1 font-semibold hover:bg-gray-100 text-lg py-1 px-4 rounded-md cursor-pointer">Atrás</div>
        <BasicButton @click="onClickGuardarCambios" text="Crear negocio"></BasicButton>
      </div>
    </div>
  </div>
</template>