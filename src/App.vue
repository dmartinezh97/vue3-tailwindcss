<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import Toasts from './components/Toasts/Toasts.vue'
import Navbar from './components/Navbar.vue'
import { useUserStore } from './stores/modulos/user';

const userStore = useUserStore();

</script>

<template>
  <div class="flex flex-col">
    <Navbar></Navbar>
    <div class="flex">
      <div class="w-full lg:p-4">
        <router-view v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <component :is="Component"></component>
          </Transition>
        </router-view>
      </div>
    </div>
    <Toasts></Toasts>
  </div>
</template>

<style>
@import '@/assets/base.css';
</style>
