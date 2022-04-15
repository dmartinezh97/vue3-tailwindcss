<script setup lang="ts">
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';
import { ref } from 'vue';
import { router } from '@/router';
import BasicButton from '../../../components/Forms/BasicButton.vue';

const tipoNegocio = ref('')
const tiposNegocio = ref([
  {
    value: 'discoteca',
    label: 'Discoteca',
    img: 'https://a0.muscache.com/im/pictures/eadbcbdb-d57d-44d9-9a76-665a7a4d1cd7.jpg?im_w=240'
  },
  {
    value: 'restaurante',
    label: 'Restaurante',
    img: 'https://a0.muscache.com/im/pictures/d1af74db-58eb-46bf-b3f5-e42b6c9892db.jpg?im_w=240'
  },
  {
    value: 'cine',
    label: 'Cine',
    img: 'https://a0.muscache.com/im/pictures/32897901-1870-4895-8e23-f08dc0e61750.jpg?im_w=240'
  },
])

const onClickAtras = () => {
  router.back()
}

const onClickSiguiente = () => {
  //router.back()
}

</script>

<template>
  <div class="grid grid-cols-2 -p-2 lg:-m-4 h-screen-nav">
    <div class="flex items-center bg-gradient-to-t from-gris via-rosa to-rosaclaro">
      <div class="ml-14 mr-8">
        <h1 class="text-5xl font-semibold tracking-wide leading-tight text-white">¿Cuál de estas afirmaciones describe mejor tu alojamiento?</h1>
      </div>
    </div>
    <div class="flex flex-col justify-between bg-white">
      <div class="flex flex-col justify-center items-center h-full p-8">
        <RadioGroup v-model="tipoNegocio" class="space-y-4">
          <RadioGroupOption v-for="tipo in tiposNegocio" v-slot="{ checked }" :value="tipo.value">
            <div :class="[ checked ? 'bg-gray-100 border-gray-400': '', 'flex justify-between items-center min-w-[380px] w-full border border-gray-300 hover:bg-gray-100 p-4 pl-6 rounded-2xl cursor-pointer']">
              <div class="font-semibold text-lg">{{tipo.label}}</div>
              <div>
                <div class="w-14 h-14">
                  <img :src="tipo.img" alt="">
                </div>
              </div>
            </div>
          </RadioGroupOption>
        </RadioGroup>
      </div>
      <div class="flex justify-between items-center px-8 py-6">
        <div @click="onClickAtras" class="text-gray-800 underline underline-offset-4 decoration-1 font-semibold hover:bg-gray-100 text-lg py-1 px-4 rounded-md cursor-pointer">Atrás</div>
        <BasicButton @click="onClickSiguiente" text="Siguiente"></BasicButton>
      </div>
    </div>
  </div>
</template>