<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Toasts from './components/Toasts/Toasts.vue'
import Navbar from './components/Navbar.vue'
import DialogCookies from './components/DialogCookies.vue';
import { getEnv } from './utils/shared/envUtils';

onMounted(() => {
  console.log(getEnv().VITE_APP_NAME)
})

</script>

<template>
  <div id="appBase">
    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </Transition>
    </router-view>
    <Toasts></Toasts>
    <!-- Dialogs -->
    <DialogCookies></DialogCookies>
    <!-- Fin dialogs -->
  </div>
</template>

<style>
@import '@/assets/base.css';
</style>
