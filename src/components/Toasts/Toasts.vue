<script setup lang="ts">import { useToastStore } from '@/stores/modulos/toast';
import { computed } from 'vue';
import Toast from './Toast.vue';

const toastStore = useToastStore();

const getToasts = computed(() => {
  return toastStore.toasts;
})

</script>

<template>
  <div class="fixed z-20 bottom-10 right-2" v-if="getToasts.length">
    <Toast v-for="(toast, index) in getToasts" :key="index" :msg="toast.msg" :size="toast.size" :time="toast.time" :type="toast.type"></Toast>
  </div>
</template>