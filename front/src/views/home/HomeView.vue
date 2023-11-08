<script setup lang="ts">
import { nextTick, onMounted, provide, reactive, ref } from 'vue';
import SubirDocumentos from "../../components/SubirDocumentos.vue";
import { useToastStore } from '@/stores/modulos/toast';
import axios from 'axios'
import LoadingHamster from '@/components/ui/loaders/LoadingHamster.vue';
import Select from '@/components/ui/Select.vue';
import { Menu, MenuButton, MenuItem, MenuItems, Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'

const toastStore = useToastStore();

// Definición de los tipos
type Humano = {
  tipo: 'humano'
  text: string
}

type Asistente = {
  tipo: 'asistente'
  text: string
}

type ConversacionItem = Humano | Asistente

const showDialogSubirDocumentos = ref(false)
const modoChat = ref(false)
const esLaPrimeraPregunta = ref(true)
const ventanaChat = ref(null)
const currentQuestion = ref("");
const question = ref("")
const questionLoading = ref(false)
const nombreColeccion = ref('bold-workplanner')
let indexAskRandom = ref(0)
let isDeleting = ref(false);
const questions = reactive([
  '¿Qué hace la opción Modificar % de jornada?',
  '¿Qué es BOLD Quir?',
  '¿Qué se necesita para poder utilizar la app?',
  '¿La aplicación de windows requiere instalación?',
])

const conversacionInicial = reactive([
  'Tss, ¿tienes algo que preguntar? ¡Dale!',
  'Oye, ¿qué quieres saber? Pregunta.',
  'Tss, ¿no tienes curiosidad? Pregúntame lo que quieras.',
  '¡Vamos! Házmela difícil con una buena pregunta.'
])

const temperatura = ref(1)
const modelName = ref('gpt-3.5-turbo')

const modelos = reactive([
    'gpt-4',
    'gpt-4-1106-preview',
    'gpt-3.5-turbo',
    'gpt-3.5-turbo-1106',
    'text-davinci-002',
    'text-davinci-003',
    'babbage-002',
])

const temperaturas = reactive([
    1,
    0.9,
    0.8,
    0.7,
    0.6,
    0.5,
    0.4,
    0.3,
    0.2,
    0.1,
    0
])

const conversacion = reactive<ConversacionItem[]>([
  { tipo: 'asistente', text: '' }
])

const updateConversacionInicial = () => {
  let newIndex  = Math.floor(Math.random() * conversacionInicial.length);
  conversacion[0].text = conversacionInicial[newIndex]
};

const updateQuestion = () => {
  // Si estamos eliminando, quitamos un carácter
  if (isDeleting.value) {
    currentQuestion.value = currentQuestion.value.slice(0, -1);
  } else {
    currentQuestion.value += questions[indexAskRandom.value].charAt(currentQuestion.value.length);
  }

  // Lógica para cambiar entre escribir y eliminar
  if (!isDeleting.value && currentQuestion.value === questions[indexAskRandom.value]) {
    setTimeout(() => {
      isDeleting.value = true;
    }, 1000); // Esperamos un segundo antes de empezar a borrar
  } else if (isDeleting.value && currentQuestion.value === "") {
    isDeleting.value = false;
    selectNewIndex();
  }

  setTimeout(updateQuestion, isDeleting.value ? 100 : 150); // Controlamos la velocidad de escribir y borrar
};

const selectNewIndex = () => {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * questions.length);
  } while (newIndex === indexAskRandom.value);

  indexAskRandom.value = newIndex;
};

const scrollChatBottom = () => {
  nextTick(() => {
    if(ventanaChat && ventanaChat.value){
      (ventanaChat.value as HTMLElement).scrollTop = (ventanaChat.value as HTMLElement).scrollHeight
    }
  })
}

const onClickBtnSearch = () => {
  if(question.value){
    modoChat.value = true
    if(esLaPrimeraPregunta.value){
      conversacion.push({ tipo: 'humano', text: question.value })
      setTimeout(() => {
        lanzarPregunta()
        esLaPrimeraPregunta.value = false
      }, 1200);
    }else{
      lanzarPregunta()
    }
  }
}

const lanzarPregunta = () => {
  if(!esLaPrimeraPregunta.value){
    conversacion.push({ tipo: 'humano', text: question.value })
  }
  conversacion.push({ tipo: 'asistente', text: '' })
  let questionToSend = question.value
  question.value = ''

  scrollChatBottom()

  axios.post('/docs/ask', { collection_name: nombreColeccion.value, question: questionToSend, temperatura: temperatura.value, modelName: modelName.value })
      .then((res) => {
        const { text } = res.data
        conversacion[conversacion.length-1].text = text

        scrollChatBottom()
      })
      .catch((err: Error) => {
        conversacion[conversacion.length-1].text = err.message
          // toastStore.error(err)
      })
      .finally(() => {
        questionLoading.value = false
      })
}

const onClickBtnFiles = () => {
  showDialogSubirDocumentos.value = !showDialogSubirDocumentos.value
}

onMounted(() => {
  updateConversacionInicial()
  updateQuestion()
})

</script>

