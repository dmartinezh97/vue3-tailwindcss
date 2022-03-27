<script setup lang="ts">
import { PageEnum } from '@/enums/pageEnum';
import { router } from '@/router';
import { computed } from 'vue';
import { useUserStore } from '../stores/modulos/user';
import BasicButton from './Forms/BasicButton.vue';


const userStore = useUserStore();

const onClickBtnInicio = () => {
  router.push(PageEnum.INICIO);
};

const onClickBtnLogin = () => {
  router.push(PageEnum.LOGIN);
};

const onClickVerNegocio = () => {
  router.push({
    name: "VerNegocio",
    params: {
      id: 1
    }
  })
};

</script>

<template>
  <header class="sticky top-0 z-50 bg-white shadow-md">
    <div class="flex items-center justify-between h-16 px-6 mx-auto">
      <div class="flex flex-1 w-0 lg:hidden">
        <button class="p-2 text-gray-600 bg-gray-100 rounded-full" type="button">
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>

      <div @click="onClickBtnInicio" class="flex items-center space-x-4 cursor-pointer">
        <img src="@/assets/logo.svg" alt="Logo App" class="w-16 h-16" />
      </div>

      <div class="flex justify-end flex-1 w-0 lg:hidden">
        <button class="p-2 text-gray-500 bg-gray-100 rounded-full" type="button">
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              fill-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <nav
        class="items-center justify-center hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0"
      >
        <a class="text-gray-900" href>About</a>
        <a class="text-gray-900" href>Blog</a>
        <a class="text-gray-900" href>Projects</a>
        <a class="text-gray-900" href>Contact</a>
      </nav>

      <div class="items-center hidden space-x-2 lg:flex">
        <template v-if="userStore.getIsLogged">
          <button
            class="hidden mx-4 text-gray-600 transition-colors duration-200 transform md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
            aria-label="show notifications"
          >
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            class="flex items-center focus:outline-none"
            aria-label="toggle profile dropdown"
          >
            <div class="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                class="object-cover w-full h-full"
                alt="avatar"
              />
            </div>
  
            <h3
              class="mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:hidden"
            >Khatab wedaa</h3>
          </button>
        </template>
        <template v-else>
          <BasicButton text="Iniciar sesión" @click="onClickBtnLogin" outlined></BasicButton>
          <BasicButton text="Crear cuenta"></BasicButton>
        </template>
        <!-- <a class="px-5 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg" href>Iniciar sesión</a> -->
        <!-- <a class="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg" href>Sign up</a> -->
      </div>
    </div>

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