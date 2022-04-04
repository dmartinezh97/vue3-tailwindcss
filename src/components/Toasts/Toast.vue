<script setup lang="ts">
import { isString } from '@vue/shared';
import IconEye from '../icons/IconEye.vue';
import IconEyeCerrado from '../icons/IconEyeCerrado.vue';
import { SizeEnum } from '../../enums/sizeEnum';
import { computed, onMounted, type PropType } from 'vue';
import { ToastTypeEnum } from '../../enums/toastEnum';
import IconSuccess from '../icons/IconSuccess.vue';
import IconWarning from '../icons/IconWarning.vue';
import IconError from '../icons/IconError.vue';
import { useToastStore } from '@/stores/modulos/toast';
import type { ToastProps } from './typing';

const toastStore = useToastStore();

const props = defineProps({
  msg: {
    type: String,
    required: true
  },
  type: {
    type: String as PropType<ToastTypeEnum>,
    default: ToastTypeEnum.INFO,
    required: false
  }
})

onMounted(() => {
  setTimeout(() => {
    deleteToast()
  }, 3500);
})

const deleteToast = () => {
  toastStore.clearToast(props.msg)
}

</script>

<template>
  <!-- <div
    :id="`toast-${props.type}`"
    class="flex items-center mb-4 w-full max-w-xs p-3 text-gray-500 bg-white rounded-lg shadow"
    role="alert"
  >
    <div
      class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg"
      :class="classTypeObject"
    >
      <IconSuccess
        v-if="props.type == ToastTypeEnum.SUCCESS || props.type == ToastTypeEnum.DEFAULT"
        class="w-5 h-5"
      ></IconSuccess>
      <IconWarning v-else-if="props.type == ToastTypeEnum.WARNING" class="w-5 h-5"></IconWarning>
      <IconError v-else-if="props.type == ToastTypeEnum.ERROR" class="w-5 h-5"></IconError>
    </div>
    <div class="ml-3 text-sm font-normal">{{ props.msg }}</div>
    <button
      @click="deleteToast"
      type="button"
      class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"
      data-collapse-toggle="toast-success"
      aria-label="Close"
    >
      <span class="sr-only">Close</span>
      <svg
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div> -->
  <div class="flex w-full min-w-[250px] max-w-sm mx-auto mb-4 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div v-if="props.type == ToastTypeEnum.SUCCESS" class="flex items-center justify-center w-12 bg-emerald-500">
          <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"/>
          </svg>
      </div>
      <div v-else-if="props.type == ToastTypeEnum.WARNING" class="flex items-center justify-center w-12 bg-yellow-400">
             <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"/>
            </svg>
        </div>
      <div v-else-if="props.type == ToastTypeEnum.ERROR" class="flex items-center justify-center w-12 bg-red-500">
          <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"/>
          </svg>
      </div>
      <div v-else class="flex items-center justify-center w-12 bg-blue-500">
          <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"/>
          </svg>
      </div>
      
      <div class="px-4 py-2 -mx-3">
          <div class="mx-3">
              <span v-if="props.type == ToastTypeEnum.SUCCESS" class="font-semibold text-emerald-500 dark:text-emerald-400">Bien</span>
              <span v-else-if="props.type == ToastTypeEnum.WARNING" class="font-semibold text-yellow-400 dark:text-yellow-300">Cuidado</span>
              <span v-else-if="props.type == ToastTypeEnum.ERROR" class="font-semibold text-red-500 dark:text-red-400">Error</span>
              <span v-else class="font-semibold text-blue-500 dark:text-blue-400">Info</span>
              <p class="text-sm text-gray-600 dark:text-gray-200">{{ props.msg }}</p>
          </div>
      </div>
  </div>
        
</template>