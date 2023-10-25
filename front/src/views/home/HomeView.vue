<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
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
const currentQuestion = ref("");
const question = ref("")
const questionLoading = ref(false)
const nombreColeccion = ref('bold-workplanner')
let indexAskRandom = ref(0)
let isDeleting = ref(false);
const questions = reactive([
  '¿Utilizas la aplicación?',
  '¿Cuántas veces al día?',
  '¿Recomendarías nuestra app?'
])

const conversacion = reactive<ConversacionItem[]>([])

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


const onClickBtnSearch = () => {
  modoChat.value = true
  questionLoading.value = true

  console.log('Hacer pregunta')
  conversacion.push({ tipo: 'humano', text: question.value })
  conversacion.push({ tipo: 'asistente', text: '' })
  let questionToSend = question.value
  question.value = ''

  // conversacion.push({ tipo: 'humano', text: 'Hola, WorkPlanAssist IA!' })
  // conversacion.push({ tipo: 'asistente', text: '¡Hola! ¿En qué puedo ayudarte?' })


  axios.post('/docs/ask', { collection_name: nombreColeccion.value, question: questionToSend })
      .then((res) => {
        // const { text } = res.data
        // conversacion[conversacion.length-1].text = text
        // conversacion.push({ tipo: 'asistente', text })

        // toastStore.success('Los documentos se han subido con éxito')

        // res.data.title = `Chat: ${res.data.title}`
        // res.data.icon = {
        //   icon: 'tabler-message',
        // }
        // res.data.to = { name: 'chats-id', params: { id: res.data.id } }
        // res.data.action = 'read'
        // res.data.subject = 'Auth'

        // chatStore.addChat(res.data)
        // router.push({ name: 'chats-id', params: { id: res.data.id } })
      })
      .catch((err: Error) => {
          // toastStore.error('Algo ha ido mal.. :/')
      })
      .finally(() => {
        questionLoading.value = false
          // loadingDocs.value = false
          // emit('close')
      })
}

const onClickBtnFiles = () => {
  showDialogSubirDocumentos.value = !showDialogSubirDocumentos.value
}


onMounted(() => {
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
      <div :class="[modoChat ? 'max-w-xl': 'max-w-md', 'w-full space-y-4 ease-in-out animate-in fade-in slide-in-from-bottom-4 transition-all duration-1000']">
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
        <div v-show="modoChat" class="flex flex-col text-gray-800">
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
          <!-- Component Start -->
	<!-- <div class="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
		<div class="flex flex-col flex-grow h-0 p-4 overflow-auto">
			<div class="flex w-full mt-2 space-x-3 max-w-xs">
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
				<div>
					<div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
						<p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
			</div>
			<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
			<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p class="text-sm">Lorem ipsum dolor sit amet.</p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
			<div class="flex w-full mt-2 space-x-3 max-w-xs">
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
				<div>
					<div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
						<p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
			</div>
			<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
			<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
			<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p class="text-sm">Lorem ipsum dolor sit amet.</p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
			<div class="flex w-full mt-2 space-x-3 max-w-xs">
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
				<div>
					<div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
						<p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
			</div>
			<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
				<div>
					<div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p class="text-sm">Lorem ipsum dolor sit.</p>
					</div>
					<span class="text-xs text-gray-500 leading-none">2 min ago</span>
				</div>
				<div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
			</div>
		</div>
	</div> -->
	<!-- Component End  -->

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