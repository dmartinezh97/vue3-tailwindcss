<script setup lang="ts">
import NavbarEmpresa from '@/components/NavbarEmpresa.vue';
import { RouterView } from 'vue-router';
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
  <!-- <router-view v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </Transition>
  </router-view> -->
</template>
