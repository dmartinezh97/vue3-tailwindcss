<script setup lang="ts">
import BasicButton from "../../components/Forms/BasicButton.vue";
import { ButtonStyleEnum, ButtonShadowEnum } from "@/enums/buttonEnum";
import AnimationApp from "../../components/icons/AnimationApp.vue";
import { router } from '../../router/index';
import { SizeEnum } from '../../enums/sizeEnum';
import { ref } from 'vue';
import InputText from '../../components/Forms/InputText.vue';
import IconBuscar from '../../components/icons/IconBuscar.vue';
import IconAdd from '../../components/icons/IconAdd.vue';

const buscar = ref("")

const onClickBtnAddNegocio = () => {
  router.push({
    name: 'Signup'
  })
};

</script>

<template>
  <div id="eventos" class="w-full p-4">
    <div class="max-w-7xl mx-auto overflow-hidden">
      <div class="grid grid-cols-3 gap-6 gap-y-10">
        <!-- AQUI -->
        <div class="flex flex-col items-center w-full max-w-sm mx-auto cursor-pointer appearance-none">
            <div class="w-full flex justify-center items-center h-64 bg-transparent bg-center bg-cover rounded-lg shadow-md border border-dashed border-gray-300">
              <div class="flex flex-col items-center text-base font-semibold text-gray-600">
                <IconAdd class="w-24 h-24 text-gray-200"></IconAdd>
                <!-- <label class="text-base font-semibold text-gray-600"></label> -->
                Añadir evento
              </div>
            </div>
  
            <!-- <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">La Mafiosa Reggaeton Classics</h3>
                
                <div class="text-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
                    Vie. 01 de Abr
                </div>
            </div> -->
        </div>
        <!-- AQUI -->
        <!-- <label class="flex w-full cursor-pointer appearance-none justify-center rounded-md border border-dashed border-gray-300 bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" tabindex="0">
          <span for="photo-dropbox" class="flex items-center space-x-2">
            <svg class="h-6 w-6 stroke-gray-400" viewBox="0 0 256 256">
              <path d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path>
              <path d="M80,128a80,80,0,1,1,144,48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></path>
              <polyline points="118.1 161.9 152 128 185.9 161.9" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline>
              <line x1="152" y1="208" x2="152" y2="128" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
            </svg>
            <span class="text-xs font-medium text-gray-600">
              Drop files to Attach, or
              <span class="text-blue-600 underline">browse</span>
            </span>
          </span>
          <input id="photo-dropbox" type="file" class="sr-only">
        </label> -->

        <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
            <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style="background-image: url(https://images.xceed.me/events/banners/la-mafiosa-reggaeton-classics-navu-granollers-barcelona-xceed-a7fe.jpg?w=920&ar=16:9&fm=auto)"></div>
  
            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">La Mafiosa Reggaeton Classics</h3>
                
                <div class="text-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
                    Vie. 01 de Abr
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
