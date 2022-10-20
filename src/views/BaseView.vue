<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from "../components/Navbar.vue";

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
  </div>
</template>


<style scoped>

</style>