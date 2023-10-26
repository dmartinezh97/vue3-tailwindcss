<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from 'vue';
import SubirDocumentos from "../../components/SubirDocumentos.vue";
import { useToastStore } from '@/stores/modulos/toast';
import axios from 'axios'
import LoadingHamster from '@/components/ui/loaders/LoadingHamster.vue';

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
  // questionLoading.value = true

}

const lanzarPregunta = () => {
  if(!esLaPrimeraPregunta.value){
    conversacion.push({ tipo: 'humano', text: question.value })
  }
  conversacion.push({ tipo: 'asistente', text: '' })
  let questionToSend = question.value
  question.value = ''

  scrollChatBottom()

  axios.post('/docs/ask', { collection_name: nombreColeccion.value, question: questionToSend })
      .then((res) => {
        const { text } = res.data
        conversacion[conversacion.length-1].text = text

        scrollChatBottom()
      })
      .catch((err: Error) => {
          // toastStore.error('Algo ha ido mal.. :/')
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
      <p class="mb-12 text-base text-gray-500 duration-1200 ease-in-out animate-in fade-in slide-in-from-bottom-4 max-w-sm text-center">
        Nuestra IA analiza y comprende tus consultas para ofrecerte respuestas rápidas y relevantes.
      </p>
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