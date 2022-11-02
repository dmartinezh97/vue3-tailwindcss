<script setup lang="ts">
import { PageEnum } from '@/enums/pageEnum';
import { router } from '@/router';
import { Menu, MenuButton, MenuItems, MenuItem, Popover, PopoverButton, PopoverPanel, PopoverOverlay, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { computed, ref, reactive, onBeforeMount } from 'vue';
import { useUserStore } from '../stores/modulos/user';
import BasicButton from './Forms/BasicButton.vue';
import SidebarEmpresa from './SidebarEmpresa.vue';
import IconTrash from './icons/IconTrash.vue';
import IconLogout from './icons/IconLogout.vue';
import DialogRegistro from './DialogRegistro.vue';
import DialogLogin from './DialogLogin.vue';
import { listadoMenuNegocios } from '@/data/menu';
import { useNegocioStore } from '@/stores/modulos/negocio';
import Select from '@/components/Forms/Select.vue';

const userStore = useUserStore();
const negocioStore = useNegocioStore()

onBeforeMount(() => {
  negocioStore.misNegocios()
})

const onClickBtnInicio = () => {
  router.push({
    name: PageEnum.INICIO
  });
};

const onClickCerrarSesion = () => {
  userStore.resetState();
};

const getMisNegocios = computed(() => {
  return negocioStore.negocios
})

</script>

<template>
  <div class="w-64">
    <div class="w-64 py-2 px-3 h-full bg-white border-r-2 border-gray-100">
      <div @click="onClickBtnInicio" class="flex justify-center items-center cursor-pointer">
        <img src="@/assets/logo.svg" alt="Logo App" class="w-16 h-16" />
      </div>
      <div class="mt-4">
        <Select label="" :items="['asd', 'aaaa']"></Select>
        <button type="button" class="flex items-center w-full p-2 text-base font-normal border border-gray-300 text-gray-600 rounded-md hover:bg-gray-100" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
          <span class="material-icons" sidebar-toggle-item="">add</span>
          <span class="flex-1 ml-3 text-left whitespace-nowrap">Añadir negocio</span>
          <svg v-if="getMisNegocios.length > 0" sidebar-toggle-item="" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <ul id="dropdown-example" class="hidden py-2 space-y-2">
              <li>
                  <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a>
              </li>
              <li>
                  <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
              </li>
              <li>
                  <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
              </li>
        </ul>
      </div>
      <ul class="overflow-y-auto space-y-2 mt-4 pt-4 border-t border-gray-200">
        <li v-for="item in listadoMenuNegocios">
          <router-link :to="{ name: item.route }" active-class="bg-gray-200 hover:bg-gray-200" class="flex items-center p-2 text-base font-normal text-gray-600 rounded-lg hover:bg-gray-100">
            <span class="material-icons">{{item.icon}}</span>
            <span class="flex-1 ml-3 whitespace-nowrap">{{item.label}}</span>
            <!-- <span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> -->
            <!-- <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span> -->
          </router-link>
          <!-- <template v-else>
            <button type="button" class="flex items-center w-full p-2 text-base font-normal text-gray-600 rounded-lg hover:bg-gray-100" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
              <span class="material-icons" sidebar-toggle-item="">{{item.icon}}</span>
              <span class="flex-1 ml-3 text-left whitespace-nowrap">{{item.label}}</span>
              <svg sidebar-toggle-item="" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </template> -->
        </li>
        <!-- <template >
      <router-link class="flex items-center px-4 py-2" active-class="bg-gray-200" >
        <span class="mx-4 font-medium">{{item.label}}</span>
      </router-link>
    </template> -->
        <!-- <li>
      <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
        <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
          fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
        </svg>
        <span class="ml-3">Dashboard</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        <svg aria-hidden="true"
          class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
          </path>
        </svg>
        <span class="flex-1 ml-3 whitespace-nowrap">Kanban</span>
        <span
          class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
      </a>
    </li>
    <li>
      <a href="#"
        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
        <svg aria-hidden="true"
          class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z">
          </path>
          <path
            d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z">
          </path>
        </svg>
        <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
        <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
      </a>
    </li> -->
      </ul>
    </div>
  </div>
</template>