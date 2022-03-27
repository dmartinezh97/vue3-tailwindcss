<script setup lang="ts">
import { PageEnum } from '@/enums/pageEnum';
import { router } from '@/router';
import { computed } from 'vue';
import { useUserStore } from '../stores/modulos/user';


const userStore = useUserStore();

const onClickBtnAddNegocio = () => {
  router.push(PageEnum.ADD_NEGOCIO);
  //console.log("fuera", e.target);
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
  <div v-if="userStore.getIsLogged" class="h-screen w-24 p-4 pr-2">
    <div class="px-2 pt-0 mb-8">
      <img src="@/assets/logo.svg" alt="Logo App" />
    </div>
    <!-- <div class="px-3 py-4">
      <div class="border-b-2 rounded-xl border-white/30"></div>
    </div>-->
    <div class="borderr rounded-lg">
      <div class="flex justify-center p-2 fill-white/50 hover:fill-white/70 hover:cursor-pointer">
        <div class="bg-white/10 rounded-full p-2">
          <svg
            version="1.1"
            id="Icons"
            class="w-full p-1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 32 32"
            xml:space="preserve"
          >
            <g>
              <path
                d="M14,3H4C3.4,3,3,3.4,3,4v10c0,0.6,0.4,1,1,1h10c0.6,0,1-0.4,1-1V4C15,3.4,14.6,3,14,3z"
              />
              <path
                d="M14,17H4c-0.6,0-1,0.4-1,1v10c0,0.6,0.4,1,1,1h10c0.6,0,1-0.4,1-1V18C15,17.4,14.6,17,14,17z"
              />
              <path
                d="M28,3H18c-0.6,0-1,0.4-1,1v10c0,0.6,0.4,1,1,1h10c0.6,0,1-0.4,1-1V4C29,3.4,28.6,3,28,3z"
              />
              <path
                d="M28,17H18c-0.6,0-1,0.4-1,1v10c0,0.6,0.4,1,1,1h10c0.6,0,1-0.4,1-1V18C29,17.4,28.6,17,28,17z"
              />
            </g>
          </svg>
        </div>
      </div>
      <div
        @click="onClickVerNegocio"
        class="flex justify-center p-2 fill-white/50 hover:fill-white/70 hover:cursor-pointer"
      >
        <div>
          <img class="rounded-full" src="@/assets/temp/negocios/borabora.jpg" />
        </div>
      </div>
      <div
        @click="onClickBtnAddNegocio"
        class="flex justify-center p-2 fill-white/50 hover:fill-white/70 hover:cursor-pointer"
      >
        <div class>
          <svg viewBox="-18 -18 572.00902 572" xmlns="http://www.w3.org/2000/svg" class="w-full">
            <path
              d="m402.605469 255.601562h-119.355469v-119.355468c0-6.890625-5.582031-12.472656-12.472656-12.472656-6.886719 0-12.472656 5.582031-12.472656 12.472656v119.355468h-125.46875c-6.890626 0-12.472657 5.585938-12.472657 12.472657 0 6.890625 5.582031 12.472656 12.472657 12.472656h125.59375v125.59375c0 6.886719 5.585937 12.472656 12.46875 12.472656 6.890624 0 12.472656-5.585937 12.472656-12.472656v-125.59375h119.363281c6.882813-.035156 12.441406-5.648437 12.40625-12.535156-.03125-6.882813-5.644531-12.441407-12.535156-12.410157zm0 0"
            />
            <path
              d="m268.15625-.0742188c-108.457031-.0195312-206.242188 65.3085938-247.746094 165.5117188-41.496094 100.207031-18.542968 215.542969 58.171875 292.210938 104.703125 104.703124 274.453125 104.703124 379.152344 0 104.699219-104.695313 104.699219-274.445313 0-379.148438-50.167969-50.453125-118.429687-78.746094-189.578125-78.5742188zm0 511.3554688c-134.074219 0-243.203125-109.132812-243.203125-243.207031s109.128906-243.203125 243.203125-243.203125 243.207031 109.128906 243.207031 243.203125-109.132812 243.207031-243.207031 243.207031zm0 0"
            />
          </svg>
        </div>
      </div>
    </div>
    <!-- <div class="bg-gris h-full overflow-y-auto rounded-2xl">
      <div class="px-6 py-3 border-b-2 border-white/10">
        <h2 class="text-2xl font-medium text-white">Explorer</h2>
      </div>
      
    </div>-->
  </div>
  <nav v-else class="bg-white dark:bg-negro">
    <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <div>
          <a
            class="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
            href="#"
          >Brand</a>
        </div>

        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button
            type="button"
            class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div class="items-center md:flex">
        <div class="flex flex-col md:flex-row md:mx-6">
          <a
            class="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            href="#"
          >Home</a>
          <a
            class="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            href="#"
          >Shop</a>
          <a
            class="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            href="#"
          >Contact</a>
          <a
            class="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            href="#"
          >About</a>
        </div>

        <div class="flex justify-center md:block">
          <a
            class="relative text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
            href="#"
          >
            <svg
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>