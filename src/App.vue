<script setup lang="ts">
import { RouterView } from 'vue-router'
import Toasts from './components/Toasts/Toasts.vue'
import Navbar from './components/Navbar.vue'
import DialogCookies from './components/DialogCookies.vue';


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
    <!-- Dialogs -->
    <!-- <DialogCookies></DialogCookies> -->
    <!-- Fin dialogs -->
  </div>
</template>

<style>
@import '@/assets/base.css';
</style>
