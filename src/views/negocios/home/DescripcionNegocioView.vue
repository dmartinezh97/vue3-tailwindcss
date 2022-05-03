<script setup lang="ts">
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';
import { ref, computed, onMounted } from 'vue';
import { router } from '@/router';
import BasicButton from '../../../components/Forms/BasicButton.vue';
import { PageEnum } from '../../../enums/pageEnum';
import { useNegocioStore } from '../../../stores/modulos/negocio';
import InputText from '../../../components/Forms/InputText.vue';

const negocioStore = useNegocioStore();

const nombre = ref("")
const descripcion = ref('')
const tiposDescripcionDiscoteca = ref([
  {
    value: 1,
    title: "Opción 1",
    desc: "El mejor sábado que puedes tener en una discoteca tipo carpa, con una gran variedad de música y un ambiente agradable.",  
  },
  {
    value: 2,
    title: "Opción 2",
    desc: "Un espacio singular que te sorprenderá nada más entrar, déjate llevar por la música y la atención de los/as bailarines/as.",  
  },
  {
    value: 3,
    title: "Opción 3",
    desc: "La mejor discoteca de la ciudad, ven a disfrutar de una gran variedad de música y un ambiente agradable.",  
  },  
])

onMounted(() => {
  if(negocioStore.negocio.nombre!= undefined && negocioStore.negocio.descripcion != undefined){
    nombre.value = negocioStore.negocio.nombre;
    descripcion.value = negocioStore.negocio.descripcion;
  }
})

const onClickAtras = () => {
  router.back()
}

const onClickSiguiente = () => {
  negocioStore.negocio.nombre = nombre.value
  negocioStore.negocio.descripcion = descripcion.value
  router.push({
    name: PageEnum.FOTOS_NEGOCIO
  })
}

const getTipoNegocio = computed(() => {
  return negocioStore.negocio.tipo_negocio
})

const getIsDisabledBtnSiguiente = computed(() => {
  return descripcion.value == "" || descripcion.value == undefined || descripcion.value == null || nombre.value == "" || nombre.value == undefined || nombre.value == null
})

</script>

<template>
  <div class="grid grid-cols-2 -p-2 lg:-m-4 h-screen-nav">
    <div class="flex items-center bg-gradient-to-t from-gris via-rosa to-rosaclaro">
      <div class="ml-14 mr-8">
        <h1 class="text-5xl font-semibold tracking-wide text-white">Ponle un nombre y elige cual de estas afirmaciones describe mejor tu negocio</h1>
        <!-- <h1 class="text-5xl font-semibold tracking-wide text-white">¿Cuál de estas afirmaciones describe mejor tu negocio?</h1> -->
      </div>
    </div>
    <div class="flex flex-col justify-between bg-white">
      <div class="scroll-content-negocio">
        <div class="flex flex-col items-center py-8 w-full relative overflow-y-auto">
          <div class="w-[580px]">
            <div class="mb-8">
              <InputText v-model="nombre" label="Nombre" block></InputText>
            </div>
            <RadioGroup v-model="descripcion" class="space-y-4">
              <template v-if="getTipoNegocio == 1">
                <RadioGroupOption v-for="tipo in tiposDescripcionDiscoteca" v-slot="{ checked }" :value="tipo.desc">
                  <div :class="[ checked ? 'bg-gray-100 border-gray-400': '', 'flex flex-col   border border-gray-300 hover:bg-gray-100 p-4 pl-6 rounded-2xl cursor-pointer']">
                    <div class="font-semibold text-lg mb-1.5">{{tipo.title}}</div>
                    <div class="text-base text-gray-400">{{tipo.desc}}</div>
                  </div>
                </RadioGroupOption>
              </template>
              <template v-else>
                <h1>ELSE</h1>
              </template>
            </RadioGroup>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center px-8 py-6 border-t-2 border-gray-100 bg-white">
        <div @click="onClickAtras" class="text-gray-800 underline underline-offset-4 decoration-1 font-semibold hover:bg-gray-100 text-lg py-1 px-4 rounded-md cursor-pointer">Atrás</div>
        <BasicButton @click="onClickSiguiente" text="Siguiente" :disabled="getIsDisabledBtnSiguiente"></BasicButton>
      </div>
    </div>
  </div>
</template>