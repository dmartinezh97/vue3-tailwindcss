<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import Toasts from './components/Toasts/Toasts.vue'
import Navbar from './components/Navbar.vue'
import { useUserStore } from './stores/modulos/user';
import Sidebar from './components/Sidebar.vue';

const userStore = useUserStore();

</script>

<template>
  <div class="flex flex-col">
    <Navbar></Navbar>
    <div class="flex">
      <Sidebar></Sidebar>
      <div class="w-full p-2 lg:p-4">
        <RouterView /> 
      </div>
    </div>
    <Toasts></Toasts>
  </div>
</template>

<style>
@import '@/assets/base.css';
</style>
