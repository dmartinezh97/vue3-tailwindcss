<script setup lang="ts">
import { onMounted, ref, computed, watchEffect, watch, readonly } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { useNegocioStore } from '@/stores/modulos/negocio';
import type { NegocioInformacionGeneralModel } from '@/api/model/negocioModel';
import IconCamera from '../../../components/icons/IconCamera.vue';
import BasicButton from '../../../components/ui/buttons/BasicButton.vue';
import InputText from '../../../components/ui/InputText.vue';
import InputTextarea from '../../../components/ui/InputTextarea.vue';
import DialogGoogleMaps from '../../../components/Dialogs/DialogGoogleMaps.vue';
import IconDanger from '../../../components/icons/IconDanger.vue';
import IconPencilAlt from '../../../components/icons/IconPencilAlt.vue';
import IconSave from '../../../components/icons/IconSave.vue';
import DialogOkCancel from '../../../components/layouts/dialogs/DialogOkCancel.vue';
import { convertToSlug } from '../../../utils/slug';

const negocioStore = useNegocioStore();
const { params } = useRoute()

let info = ref<NegocioInformacionGeneralModel>();
/* Info */
let nombre = ref("")
let slug = ref("")
let descripcion = ref("")
let ubicacion = ref("")
/* Varias variables de imagen por problemas de tipos */
let imgLogo = ref("")
let imgLogoFile = ref(null)
let imgCabecera = ref("")
let imgCabeceraFile = ref(null)
/* Info */
let showModalUbicacion = ref(false)
let showModalGuardarCambios = ref(false)
let btnDisabled = ref(true)

onMounted(async () => {
  await getInfo(params.id.toString())
  /* Para obtener varios valores watch([nombre], ([newValue1], [oldValue1]) => { */
  watch([nombre, slug, descripcion, ubicacion], ([newNombre, newSlug, newDescripcion, newUbicacion]) => {
    if(info.value){
      info.value.nombre = newNombre
      info.value.slug = newSlug
      info.value.descripcion = newDescripcion
      info.value.ubicacion = newUbicacion
    }
    btnDisabled.value = false
  })
});

onBeforeRouteUpdate(async (onRouteChange)=> {
  //Cambiamos de ruta y actualizamos toda la info :)
  await getInfo(onRouteChange.params.id.toString())
  btnDisabled.value = true
})

const getInfo = async (id: string) => {
  if(id){
    const res = await negocioStore.getInformacionGeneral(id);
    if(res){
      info.value = res;
      nombre.value = res.nombre
      slug.value = res.slug
      descripcion.value = res.descripcion
      ubicacion.value = res.ubicacion
      imgLogo.value = res.img_logo
      imgCabecera.value = res.img_cabecera
      btnDisabled.value = true
    }
  }
};

const onChangeNombre = () => {
  slug.value = convertToSlug(nombre.value)
};

const onChangeFileImgPerfil = (e: any) => {
  if (e.target.files.length > 0) {
    imgLogoFile.value = e.target.files[0];
    if (imgLogoFile.value != null){
      const formData = new FormData();
      formData.append('logo', imgLogoFile.value)
      negocioStore.updateLogo(parseInt(params.id.toString()), formData)
    }
  }
};

const onChangeFileImgCabecera = (e: any) => {
  if (e.target.files.length > 0) {
    imgCabeceraFile.value = e.target.files[0];
    if (imgCabeceraFile.value != null){
      const formData = new FormData();
      formData.append('img_cabecera', imgCabeceraFile.value)
      negocioStore.updateCabecera(parseInt(params.id.toString()), formData)
    }
  }
};

const onChangeUbicacion = (url: string) => {
  ubicacion.value = url
};

const onClickBtnConfirmarGuardarCambios = () => {
  //TODO: Hacer petición abrir dialog y preguntar si se quieren guardar los cambios
  showModalGuardarCambios.value = true
}

const onClickGuardarCambios = async () => {
  //Primero guardar cambios en BD
  if(info.value){
    //TODO: Hacer comprobacion de datos
    const res = await negocioStore.updateDatos(info.value)
    if(res){
      //Luego actualizar info en store
      await getInfo(params.id.toString())
      //Luego cerrar dialog
      showModalGuardarCambios.value = false
    }
  }
}

