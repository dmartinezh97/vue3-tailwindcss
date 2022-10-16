<script setup lang="ts">
import { ref, computed, onMounted, reactive, unref } from 'vue';
import InputText from '../../../components/Forms/InputText.vue';
import InputTextarea from '@/components/Forms/InputTextarea.vue';
import type { EventoInformacionModel, ServicioModel } from "@/api/model/eventoModel";
import { useEventoStore } from '../../../stores/modulos/evento';
import { useRoute } from 'vue-router';
import InputDate from '../../../components/Forms/InputDate.vue';
import IconPencilAlt from '../../../components/icons/IconPencilAlt.vue';
import IconCamera from '../../../components/icons/IconCamera.vue';
import ButtonSwitch from '../../../components/Forms/ButtonSwitch.vue';
import IconPlus from '../../../components/icons/IconPlus.vue';
import DialogOkCancel from '../../../components/Dialogs/DialogOkCancel.vue';
import IconSave from '../../../components/icons/IconSave.vue';
import { useToastStore } from '@/stores/modulos/toast';
import IconOption from '../../../components/icons/IconOption.vue';
import IconMoreVertical from '../../../components/icons/IconMoreVertical.vue';
import { Menu, MenuButton, MenuItems, MenuItem, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import IconTrash from '../../../components/icons/IconTrash.vue'
import BasicButton from '../../../components/Forms/BasicButton.vue'


const eventoStore = useEventoStore();
const { params } = useRoute();

let idevento = ref("0");
let imgCabecera = ref(null)
let info = ref<EventoInformacionModel>();
let infoInicial = ref<EventoInformacionModel>();
let showModalAddServicio = ref(false)

onMounted(async () => {
  idevento.value = params.idevento.toString();
  await getInfo()
});

const getInfo = async () => {
  if (idevento.value != "0" && idevento.value != undefined && idevento.value != null) {
    const res = await eventoStore.getInformacion(idevento.value);
    // TODO: Mirar a ver porqué sigue siendo reactivo con el objeto servicios
    // Arreglar botón de guardar cambios que no compara el objeto servicios :)
    info.value = { ...res };
    info.value.nombre = "Test"
    infoInicial.value = { ...res }; //Does not work
    infoInicial.value = unref(res) //It works
  }
}

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

const onClickAddServicio = async () => {
  if(!unchanged.value) {
    await onClickBtnActualizarEvento()
  }
  const res = await eventoStore.crearServicio(idevento.value)
  if (res) {
    await getInfo()
  }
}

const onClickBtnActualizarEvento = async () => {
  if (info.value) {
    await eventoStore.updateInformacionEvento(info.value)
  }
}

const onClickEliminarServicio = async (servicio: ServicioModel) => {
  const res = await eventoStore.eliminarServicio(servicio.idservicio)
  if(res){
    await getInfo()
  }
}

const onClickBtnGuardarCambios = () => {
  showModalAddServicio.value = true
}

const getImageCabecera = computed(() => {
  if (imgCabecera.value) {
    var urlCreator = window.URL || window.webkitURL;
    return urlCreator.createObjectURL(imgCabecera.value);
  } else if (info.value && info.value.img_cabecera) {
    return info.value.img_cabecera
  } else return "";
})

const unchanged = computed(() => {
  return JSON.stringify(info.value) === JSON.stringify(infoInicial.value)
})


</script>

<template>
  <div id="addeditarevento">
    <div v-if="info" class="max-w-7xl mx-auto overflow-hidden bg-white rounded-lg shadow-md">
      <div class="relative">
        <img
          v-if="getImageCabecera"
          class="object-cover w-full h-96"
          :src="getImageCabecera"
          alt="Foto cabecera"
        />
        <div v-else class="object-cover w-full h-96 bg-gray-200" alt="Foto cabecera"></div>
        <label
          for="foto-cabecera"
          class="absolute z-20 top-3 md:top-auto md:bottom-3 right-3 p-2 bg-primary text-gray-600 md:bg-uno-500 md:text-white border md:border-uno-500 md:hover:bg-dos rounded-lg cursor-pointer font-medium md:px-3 md:py-2 transition ease-in duration-150"
        >
          <div class="hidden md:flex md:items-center">
            <IconPencilAlt class="w-5 h-5 mr-2"></IconPencilAlt>Editar foto de portada
          </div>
          <div class="block md:hidden">
            <IconCamera class="w-6 h-6"></IconCamera>
          </div>
          <input id="foto-cabecera" @change="onChangeFileImgCabecera" type="file" class="sr-only" />
        </label>
      </div>
      <div>
        <div class="p-6 pt-3">
          <InputText label="Nombre" v-model="info.nombre" class="mb-4"></InputText>
          <InputTextarea label="Descripción" v-model="info.descripcion">
            <template v-slot:content>
              <p class="mt-2 text-gray-600">{{ info.descripcion }}</p>
            </template>
          </InputTextarea>
        </div>
        <div class="p-6">
          <h3
            class="block text-3xl font-bold text-gray-800 transition-colors rounded-md capitalize duration-200 transform dark:text-white hover:text-gray-600"
          >Servicios</h3>
          <div class="pt-3 pb-6">
            <Disclosure v-for="(servicio, index) in info.servicios" :key="'servicio-' + index">
              <div class="rounded-lg shadow-md mb-4">
                <div class="flex justify-between w-full rounded-t-lg border border-gray-300 bg-gray-100 font-bold">
                  <DisclosureButton class="w-full text-left p-5">
                    <div>Servicio</div>
                  </DisclosureButton>
                  <Menu as="div" class="relative inline-block text-left">
                    <div>
                      <MenuButton
                        class="inline-flex p-5"
                      >
                        <IconMoreVertical
                          class="w-5 h-5 text-gray-600 hover:text-gray-400"
                          aria-hidden="true"
                        />
                      </MenuButton>
                    </div>

                    <transition
                      enter-active-class="transition duration-100 ease-out"
                      enter-from-class="transform scale-95 opacity-0"
                      enter-to-class="transform scale-100 opacity-100"
                      leave-active-class="transition duration-75 ease-in"
                      leave-from-class="transform scale-100 opacity-100"
                      leave-to-class="transform scale-95 opacity-0"
                    >
                      <MenuItems
                        class="absolute z-10 right-0 w-32 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        <div>
                          <MenuItem v-slot="{ active }">
                            <button
                              @click="onClickEliminarServicio(servicio)"
                              :class="[
                                active ? 'bg-gray-100 text-gray-800' : 'text-gray-900',
                                'group flex rounded-md items-center w-full p-3 px-4 text-sm',
                              ]"
                            >
                              <IconTrash
                                :active="active"
                                class="w-5 h-5 mr-2 text-uno-500"
                                aria-hidden="true"
                              />Eliminar
                            </button>
                          </MenuItem>
                        </div>
                      </MenuItems>
                    </transition>
                  </Menu>
                </div>
                <DisclosurePanel class="grid grid-cols-5 p-5">
                  <div class="px-3">
                  <InputText label="Nombre" v-model="servicio.nombre" class="mb-4"></InputText>
                </div>
                <div class="px-3 col-span-2">
                  <InputText label="Descripción" v-model="servicio.descripcion" class="mb-4"></InputText>
                </div>
                <div class="px-3">
                  <InputText
                    label="Cantidad máxima"
                    v-model="servicio.cantidad_max_pp"
                    type="number"
                    class="mb-4"
                  ></InputText>
                </div>
                <div class="px-3">
                  <div class="flex flex-col items-center mb-4">
                    <ButtonSwitch text="Visible" v-model="servicio.visibilidad"></ButtonSwitch>
                  </div>
                </div>
                <div class="px-3">
                  <InputText
                    label="Precio"
                    v-model="servicio.precio"
                    type="number"
                    icon-right="€"
                    class="mb-4"
                  ></InputText>
                </div>
                <div class="px-3">
                  <InputText
                    label="Precio en puerta"
                    v-model="servicio.precio_en_puerta"
                    type="number"
                    icon-right="€"
                    class="mb-4"
                  ></InputText>
                </div>
                <div class="px-3">
                  <InputDate
                    v-model="servicio.fecha_inicio_venta"
                    label="Fecha inicio venta"
                    datetime
                  ></InputDate>
                </div>
                <div class="px-3">
                  <InputDate v-model="servicio.fecha_fin_venta" label="Fecha fin venta" datetime></InputDate>
                </div>
                <div class="px-3">
                  <InputText
                    label="Ventas p.p."
                    v-model="servicio.cantidad_max_pp"
                    type="number"
                    class="mb-4"
                  ></InputText>
                </div>
                </DisclosurePanel>
              </div>
            </Disclosure>
            <div
              class="w-full border-2 border-dashed border-gray-300 rounded-lg cursor-pointer"
              @click="onClickAddServicio"
            >
              <div class="flex justify-center items-center">
                <div class="flex flex-col items-center p-3">
                  <IconPlus class="w-8 h-8 text-gray-400"></IconPlus>
                  <p class="text-gray-400">Añadir servicio</p>
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
            </div>-->
          </div>
        </div>
        <div class="p-6">
          <div class="flex justify-end">
            <BasicButton text="Guardar cambios" @click="onClickBtnGuardarCambios" :disabled="unchanged">
              <template v-slot:icon>
                <IconSave class="w-5 h-5 mr-2"></IconSave>
              </template>
            </BasicButton>
          </div>
        </div>
      </div>
    </div>
    <!-- DIALOGS -->
    <DialogOkCancel
      v-model="showModalAddServicio"
      @submit="onClickBtnActualizarEvento"
      titulo="¿Desea guardar los cambios?"
      descripcion="Si quieres guardar algún cambio que hayas hecho, tan solo debes hacer clic sobre el botón Aceptar."
    ></DialogOkCancel>
    <!-- DIALOGS -->
  </div>
</template>
