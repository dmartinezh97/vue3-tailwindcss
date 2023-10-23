<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import SubirDocumentos from "../../components/SubirDocumentos.vue";

const showDialogSubirDocumentos = ref(false)

const currentQuestion = ref("");
let indexAskRandom = ref(0)
let isDeleting = ref(false);
const questions = reactive([
  '¿Utilizas la aplicación?',
  '¿Cuántas veces al día?',
  '¿Recomendarías nuestra app?'
])

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
    <div class="flex flex-col items-center justify-center py-[15vh] sm:py-[20vh]">
      <h1
        class="mb-3 text-4xl font-medium text-black duration-1000 ease-in-out animate-in fade-in slide-in-from-bottom-3">
        WorkPlanAssist IA</h1>
      <p class="mb-12 text-base text-gray-500 duration-1200 ease-in-out animate-in fade-in slide-in-from-bottom-4 max-w-sm text-center">
        Nuestra IA analiza y comprende tus consultas para ofrecerte respuestas rápidas y relevantes.
      </p>
      <div class="w-full max-w-md space-y-4 duration-1200 ease-in-out animate-in fade-in slide-in-from-bottom-4">
        <div class="flex h-fit w-full flex-row items-center rounded-xl bg-black px-1 shadow-lg">
          <input type="search" :placeholder="currentQuestion"
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
        <div>
          <ul>
            <li>Pregunta 1</li>
            <li>Respuesta 1</li>
          </ul>
        </div>
      </div>
    </div>
    <transition name="fade">
      <SubirDocumentos v-show="showDialogSubirDocumentos"></SubirDocumentos>
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