<script setup lang="ts">
import { PageEnum } from '@/enums/pageEnum';
import { router } from '@/router';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { computed, ref } from 'vue';
import { useUserStore } from '../stores/modulos/user';
import BasicButton from './Forms/BasicButton.vue';
import SidebarNegocio from './SidebarNegocio.vue';
import IconTrash from './icons/IconTrash.vue';
import IconLogout from './icons/IconLogout.vue';
import DialogRegistro from './DialogRegistro.vue';

const showModalRegistro = ref(false);
const userStore = useUserStore();

const onClickBtnInicio = () => {
  router.push({
    name: PageEnum.INICIO
  });
};

const onClickBtnRegistro = () => {
  showModalRegistro.value = true;
};

const onClickBtnCloseRegistro = () => {
  showModalRegistro.value = false;
};

const onClickCerrarSesion = () => {
  userStore.resetState();
};

</script>

<template>
  <header class="sticky top-0 z-30 bg-white shadow-md">
    <div class="container h-16 flex items-center justify-between  px-6 mx-auto">
      <div class="flex flex-1 w-0 lg:hidden">
        <button class="p-2 text-gray-600 bg-gray-100 rounded-full" type="button">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="2" />
          </svg>
        </button>
      </div>
      <div @click="onClickBtnInicio" class="flex items-center lg:flex-1 space-x-4 cursor-pointer">
        <img src="@/assets/logo.svg" alt="Logo App" class="w-16 h-16" />
      </div>
      <div class="flex justify-end flex-1 w-0 lg:hidden">
        <button class="p-2 text-gray-500 bg-gray-100 rounded-full" type="button">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              fill-rule="evenodd" />
          </svg>
        </button>
      </div>
      <nav class="items-center justify-center hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0">
        <router-link :to="{ name: PageEnum.BASE_NEGOCIO }">Negocios</router-link>
        <!-- <a class="text-gray-900" href>About</a>
        <a class="text-gray-900" href>Blog</a>
        <a class="text-gray-900" href>Projects</a>
        <a class="text-gray-900" href>Contact</a>-->
      </nav>

      <div class="lg:flex lg:flex-1 justify-end items-center hidden space-x-4">
        <div class="text-sm font-semibold hover:bg-gray-200/60 p-3 rounded-full leading-none">Añade tu negocio</div>
        <Menu as="div" class="relative inline-block text-left">
          <MenuButton class="flex items-center border border-gray-300 pl-3 p-1 rounded-full">
            <span class="material-icons text-lg text-gray-400">menu</span>
            <span class="material-icons text-3xl leading-none text-gray-400 ml-3 rounded-full">account_circle</span>
          </MenuButton>
          <transition enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <MenuItems
              class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div class="py-2">
                <MenuItem v-slot="{ active }">
                <button @click="onClickBtnRegistro"
                  :class="[active ? 'bg-gray-200' : 'text-gray-900', 'group flex items-center w-full px-4 py-2 text-sm']">
                  <!-- <EditIcon
                      :active="active"
                      class="w-5 h-5 mr-2 text-violet-400"
                      aria-hidden="true"
                    /> -->
                  Regístrate
                </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                <button :class="[active ? 'bg-gray-200' : 'text-gray-900', 'group flex items-center w-full px-4 py-2 text-sm']">
                  Iniciar sesión
                </button>
                </MenuItem>
              </div>
              <div class="py-2">
                <MenuItem v-slot="{ active }">
                <button :class="[
                  active ? 'bg-gray-200' : 'text-gray-900',
                  'group flex items-center w-full px-4 py-2 text-sm',
                ]">
                  Añade tu negocio
                </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                <button :class="[
                  active ? 'bg-gray-200' : 'text-gray-900',
                  'group flex items-center w-full px-4 py-2 text-sm',
                ]">
                  Ayuda
                </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
    <DialogRegistro v-model="showModalRegistro"></DialogRegistro>
    <SidebarNegocio></SidebarNegocio>
    <!-- <div class="border-t border-gray-100 lg:hidden">
      <nav class="flex items-center justify-center p-4 overflow-x-auto text-sm font-medium">
        <a class="flex-shrink-0 pl-4 text-gray-900" href>About</a>
        <a class="flex-shrink-0 pl-4 text-gray-900" href>Blog</a>
        <a class="flex-shrink-0 pl-4 text-gray-900" href>Projects</a>
        <a class="flex-shrink-0 pl-4 text-gray-900" href>Contact</a>
      </nav>
    </div>-->
  </header>
</template>