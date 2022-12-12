<script setup lang="ts">
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';
import { ref, computed, onMounted } from 'vue';
import { router } from '@/router';
import BasicButton from '../../../components/ui/BasicButton.vue';
import { PageEnum } from '../../../enums/pageEnum';
import { useNegocioStore } from '../../../stores/modulos/negocio';
import InputText from '../../../components/ui/InputText.vue';
import DialogGoogleMaps from '../../../components/Dialogs/DialogGoogleMaps.vue';
import type { DireccionNegocio } from '../../../types/store';

const direccion = ref<DireccionNegocio>({
  calle: "",
  numero: "",
  localidad: "",
  cp: "",
  provincia: "",
  pais: "",
})

const negocioStore = useNegocioStore();

onMounted(() => {
  if(negocioStore.negocio.direccion != undefined) {
    direccion.value = negocioStore.negocio.direccion;
  }
})

const onClickAtras = () => {
  router.back()
}

const onClickSiguiente = () => {
  negocioStore.negocio.direccion = direccion.value;
  router.push({
    name: PageEnum.REVISAR_NEGOCIO
  })
}

const getIsDisabledBtnSiguiente = computed(() => {
  return direccion.value.calle == "" || direccion.value.localidad == "" || direccion.value.cp == "" || direccion.value.provincia == "" || direccion.value.pais == "";
})

</script>

<template>
  <div class="flex flex-col h-full bg-white">
    <div class="grow-0">
      <div class="text-center mx-auto md:max-w-2xl lg:max-w-5xl xl:max-w-5xl">
        <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-6 pb-12 pt-16 md:pt-20 font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gris via-rosa to-rosaclaro leading-tight">¿Dónde se encuentra tu negocio?</h1>
      </div>
    </div>
    <div class="flex flex-col justify-between grow bg-white">
      <div class="px-3">
        <div class="relative w-full max-w-lg mx-auto bg-white rounded-xl shadow-xl border border-gray-200">
              <div class="flex justify-center items-center h-16 border-b border-gray-200 px-3">
                  <h2 class="text-base leading-none tracking-tight font-extrabold">Confirma tu dirección</h2>
              </div>
              <div class="p-6">
                  <!-- <div class="mb-8">
                      <h3 class="font-semibold text-xl">¡Te damos la bienvenida a {nombreApp}!</h3>
                  </div> -->
                  <div>
                    <InputText label="Calle" v-model="direccion.calle"></InputText>
                    <InputText label="Número (Opcional)" v-model="direccion.numero"></InputText>
                    <InputText label="Localidad" v-model="direccion.localidad"></InputText>
                    <InputText label="Código postal" v-model="direccion.cp"></InputText>
                    <InputText label="Provincia" v-model="direccion.provincia"></InputText>
                    <InputText label="País" v-model="direccion.pais"></InputText>
                  </div>
              </div>
          </div>
      </div>
      <div class="flex justify-between items-center px-8 py-6 border-t-2 border-gray-100 bg-white">
        <div @click="onClickAtras"
          class="text-gray-800 underline underline-offset-4 decoration-1 font-semibold hover:bg-gray-100 text-lg py-1 px-4 rounded-md cursor-pointer">
          Atrás</div>
        <BasicButton @click="onClickSiguiente" text="Revisar negocio" :disabled="getIsDisabledBtnSiguiente"></BasicButton>
      </div>
    </div>
  </div>
</template>