<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarEmpresa from "../components/NavbarEmpresa.vue";
</script>

<template>
  <div class="flex h-full">
    <NavbarEmpresa></NavbarEmpresa>
    <div class="flex w-full overflow-y-auto">
      <div class="w-full">
        <router-view v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <component :is="Component"></component>
          </Transition>
        </router-view>
      </div>
    </div>
  </div>
</template>