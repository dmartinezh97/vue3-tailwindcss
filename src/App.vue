<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Toasts from './components/Toasts/Toasts.vue'
import Navbar from './components/layouts/Navbar.vue'
import DialogCookies from './components/DialogCookies.vue';
import Loading from './components/Loading.vue';
import { useAppStore } from './stores/modulos/app';

const appStore = useAppStore();

</script>

<template>
  <div id="appBase">
    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </Transition>
    </router-view>
    <Loading v-model="appStore.getPageLoading"></Loading>
    <Toasts></Toasts>
    <!-- Dialogs -->
    <DialogCookies></DialogCookies>
    <!-- Fin dialogs -->
  </div>
</template>

<style>
@import '@/assets/base.css';
</style>
