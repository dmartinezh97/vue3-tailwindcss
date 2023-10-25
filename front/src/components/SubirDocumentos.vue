<script setup lang="ts">
import IconTrash from './layouts/icons/IconTrash.vue';


const onClickClose = () => {

}

</script>

<template>
    <div class="fixed h-full-nav top-16 right-2 bg-white shadow-xl rounded-xl w-96 overflow-hidden">
        <div class="flex items-center justify-between px-5 pt-4">
            <h1 class="text-base font-semibold select-none text-gray-500">Documentos</h1>
            <button @click="onClickClose" class="w-8 h-8 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-none">
                <span class="material-icons text-lg text-gray-500">close</span>
            </button>
        </div>
        <hr class="my-2">
        <div class="px-2 pb-4 h-full-nav overflow-y-scroll">
            <div class="flex items-center justify-between hover:bg-gray-600/10 py-2 rounded-lg">
                <div class="flex">
                    <span class="material-icons text-5xl text-gray-600">description</span>
                    <div class="flex flex-col justify-center">
                        <p class=" font-light text-gray-600 leading-none mb-1 w-60 truncate">Financial reports y un texto super super largo</p>
                        <p class="text-sm text-gray-400 leading-none">10MB</p>
                    </div>
                </div>
                <div>
                    <button @click="onClickClose" class="w-8 h-8 mr-4 hover:bg-gray-300 rounded-full focus:outline-none focus:ring-none">
                        <!-- <span class="material-icons text-lg text-gray-500">close</span> -->
                        <span class="material-icons text-xl text-gray-600">more_horiz</span>
                    </button>
                </div>
            </div>
            <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
              <div class="flex w-0 flex-1 items-center">
                <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                </svg>
                <div class="ml-4 flex min-w-0 flex-1 gap-2">
                  <span class="truncate font-medium">resume_back_end_developer.pdf</span>
                  <span class="flex-shrink-0 text-gray-400">2.4mb</span>
                </div>
              </div>
              <div class="ml-4 flex-shrink-0">
                <button @click="onClickClose" class="w-8 h-8 hover:bg-gray-300 rounded-full focus:outline-none focus:ring-none">
                        <!-- <span class="material-icons text-lg text-gray-500">close</span> -->
                        <span class="material-icons text-xl text-gray-600">more_horiz</span>
                    </button>
                <!-- <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a> -->
              </div>
            </li>
            <!-- Botón para subir ficheros -->
            <div class="flex items-center justify-center bg-gray-600/10 py-2 rounded-lg cursor-pointer mt-2">
                <!-- <div class="flex">
                    <span class="material-icons text-5xl text-gray-600">description</span>
                    <div class="flex flex-col justify-center">
                        <p class=" font-light text-gray-600 leading-none mb-1 w-60 truncate">Financial reports y un texto super super largo</p>
                        <p class="text-sm text-gray-400 leading-none">10MB</p>
                    </div>
                </div> -->
                <span class="material-icons text-xl text-gray-600">file_upload</span>
                <!-- <div>
                    <button @click="onClickClose" class="w-8 h-8 mr-4 hover:bg-gray-300 rounded-lg focus:outline-none focus:ring-none">
                    </button>
                </div> -->
            </div>
        </div>
    </div>
</template>