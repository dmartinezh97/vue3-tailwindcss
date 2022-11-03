<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from "../components/Navbar.vue";

</script>

<template>
  <div class="flex flex-col h-full">
    <Navbar></Navbar>
    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </Transition>
    </router-view>
  </div>
</template>