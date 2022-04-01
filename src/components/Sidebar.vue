<script setup lang="ts">
import { PageEnum } from '@/enums/pageEnum';
import { router } from '@/router';
import { useNegocioStore } from '@/stores/modulos/negocio';
import { computed, onBeforeMount, onMounted } from 'vue';
import { useUserStore } from '../stores/modulos/user';
import BasicButton from './Forms/BasicButton.vue';
import IconAdd from './icons/IconAdd.vue';


const userStore = useUserStore();
const negocioStore = useNegocioStore();

// onMounted(()=>{
//   negocioStore.misNegocios()
// })

onBeforeMount(()=>{
  negocioStore.misNegocios()
})

const getMisNegocios = computed(() => {
  return negocioStore.negocios ?? []
})

const onClickAddNegocio = () => {
  router.push({
    name: PageEnum.ADD_NEGOCIO
  })
};

</script>

<template>
    <template v-if="userStore.getIsLogged">
    <!-- PARA SELECCIONAR EL LOCAL -->
      <div>
        <div class="hidden lg:flex flex-col w-80 grow h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
          <nav>
              <!-- BUCLE CON TODOS LOS NEGOCIOS -->
              <template v-for="negocio in getMisNegocios">
                <router-link :to="{ name: PageEnum.VER_NEGOCIO, params: { id: negocio.idnegocio } }" active-class="bg-gray-200" class="flex items-center px-4 py-2 mb-2 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                  <div class="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                    <img
                      :src="negocio.img_logo"
                      class="object-cover w-full h-full"
                      alt="avatar"
                    />
                  </div>
                  <span class="mx-4 font-medium capitalize whitespace-nowrap text-ellipsis overflow-hidden">{{negocio.nombre}}</span>
                </router-link>
              </template>
              <hr class="my-3 border-gray-200 dark:border-gray-600" />
              <router-link :to="{ name: PageEnum.ADD_NEGOCIO }" active-class="bg-gray-200" class="flex items-center px-4 py-2 text-gray-700  rounded-md dark:bg-gray-700 dark:text-gray-200" href="#">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span class="mx-4 font-medium">Añadir negocio</span>
              </router-link>
              <div v-if="getMisNegocios.length == 0" @click="onClickAddNegocio" class="flex flex-col items-center p-6 px-4 mt-5 space-y-3 cursor-pointer text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                </span>
                <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Añade un negocio</h1>
                <p class="text-gray-500 dark:text-gray-300">
                  Promociona, vende y gestiona entradas online. Añade un negocio para empezar
                </p>
                <span class="flex items-center -mx-1 text-sm text-blue-500 transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span class="mx-1">Añadir negocio</span>
                    <svg class="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </span>
              </div>
              <!-- <hr class="my-6 border-gray-200 dark:border-gray-600" /> -->             
          </nav>
        </div>
      </div>
    <!-- UNA VEZ SELECCIONADO, MOSTRAR INFO LOCAL -->
    <!-- <pre>
      {{router}}
    </pre> -->
      <!-- <div class="flex flex-col w-80 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
          <h2 class="text-3xl whitespace-nowrap text-ellipsis overflow-hidden font-semibold text-gray-800 dark:text-white">Lemon Air Carpas</h2>
          <div class="flex flex-col justify-between flex-1 mt-6">
              <nav>
                  <a class="flex items-center px-4 py-2 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200" href="#">
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                      <span class="mx-4 font-medium">Información general</span>
                  </a>
                  <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                      <span class="mx-4 font-medium">Eventos</span>
                  </a>
                  <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                      <span class="mx-4 font-medium">Trabajadores</span>
                  </a>
                  <hr class="my-6 border-gray-200 dark:border-gray-600" />
              </nav>
              <div class="flex items-center px-4 -mx-2">
                  <img class="object-cover mx-2 rounded-full h-9 w-9" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar"/>
                  <h4 class="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">John Doe</h4>
              </div>
          </div>
      </div> -->
    </template>
</template>