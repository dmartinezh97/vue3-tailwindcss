<script setup lang="ts">
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';
import { ref, computed, onMounted } from 'vue';
import { router } from '@/router';
import BasicButton from '../../../components/Forms/BasicButton.vue';
import { PageEnum } from '../../../enums/pageEnum';
import { useNegocioStore } from '../../../stores/modulos/negocio';

const logo = ref(null)
const imgCabecera = ref(null)

const negocioStore = useNegocioStore();



onMounted(() => {
  if (negocioStore.negocio.logo != undefined && negocioStore.negocio.imgCabecera != undefined) {
    logo.value = negocioStore.negocio.logo;
    imgCabecera.value = negocioStore.negocio.imgCabecera;
  }
})

const onClickAtras = () => {
  router.back()
}

const onClickSiguiente = () => {
  if(logo.value && imgCabecera.value){
    negocioStore.negocio.logo = logo.value;
    negocioStore.negocio.imgCabecera = imgCabecera.value;
  }
  router.push({
    name: PageEnum.UBICACION_NEGOCIO
  })
}

const getIsDisabledBtnSiguiente = computed(() => {
  return logo.value == "" || logo.value == undefined || logo.value == null || imgCabecera.value == "" || imgCabecera.value == undefined || imgCabecera.value == null
})

const onChangeFileImgLogo = (e: any) => {
  if (e.target.files.length > 0) {
    logo.value = e.target.files[0];
    console.log(typeof(logo.value));
  }
};

const onClickDeleteImgLogo = (e: any) => {
  logo.value = null;
  e.preventDefault();
}

const getImageLogo = computed(() => {
  if (logo.value) {
    var urlCreator = window.URL || window.webkitURL;
    return urlCreator.createObjectURL(logo.value);
  } else return "";
})

const onChangeFileImgCabecera = (e: any) => {
  if (e.target.files.length > 0) {
    imgCabecera.value = e.target.files[0];
  }
};

const onClickDeleteImgCabecera = (e: any) => {
  imgCabecera.value = null;
  e.preventDefault();
}

const getImageCabecera = computed(() => {
  if (imgCabecera.value) {
    var urlCreator = window.URL || window.webkitURL;
    return urlCreator.createObjectURL(imgCabecera.value);
  } else return "";
})

</script>

<template>
  <div class="flex flex-col h-full bg-white">
    <div class="grow-0">
      <div class="text-center mx-auto md:max-w-2xl lg:max-w-5xl xl:max-w-4xl">
        <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-6 pb-12 pt-16 md:pt-20 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gris via-rosa to-rosaclaro leading-tight">Ahora, vamos a subir el logo y una foto de nuestro
          negocio</h1>
      </div>
    </div>
    <div class="flex flex-col justify-between grow bg-white">
      <div class="flex flex-col items-center pb-8 w-full relative space-y-4 overflow-y-auto">
        <div class="text-center leading-tight mb-4 px-6 xl:mb-12">
          <h2 class="text-2xl font-semibold">Añade dos fotos como mínimo</h2>
          <div>Previsualiza como verán tus clientes las imágenes.</div>
        </div>
        <div class="grid grid-cols-1 w-full xl:grid-cols-2 gap-x-6 px-3">
          <div class="w-full max-w-[580px] mx-auto border border-gray-300 hover:bg-gray-100 rounded mb-4">
            <label for="foto-logo"
              :class="[getImageLogo ? '' : 'cursor-pointer', 'flex flex-col justify-center items-center overflow-hidden h-60']">
              <template v-if="getImageLogo">
                <img :src="getImageLogo" class="object-cover opacity-50">
                <button @click="onClickDeleteImgLogo" class="absolute top-3 right-3 bg-white shadow-xl rounded-full p-2 leading-none"><span class="material-icons transition duration-150 text-gray-600 hover:text-red-600">delete</span></button>
              </template>
              <template v-else>
                <div class="flex flex-col items-center">
                  <span class="material-icons text-7xl text-gray-300">add_photo_alternate</span>
                  <h2 class="text-2xl font-medium tracking-wide text-gray-400">Subir logo</h2>
                </div>
                <input @change="onChangeFileImgLogo" type="file" id="foto-logo" class="sr-only">
              </template>
            </label>
          </div>
          <div class="w-full max-w-[580px] mx-auto border border-gray-300 hover:bg-gray-100 rounded mb-4">
            <label for="foto-logo"
              :class="[getImageCabecera ? '' : 'cursor-pointer', 'flex flex-col justify-center items-center overflow-hidden h-60']">
              <template v-if="getImageCabecera">
                <img :src="getImageCabecera" class="object-cover opacity-50">
                <button @click="onClickDeleteImgCabecera" class="absolute top-3 right-3 bg-white shadow-xl rounded-full p-2 leading-none"><span class="material-icons transition duration-150 text-gray-600 hover:text-red-600">delete</span></button>
              </template>
              <template v-else>
                <div class="flex flex-col items-center">
                  <span class="material-icons text-7xl text-gray-300">add_photo_alternate</span>
                  <h2 class="text-2xl font-medium tracking-wide text-gray-400">Subir imagen cabecera</h2>
                </div>
                <input @change="onChangeFileImgCabecera" type="file" id="foto-logo" class="sr-only">
              </template>
            </label>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center px-8 py-6 border-t-2 border-gray-100 bg-white">
        <div @click="onClickAtras"
          class="text-gray-800 underline underline-offset-4 decoration-1 font-semibold hover:bg-gray-100 text-lg py-1 px-4 rounded-md cursor-pointer">
          Atrás</div>
        <BasicButton @click="onClickSiguiente" text="Siguiente" :disabled="getIsDisabledBtnSiguiente"></BasicButton>
      </div>
    </div>
  </div>
</template>