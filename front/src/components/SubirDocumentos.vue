<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

const props = defineProps({
    open: {
        type: Boolean,
        required: true
    }
})

const numFicheros = ref(1)
</script>

<template>
    <div>
        <TransitionRoot as="template" :show="props.open">
            <Dialog as="div" class="relative z-30" @close="$emit('close')">
                <!-- <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild> -->

                <div class="fixed inset-0 overflow-hidden">
                    <div class="absolute inset-0 overflow-hidden">
                        <div class="pointer-events-none fixed inset-y-0 right-0 mt-16 flex max-w-full pl-10">
                            <TransitionChild as="template"
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enter-from="translate-x-full" enter-to="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leave-from="translate-x-0" leave-to="translate-x-full">
                                <DialogPanel class="pointer-events-auto relative w-screen max-w-md">
                                    <!-- <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                                <div class="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                    <button @click="$emit('close')" class="w-8 h-8 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-none">
                                        <span class="material-icons text-lg text-gray-500">close</span>
                                    </button>
                                    <button type="button" class="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" @close="$emit('close')">
                                        <span class="absolute -inset-2.5" />
                                        <span class="sr-only">Close panel</span>
                                    </button>
                                </div>
                            </TransitionChild> -->
                                    <div
                                        class="flex h-full rounded-tl-3xl flex-col bg-white py-4 shadow-xl">
                                        <div class="flex items-center justify-between px-4 sm:px-6">
                                            <DialogTitle class="text-base font-semibold leading-6 text-gray-900">Documentos
                                            </DialogTitle>
                                            <button @click="$emit('close')"
                                                class="w-8 h-8 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-none">
                                                <span class="material-icons text-lg text-gray-500">close</span>
                                            </button>
                                        </div>
                                        <hr class="my-2">
                                        <div class="relative px-2 pb-4 h-full-nav overflow-y-scroll">
                                            <!-- mt-6 flex-1 px-4 sm:px-6 -->
                                            <!-- Your content -->
                                            <li v-for="x in numFicheros"
                                                class="flex items-center justify-between py-2 px-4 text-sm leading-6  hover:bg-gray-600/10 py-2 rounded-lg">
                                                <div class="flex w-0 flex-1 items-center">
                                                    <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20"
                                                        fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                            d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                    <div class="ml-4 flex min-w-0 flex-1 gap-2">
                                                        <span
                                                            class="truncate font-medium">resume_mucho_mas_largo_back_end_developer.pdf</span>
                                                        <span class="flex-shrink-0 text-gray-400">2.4mb</span>
                                                    </div>
                                                </div>
                                                <div class="ml-4 flex-shrink-0">
                                                    <button
                                                        class="w-8 h-8 hover:bg-gray-300 rounded-full focus:outline-none focus:ring-none">
                                                        <!-- <span class="material-icons text-lg text-gray-500">close</span> -->
                                                        <span class="material-icons text-xl text-gray-600">more_horiz</span>
                                                    </button>
                                                    <!-- <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a> -->
                                                </div>
                                            </li>
                                            <!-- Botón para subir ficheros -->
                                            <div class="sticky bg-white bottom-0" @click="numFicheros++">
                                                <div
                                                    class="flex items-center justify-center bg-gray-600/10 py-2 rounded-lg cursor-pointer mt-2">
                                                    <span class="material-icons text-xl text-gray-600">file_upload</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>