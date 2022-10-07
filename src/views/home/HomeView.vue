<script setup lang="ts">
import BasicButton from "../../components/Forms/BasicButton.vue";
import { ButtonStyleEnum, ButtonShadowEnum } from "@/enums/buttonEnum";
import AnimationApp from "../../components/icons/AnimationApp.vue";
import { router } from '../../router/index';
import { SizeEnum } from '../../enums/sizeEnum';
import { PageEnum } from '../../enums/pageEnum';
import InputText from '../../components/Forms/InputText.vue';
import { reactive, ref, computed } from "vue";
import type { LocalInfo } from "@/types/store";

const buscar = ref("");

</script>

<template>
  <div id="inicio" class="text-center">
    <h1>Inicio</h1>
  </div>
</template>


<style scoped>
/* .fondo{
  background: url('https://images.pexels.com/photos/6985048/pexels-photo-6985048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-position: center;
} */
.fondo {
  background: url("https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-position: center;
}
</style>