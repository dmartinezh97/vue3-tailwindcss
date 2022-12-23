<script setup lang="ts">
import BasicButton from "../../components/ui/BasicButton.vue";
import { ButtonStyleEnum, ButtonShadowEnum } from "@/enums/buttonEnum";
import AnimationApp from "../../components/icons/AnimationApp.vue";
import { router } from '../../router/index';
import { SizeEnum } from '../../enums/sizeEnum';
import { PageEnum } from '../../enums/pageEnum';
import InputText from '../../components/ui/InputText.vue';
import { reactive, ref, computed } from "vue";

const buscar = ref("");

const onSubmitCrearNegocio = () => {
  router.push({
    name: PageEnum.SELECCIONAR_TIPO_NEGOCIO
  })
};

</script>

<template>
  <div id="inicio" class="text-center">
    <h1>Inicio</h1>
  </div>
</template>