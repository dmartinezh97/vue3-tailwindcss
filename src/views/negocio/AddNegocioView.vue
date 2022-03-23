<script setup lang="ts">
import BasicButton from "../../components/Forms/BasicButton.vue";
import { ButtonStyleEnum, ButtonShadowEnum } from "@/enums/buttonEnum";
import AnimationApp from "../../components/icons/AnimationApp.vue";
import { router } from '../../router/index';
import { SizeEnum } from '../../enums/sizeEnum';

const onClickBtnAddNegocio = () => {
  router.push({
    name: 'Signup'
  })
};

</script>

<template>
  <div id="login">
    <div class="max-w-xs mx-auto pt-8">
      <!-- <div class="mb-6">
        <AnimationApp></AnimationApp>
      </div> -->
      <div class="text-center mb-8">
        <h1 class="text-2xl text-fuente font-medium">¡Bienvenido!</h1>
      </div>
      <div class="bg-white p-4 pb-2 text-center rounded-lg">
        <h3 class="mb-6">Añade un negocio para empezar.</h3>
        <BasicButton @click="onClickBtnAddNegocio" text="Añadir negocio" :size="SizeEnum.XSMALL" :shadow="ButtonShadowEnum.NONE"></BasicButton>
      </div>
      <!-- <div class="">
        <BasicButton @click="onClickLogin" text="Iniciar sesión" :type="ButtonStyleEnum.OUTLINED"></BasicButton>
        <BasicButton @click="onClickSignUp" text="Crear cuenta" ></BasicButton>
      </div> -->
    </div>
  </div>
</template>
