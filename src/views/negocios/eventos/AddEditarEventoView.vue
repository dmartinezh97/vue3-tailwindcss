<script setup lang="ts">
import { ref, computed, reactive, onMounted } from 'vue';
import InputText from '../../../components/Forms/InputText.vue';
import InputTextarea from '@/components/Forms/InputTextarea.vue';
import IconAdd from '@/components/icons/IconAdd.vue';
import type { EventoInformacionModel, EventoParams } from "@/api/model/eventoModel";
import { useEventoStore } from '../../../stores/modulos/evento';
import BasicButton from '../../../components/Forms/BasicButton.vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import InputDate from '../../../components/Forms/InputDate.vue';
import IconPencilAlt from '../../../components/icons/IconPencilAlt.vue';
import IconCamera from '../../../components/icons/IconCamera.vue';
import IconSave from '../../../components/icons/IconSave.vue';
import ButtonSwitch from '../../../components/Forms/ButtonSwitch.vue';


const eventoStore = useEventoStore();
const { params } = useRoute();

let idevento = ref("0");
let imgCabecera = ref(null)
let info = ref<EventoInformacionModel>();
let esEditable = ref(true)
let testSwitch = ref(false)
let textEditar = ref('Editar')

onMounted(async () => {
  if(params.idevento){
    idevento.value = params.idevento.toString();
    info.value = await eventoStore.getInformacion(idevento.value);
  }else{
    info.value = {
      idevento: 0,
      nombre: "",
      descripcion: "",
      img_cabecera: "",
      fecha_creacion: "",
      fecha_modificacion: "",
    }
  }
});

const getImageCabecera = computed(() => {
  if (imgCabecera.value) {
    var urlCreator = window.URL || window.webkitURL;
    return urlCreator.createObjectURL(imgCabecera.value);
  } else if(info.value && info.value.img_cabecera) {
    return info.value.img_cabecera
  } else return "";
})

const onChangeFileImgCabecera = (e: any) => {
  if (e.target.files.length > 0) {
    imgCabecera.value = e.target.files[0];
    const formData = new FormData();
    // formData.append('idevento', params.id.toString());
    // if (imgCabecera.value != null)
    //   formData.append('logo', imgCabecera.value)
    //negocioStore.updateCabecera(formData)
  }
};

const onClickEditar = () => {
  if(esEditable.value){
    //TODO: Hacer petición abrir dialog y preguntar si se quieren guardar los cambios
    //showModalGuardarCambios.value = true
  }else{
    esEditable.value = true
    textEditar.value = 'Guardar cambios'
  }
}

const classBtnEditarObject = computed(() => ({
  'bg-gray-200 hover:bg-gray-300 text-gray-700 border border-gray-300': !esEditable.value,
  'bg-uno text-white border border-uno hover:bg-dos': esEditable.value
}))

</script>

<template>
  <div id="addeditarevento">
    <div v-if="info" class="max-w-7xl mx-auto overflow-hidden bg-white rounded-lg shadow-md">
      <div class="relative">
        <img v-if="getImageCabecera" class="object-cover w-full h-96" :src="getImageCabecera" alt="Foto cabecera">
        <div v-else class="object-cover w-full h-96 bg-gray-200" alt="Foto cabecera"></div>
        <label for="foto-cabecera" class="absolute z-40 top-3 md:top-auto md:bottom-3 right-3 p-2 bg-primary text-gray-600 md:bg-uno md:text-white border md:border-uno md:hover:bg-dos rounded-lg cursor-pointer font-medium md:px-3 md:py-2 transition ease-in duration-150">
          <div class="hidden md:flex md:items-center">
            <IconPencilAlt class="w-5 h-5 mr-2"></IconPencilAlt>
            Editar foto de portada
          </div>
          <div class="block md:hidden">
            <IconCamera class="w-6 h-6"></IconCamera>
          </div>
          <input id="foto-cabecera" @change="onChangeFileImgCabecera" type="file" class="sr-only" />
        </label>
      </div>
      <div class="p-6 pt-3">
        <div class="flex justify-end">
          <button @click="onClickEditar" type="button" :class="classBtnEditarObject" class="flex items-center rounded-lg font-medium px-3 py-2 transition ease-in duration-150">
            <IconSave v-if="esEditable" class="w-5 h-5 mr-2"></IconSave>
            <IconPencilAlt v-else class="w-5 h-5 mr-2"></IconPencilAlt>
            {{textEditar}}
          </button>
        </div>
        <div>
          <InputText label="Nombre" v-model="info.nombre" :editable="esEditable" class="mb-4">
            <template v-slot:content>
              <h3 class="block mt-2 mb-4 text-3xl font-bold text-gray-800 transition-colors rounded-md capitalize duration-200 transform dark:text-white hover:text-gray-600">{{info.nombre}}</h3>
            </template>
          </InputText>
          <InputTextarea label="Descripción" v-model="info.descripcion" :editable="esEditable" class="mb-4">
            <template v-slot:content>
              <p class="mt-2 mb-4 text-gray-600">{{ info.descripcion }}</p>
            </template>
          </InputTextarea>
          <div>
            <h3 class="block mt-2 text-3xl font-bold text-gray-800 transition-colors rounded-md capitalize duration-200 transform dark:text-white hover:text-gray-600">Servicios</h3>
            <div class="py-6">
              <div class="rounded-lg overflow-hidden shadow-md mb-4 border border-gray-300" v-for="x in 3">
                <div class="bg-gray-100 font-bold p-5">
                  Servicio
                </div>
                <div class="grid grid-cols-6 p-5">
                  <div class="px-3">
                    <InputText label="Precio" v-model="info.nombre" :editable="esEditable" type="number" class="mb-4">
                      <template v-slot:content>
                        <h3 class="block mt-2 mb-4 text-3xl font-bold text-gray-800 transition-colors rounded-md capitalize duration-200 transform dark:text-white hover:text-gray-600">{{info.nombre}}</h3>
                      </template>
                    </InputText>
                  </div>
                  <div class="px-3">
                    <InputText label="Precio en puerta" v-model="info.nombre" :editable="esEditable" type="number" class="mb-4">
                      <template v-slot:content>
                        <h3 class="block mt-2 mb-4 text-3xl font-bold text-gray-800 transition-colors rounded-md capitalize duration-200 transform dark:text-white hover:text-gray-600">{{info.nombre}}</h3>
                      </template>
                    </InputText>
                  </div>
                  <div class="px-3">
                    <div class="flex flex-col items-center mb-4">
                      <ButtonSwitch text="Visible" v-model="testSwitch"></ButtonSwitch>
                    </div>
                  </div>
                  <div>
                    4
                  </div>
                </div>
              </div>

              <!-- <div class="flex py-5 px-3 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
                <div class="grow px-2">
                  <div>
                    <h3 class="text-lg font-bold text-gray-800">Lista</h3>
                  </div>
                  <div class="mt-3">
                    <p>Entrada amb 1 consumició.</p>
                  </div>
                </div>
                <div class="flex items-center px-2">
                  <div>
                    <h3 class="text-md font-extrabold text-gray-800">16,00 €</h3>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
