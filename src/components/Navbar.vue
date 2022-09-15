<script setup lang="ts">
import { PageEnum } from '@/enums/pageEnum';
import { router } from '@/router';
import { Menu, MenuButton, MenuItems, MenuItem, Popover, PopoverButton, PopoverPanel, PopoverOverlay, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { computed, ref, reactive } from 'vue';
import { useUserStore } from '../stores/modulos/user';
import BasicButton from './Forms/BasicButton.vue';
import SidebarEmpresa from './SidebarEmpresa.vue';
import IconTrash from './icons/IconTrash.vue';
import IconLogout from './icons/IconLogout.vue';
import DialogRegistro from './DialogRegistro.vue';
import DialogLogin from './DialogLogin.vue';

const showModalRegistro = ref(false);
const showModalLogin = ref(false);


const menuPrincipal = reactive([
  {
    label: 'Negocios',
    icon: 'store',
    route: PageEnum.HOME_NEGOCIOS,
  },
])

const userStore = useUserStore();

const onClickBtnInicio = () => {
  router.push({
    name: PageEnum.INICIO
  });
};

const onClickBtnLogin = () => {
  showModalRegistro.value = false;
  showModalLogin.value = true;
};

const onClickBtnRegistro = () => {
  showModalLogin.value = false;
  showModalRegistro.value = true;
};

const onClickCerrarSesion = () => {
  userStore.resetState();
};

</script>

<template>
  <header class="sticky top-0 z-30 bg-white shadow-md">
    <div class="container h-16 flex items-center justify-between px-6 mx-auto">
      <!-- <div class="flex flex-1 w-0 lg:hidden">
        <span class="material-icons text-gray-600 bg-gray-100 rounded-full p-2">menu</span>
      </div> -->
      <Popover class="flex flex-1 w-0 lg:hidden">
        <PopoverButton as="div">
          <span class="material-icons text-gray-600 bg-gray-100 rounded-full p-2">menu</span>
        </PopoverButton>
        <PopoverOverlay class="bg-black opacity-30 z-40 fixed inset-0" />

        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="translate-y-1 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-1 opacity-0"
        >
          <PopoverPanel class="fixed top-0 left-0 z-40 bg-white w-64 h-full flex flex-col justify-between">
            <div class="flex flex-col">
              <div @click="onClickBtnInicio" class="flex justify-center items-center">
                <img src="@/assets/logo.svg" alt="Logo App" class="w-20 h-20" />
              </div>
              <div class="flex flex-col justify-between divide-y divide-gray-200">
              <nav class="mb-2">
                <PopoverButton as="div" v-for="item in menuPrincipal">
                  <router-link class="flex items-center px-4 py-2" active-class="bg-gray-200" :to="{ name: item.route }">
                    <span class="mx-4 font-medium">{{item.label}}</span>
                  </router-link>
                </PopoverButton>

                  <!-- <a class="flex items-center px-4 py-2 text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-200" href="#">
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <span class="mx-4 font-medium">Dashboard</span>
                  </a>
                  <a class="flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <span class="mx-4 font-medium">Accounts</span>
                  </a>
                  <a class="flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                      <span class="mx-4 font-medium">Añade tu negocio</span>
                  </a>
                  <a class="flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                      <span class="mx-4 font-medium">Ayuda</span>
                  </a> -->
              </nav>
              <nav class="mb-2">
                <PopoverButton as="div">
                  <router-link active-class="bg-gray-200" :to="{ name: PageEnum.HOME_NEGOCIOS }" class="flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-200 transform">
                    <span class="material-icons">post_add</span>  
                    <span class="mx-4 font-medium">Añade tu negocio</span>
                  </router-link>
                </PopoverButton>
                <a class="flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-200 transform">
                  <span class="material-icons">help_outline</span>
                  <span class="mx-4 font-medium">Ayuda</span>
                </a>
              </nav>
            </div>
            </div>
            <div v-if="userStore.getIsLogged" class="p-2">
              <PopoverButton as="div" v-for="item in menuPrincipal">
                <BasicButton text="Cerrar sesión" block @click="onClickCerrarSesion">
                  <template v-slot:icon>
                    <span class="material-icons mr-5">logout</span>
                  </template>
                </BasicButton>
              </PopoverButton>
            </div>
            <div v-else class="py-4">
              <div @click="onClickBtnRegistro" class="flex items-center px-4 py-2 mb-2 text-gray-600">
                <span class="material-icons">app_registration</span>
                <span class="mx-4 font-medium">Regístrate</span>
              </div>
              <div @click="onClickBtnLogin" class="flex items-center px-4 py-2 text-gray-600">
                <span class="material-icons">login</span>
                <span class="mx-4 font-medium">Iniciar sesión</span>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
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
        <router-link v-for="item in menuPrincipal" :to="{ name: item.route }">{{item.label}}</router-link>
        <!-- <a class="text-gray-900" href>About</a>
        <a class="text-gray-900" href>Blog</a>
        <a class="text-gray-900" href>Projects</a>
        <a class="text-gray-900" href>Contact</a>-->
      </nav>
      <div class="lg:flex lg:flex-1 justify-end items-center hidden space-x-4">
        <router-link class="text-sm font-semibold hover:bg-gray-200/60 p-3 rounded-full leading-none" :to="{ name: PageEnum.HOME_NEGOCIOS }">Modo empresa</router-link>
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
                <template v-if="userStore.getIsLogged">
                  <MenuItem v-slot="{ active }">
                  <button @click="onClickCerrarSesion"
                    :class="[active ? 'bg-gray-200' : 'text-gray-900', 'group flex items-center w-full px-4 py-2 text-sm']">
                    <span class="material-icons text-lg mr-4 text-gray-600">logout</span>
                    Cerrar sesión
                  </button>
                  </MenuItem>
                </template>
                <template v-else>
                  <MenuItem v-slot="{ active }">
                  <button @click="onClickBtnRegistro"
                    :class="[active ? 'bg-gray-200' : 'text-gray-900', 'group flex items-center w-full px-4 py-2 text-sm']">
                    <span class="material-icons text-lg mr-4 text-gray-600">app_registration</span>
                    Regístrate
                  </button>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                  <button @click="onClickBtnLogin"
                    :class="[active ? 'bg-gray-200' : 'text-gray-900', 'group flex items-center w-full px-4 py-2 text-sm']">
                    <span class="material-icons text-lg mr-4 text-gray-600">login</span>
                    Iniciar sesión
                  </button>
                  </MenuItem>
                </template>
              </div>
              <div class="py-2">
                <MenuItem v-slot="{ active }">
                <button
                  :class="[active ? 'bg-gray-200' : 'text-gray-900', 'group flex items-center w-full px-4 py-2 text-sm']">
                  <span class="material-icons text-lg mr-4 text-gray-600">post_add</span>
                  Añade tu negocio
                </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                <button
                  :class="[active ? 'bg-gray-200' : 'text-gray-900', 'group flex items-center w-full px-4 py-2 text-sm']">
                  <span class="material-icons text-lg mr-4 text-gray-600">help_outline</span>
                  Ayuda
                </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
    <DialogLogin v-model="showModalLogin" @registro="onClickBtnRegistro"></DialogLogin>
    <DialogRegistro v-model="showModalRegistro" @login="onClickBtnLogin"></DialogRegistro>
    <!-- <SidebarEmpresa></SidebarEmpresa> -->
    <!-- <div class="border-t border-gray-100 lg:hidden">
      <nav class="flex items-center justify-center p-4 overflow-x-auto text-sm font-medium">
        <a class="flex-shrink-0 pl-4 text-gray-900">About</a>
        <a class="flex-shrink-0 pl-4 text-gray-900">Blog</a>
        <a class="flex-shrink-0 pl-4 text-gray-900">Projects</a>
        <a class="flex-shrink-0 pl-4 text-gray-900">Contact</a>
      </nav>
    </div> -->
  </header>
</template>