<template>
  <div id="inicio">
    <!-- :class="[active ? 'bg-gray-200' : 'text-gray-900', 'group flex items-center w-full px-4 py-2 text-sm']"> -->
    <div :class="[modoChat ? 'py-[5vh]': 'py-[15vh] sm:py-[20vh]', 'flex flex-col items-center justify-center transition-all duration-1000']">
      <h1
        class="mb-3 text-4xl font-medium text-black duration-1000 ease-in-out animate-in fade-in slide-in-from-bottom-3">
        WorkPlanAssist IA</h1>
      <p class="mb-3 text-base text-gray-500 duration-1200 ease-in-out animate-in fade-in slide-in-from-bottom-4 max-w-sm text-center">
        Nuestra IA analiza y comprende tus consultas para ofrecerte respuestas rápidas y relevantes.
      </p>
      <div class="grid grid-cols-2 gap-x-2 max-w-md w-full mb-12">
        <Listbox v-model="modelName" class="z-20">
            <div class="relative w-full">
                <ListboxButton
                    class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <span class="block truncate">{{ modelName }}</span>
                    <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    </span>
                </ListboxButton>

                <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                    leave-to-class="opacity-0">
                    <ListboxOptions
                        class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        <ListboxOption v-slot="{ active, selected }" v-for="modelo in modelos" :key="modelo" :value="modelo"
                            as="template">
                            <li :class="[
                                active ? 'bg-blue-100 text-blue-900' : 'text-gray-900',
                                'relative cursor-default select-none py-2 pl-10 pr-4',
                            ]">
                                <span :class="[
                                    selected ? 'font-medium' : 'font-normal',
                                    'block truncate',
                                ]">{{ modelo }}</span>
                                <span v-if="selected"
                                    class="absolute inset-y-0 left-0 flex items-center text-blue-600">
                                    <span class="material-icons text-lg text-gray-400 p-3 leading-none">check</span>
                                    <!-- <CheckIcon class="h-5 w-5" aria-hidden="true" /> -->
                                </span>
                            </li>
                        </ListboxOption>
                    </ListboxOptions>
                </transition>
            </div>
        </Listbox>
        <Listbox v-model="temperatura" class="z-20">
            <div class="relative w-full">
                <ListboxButton
                    class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                      <span class="block truncate">{{ temperatura }}</span>
                      <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    </span>
                </ListboxButton>

                <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                    leave-to-class="opacity-0">
                    <ListboxOptions
                        class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        <ListboxOption v-slot="{ active, selected }" v-for="temp in temperaturas" :key="temp" :value="temp"
                            as="template">
                            <li :class="[
                                active ? 'bg-blue-100 text-blue-900' : 'text-gray-900',
                                'relative cursor-default select-none py-2 pl-10 pr-4',
                            ]">
                                <span :class="[
                                    selected ? 'font-medium' : 'font-normal',
                                    'block truncate',
                                ]">{{ temp }}</span>
                                <span v-if="selected"
                                    class="absolute inset-y-0 left-0 flex items-center text-blue-600">
                                    <span class="material-icons text-lg text-gray-400 p-3 leading-none">check</span>
                                </span>
                            </li>
                        </ListboxOption>
                    </ListboxOptions>
                </transition>
            </div>
        </Listbox>
    </div>
      <div :class="[modoChat ? 'max-w-2xl': 'max-w-lg', 'w-full space-y-4 ease-in-out animate-in fade-in slide-in-from-bottom-4 transition-all duration-1000']">
        <!-- Chat -->
        <div ref="ventanaChat" class="flex flex-col text-gray-800 max-h-96 overflow-y-auto">
          <div class="mx-auto w-full space-y-4">
            <template v-for="chat in conversacion">
              <!-- Humano -->
              <div v-if="chat.tipo == 'humano'" class="flex justify-end">
                <div class="flex w-11/12 flex-row-reverse">
                  <div class="relative max-w-xl rounded-xl rounded-tr-none bg-blue-600 px-4 py-2">
                    <span class="text-sm font-medium text-white">
                      {{ chat.text }}
                    </span>
                  </div>
                </div>
              </div>
              <!-- Asistente -->
              <div v-else class="flex justify-start">
                <div class="flex w-11/12">
                  <div class="relative max-w-xl rounded-xl rounded-tl-none bg-gray-300 px-4 py-2">
                    <span v-if="chat.text != ''" class="text-sm font-medium text-heading">
                      {{ chat.text }}
                    </span>
                    <LoadingHamster v-else></LoadingHamster>
                    <!-- <span v-else class="text-sm font-medium text-heading">
                      {{ chat }} - Cargando...
                    </span> -->
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
        <!-- Fin chat -->
        <div class="flex h-fit w-full flex-row items-center rounded-xl bg-black px-1 shadow-lg">
          <input v-model="question" :disabled="questionLoading" type="search" @keyup.enter="onClickBtnSearch" :placeholder="currentQuestion"
            class="h-10 w-full resize-none bg-transparent px-2 py-2.5 font-mono text-sm text-white outline-none ring-0 transition-all duration-300 placeholder:text-gray-400"
            name="prompt">
          <!-- BUTTON -->
          <button type="button" @click="onClickBtnSearch" class="flex aspect-square h-8 w-8 items-center justify-center rounded-lg text-white outline-0 ring-0 hover:bg-white/25 focus:bg-white/25">
            <svg class="-ml-px transform hover:scale-125 active:scale-125" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 10 4 15 9 20"></polyline>
              <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
            </svg></button>
            <button type="button" @click="onClickBtnFiles" class="flex aspect-square h-8 w-8 items-center justify-center rounded-lg text-white outline-0 ring-0 hover:bg-white/25 focus:bg-white/25">
              <svg class="-ml-px transform hover:scale-125 active:scale-125" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M15 3v4a1 1 0 0 0 1 1h4" />
                <path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z" />
                <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
              </svg>
            </button>
          <!-- BUTTON -->
        </div>
      </div>
    </div>
    <transition name="fade">
      <SubirDocumentos :open="showDialogSubirDocumentos" @close="showDialogSubirDocumentos = false"></SubirDocumentos>
    </transition>
  </div>
</template>

<style>
@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

input[type="search"]::placeholder {
  animation: blink 1s infinite;
}
</style>