<script setup lang="ts">
import { PageEnum } from '@/enums/pageEnum';

</script>

<template>
  <div>
    <h1>Home negocios</h1>
    <router-link :to="{ name: PageEnum.SELECCIONAR_TIPO_NEGOCIO }">Siguiente</router-link>
  </div>
</template>
