<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import Toasts from './components/Toasts/Toasts.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="flex">
    <!-- <AppHeader></AppHeader> -->
    <Navbar></Navbar>
    <RouterView /> 
    <!-- <AppFooter></AppFooter> -->
    <Toasts></Toasts>
  </div>
</template>

<style>
@import '@/assets/base.css';
</style>