const getImageLogo = computed(() => {
  if (imgLogoFile.value) {
    var urlCreator = window.URL || window.webkitURL;
    return urlCreator.createObjectURL(imgLogoFile.value);
  } else if(imgLogo.value) {
    return imgLogo.value
  } else return "";
})

const getImageCabecera = computed(() => {
  if (imgCabeceraFile.value) {
    var urlCreator = window.URL || window.webkitURL;
    return urlCreator.createObjectURL(imgCabeceraFile.value);
  }  else if(imgCabecera.value) {
    return imgCabecera.value
  } else return "";
})

</script>

<template>
  <div id="informaciongeneral" class="p-4">
    <div class="overflow-hidden bg-white rounded-lg shadow-md">
        <div class="relative">
          <img v-if="imgCabecera" class="object-cover w-full h-64" :src="getImageCabecera" alt="Foto cabecera">
          <div v-else class="object-cover w-full h-64 bg-gray-200" alt="Foto cabecera"></div>
          <label for="foto-cabecera" class="absolute z-40 top-3 md:top-auto md:bottom-3 right-3 p-2 bg-primary text-gray-600 md:bg-uno-500 md:text-white border md:border-uno-500 md:hover:bg-dos rounded-lg cursor-pointer font-medium md:px-3 md:py-2 transition ease-in duration-150">
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
        <div class="flex justify-center -mt-40 md:ml-10 md:justify-start">
          <label for="foto-logo" class="relative cursor-pointer">
            <div class="relative rounded-full overflow-hidden border-4 border-uno-500">
                <div class="absolute z-20 w-full h-full hover:bg-black/40"></div>
                <img v-if="imgLogo" class="object-cover w-48 h-48" alt="Foto perfil" :src="getImageLogo">
                <div v-else class="object-cover w-48 h-48 bg-gray-200" alt="Foto perfil"></div>
              </div>
              <div class="absolute z-30 bottom-3 right-3 rounded-full bg-primary p-2">
                <IconCamera class="w-6 h-6 text-gray-600"></IconCamera>
              </div>
              <input id="foto-logo" @change="onChangeFileImgPerfil" type="file" class="sr-only" />
            </label>
        </div>
        <div class="p-6 pt-3">
          <div>
              <InputText label="Nombre" v-model="nombre" @keyup="onChangeNombre" class="mb-4"></InputText>
              <InputText label="Slug" v-model="slug" class="mb-4"></InputText>
              <InputTextarea label="Descripción" v-model="descripcion" class="mb-4"></InputTextarea>
              <InputText label="Ubicación" v-model="ubicacion" @click="showModalUbicacion=!showModalUbicacion" class="mb-4" readonly></InputText>
              <!-- <iframe v-if="!esEditable && info.ubicacion" :src="info.ubicacion" width="100%" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <div v-else-if="!esEditable && !info.ubicacion" class="flex mb-4">
                <IconDanger class="text-yellow-500"></IconDanger>
                <p class="ml-2 text-gray-600">Ubicación no disponible</p>
              </div> -->
          </div>
          <div class="flex justify-end">
            <BasicButton text="Guardar cambios" @click="onClickBtnConfirmarGuardarCambios" :disabled="btnDisabled">
              <template v-slot:icon>
                <IconSave class="w-5 h-5 mr-2"></IconSave>
              </template>
            </BasicButton>
          </div>
        </div>
    </div>
    <!-- DIALOGS -->
    <DialogGoogleMaps v-if="ubicacion && showModalUbicacion" v-model="showModalUbicacion" :direccion="ubicacion" @submit="onChangeUbicacion"></DialogGoogleMaps>
    <DialogOkCancel v-model="showModalGuardarCambios" @submit="onClickGuardarCambios" titulo="¿Desea guardar los cambios?" descripcion="Si quieres guardar algún cambio que hayas hecho, tan solo debes hacer clic sobre el botón Aceptar."></DialogOkCancel>
    <!-- DIALOGS -->
  </div>
</template>
