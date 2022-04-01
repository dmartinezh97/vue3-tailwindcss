<script setup lang="ts">
import { ref, computed, reactive } from 'vue';
import InputText from '../../../components/Forms/InputText.vue';
import InputTextarea from '@/components/Forms/InputTextarea.vue';
import IconAdd from '@/components/icons/IconAdd.vue';
import type { EventoParams } from "@/api/model/eventoModel";
import { useEventoStore } from '../../../stores/modulos/evento';
import BasicButton from '../../../components/Forms/BasicButton.vue';
import { useRoute } from 'vue-router';

let tabActive = ref(1)
let imgCabecera = ref(null)

const eventoStore = useEventoStore();
const route = useRoute();

const onClickBtnCrearEvento = () => {
  //TODO: Hacer validación de datos
  let formData = new FormData();
  formData.append('id_negocio', route.params.id.toString());
  formData.append('nombre', frmData.nombre)
  formData.append('descripcion', frmData.descripcion)
  if (imgCabecera.value != null)
    formData.append('img_cabecera', imgCabecera.value)
  eventoStore.crearEvento(formData);
};

const frmData: EventoParams = reactive({
  nombre: "",
  descripcion: "",
  img_cabecera: ""
})

const onChangeFileImgCabecera = (e: any) => {
  if (e.target.files.length > 0) {
    imgCabecera.value = e.target.files[0];
  }
};

const onClickChangeTab = (tab: number) => {
  tabActive.value = tab
};

// const getImageCabecera = computed(() => {
//   if(imgCabecera.value){
//     var urlCreator = window.URL || window.webkitURL;
//     return "bg-[url('" + urlCreator.createObjectURL(imgCabecera.value) + "')] opacity-10";
//   }else return "";
// })

const getImageCabecera = computed(() => {
  if (imgCabecera.value) {
    var urlCreator = window.URL || window.webkitURL;
    return urlCreator.createObjectURL(imgCabecera.value);
  } else return "";
})

// const getImgCabeceraNegocio = computed(() => {
//   var urlCreator = window.URL || window.webkitURL;
//   return imgCabecera.value != null ? urlCreator.createObjectURL(imgCabecera.value) : "https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/276007407_4930148147032672_7062034494787834528_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_ohc=0lnQAr5zXgAAX_5cE-x&_nc_ht=scontent-mad1-1.xx&oh=00_AT-hA2BKSVcZVpZEZrSennS4Q14hSAh_TUdhec1KRF5Y5w&oe=624483B3";
// })

</script>

<template>
  <div id="addevento" class="w-full p-4">
    <div class>
      <div class="h-80"></div>
      <div class="-mt-72 z-10">
        <!--  -->
        <label
          for="photo-dropbox"
          class="block max-w-4xl mx-auto cursor-pointer overflow-hidden rounded-lg shadow-lg transition bg-zinc-300"
        >
          <img v-if="imgCabecera" class="w-full h-96" :src="getImageCabecera" />
          <div v-else class="w-full h-96"></div>
          <!-- <span for="photo-dropboxxx" :class="getImageCabecera" class="h-96 w-full bg-center bg-no-repeat flex flex-col justify-center items-center">
          </span>-->
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div class="flex flex-col items-center">
              <IconAdd class="w-24 h-24 text-white"></IconAdd>
              <span class="font-semibold text-white">Haz click para añadir una imagen</span>
            </div>
          </div>
          <input id="photo-dropbox" @change="onChangeFileImgCabecera" type="file" class="sr-only" />
        </label>
        <!-- <div class="max-w-4xl bg-white mx-auto overflow-hidden rounded-lg shadow-lg dark:bg-gray-800">
            <img class="object-cover w-full h-96" :src="getImageCabecera" alt="Article">
        </div>-->

        <!--  -->
      </div>
      <div class="-mt-6 bg-white rounded-lg shadow-md px-4 py-12">
        <div class="px-4">
          <ul
            class="hidden font-medium text-center border text-gray-500 rounded-lg divide-x divide-gray-200 sm:flex dark:divide-gray-700 dark:text-gray-400"
          >
            <li class="w-full" @click="onClickChangeTab(1)">
              <label
                :class="{ 'text-gray-900 bg-gray-100': tabActive == 1 }"
                class="inline-block p-4 w-full cursor-pointer bg-white rounded-l-lg focus:outline-none dark:bg-gray-700 dark:text-white"
                aria-current="page"
              >Información</label>
            </li>
            <li class="w-full" @click="onClickChangeTab(2)">
              <label
                :class="{ 'text-gray-900 bg-gray-100': tabActive == 2 }"
                class="inline-block p-4 w-full cursor-pointer bg-white hover:text-gray-700 hover:bg-gray-50 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              >Configuración</label>
            </li>
            <!-- <li class="w-full" @click="onClickChangeTab(3)">
                  <label :class="{ 'text-gray-900 bg-gray-100' : tabActive == 3 }" class="inline-block p-4 w-full cursor-pointer bg-white hover:text-gray-700 hover:bg-gray-50 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Settings</label>
              </li>
              <li class="w-full" @click="onClickChangeTab(4)">
                  <label :class="{ 'text-gray-900 bg-gray-100' : tabActive == 4 }" class="inline-block p-4 w-full cursor-pointer bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Invoice</label>
            </li>-->
          </ul>
          <div class="py-4">
            <div v-if="tabActive == 1">
              <div class="mb-4">
                <InputText v-model="frmData.nombre" label="Nombre"></InputText>
              </div>
              <div class="mb-4">
                <InputTextarea v-model="frmData.descripcion" label="Descripción"></InputTextarea>
              </div>
              <div>
                <BasicButton text="Crear evento" @click="onClickBtnCrearEvento" block shadow></BasicButton>
              </div>
            </div>
            <div v-else-if="tabActive == 2">
              <h1>asd 2</h1>
            </div>
            <!-- <div v-else-if="tabActive == 3">
              <h1>asd 3</h1>
            </div>
            <div v-else-if="tabActive == 4">
              <h1>asd 4</h1>
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
