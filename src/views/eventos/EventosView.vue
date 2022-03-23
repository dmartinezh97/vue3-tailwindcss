<script setup lang="ts">
import { ref } from "vue";
import InputText from "../../components/Forms/InputText.vue";
import BasicButton from "../../components/Forms/BasicButton.vue";
import { SizeEnum } from "@/enums/sizeEnum";
import { ButtonStyleEnum } from "@/enums/buttonEnum";
import IconApp from "../../components/icons/IconApp.vue";
import AnimationApp from "../../components/icons/AnimationApp.vue";
import { router } from '../../router/index';

const onClickLogin = () => {
  router.push({
    name: 'Login'
  })
};

const onClickSignUp = () => {
  router.push({
    name: 'Signup'
  })
};

</script>

<template>
  <div id="login">
    <div class="max-w-xs mx-auto pt-8">
      <div class="mb-6">
        <AnimationApp></AnimationApp>
      </div>
      <div class="text-center mb-8">
        <h1 class="text-2xl text-fuente font-medium">¡Bienvenido!</h1>
      </div>
      <div class="">
        <BasicButton @click="onClickLogin" text="Iniciar sesión" :type="ButtonStyleEnum.OUTLINED"></BasicButton>
        <BasicButton @click="onClickSignUp" text="Crear cuenta" ></BasicButton>
      </div>
    </div>
  </div>
</template>
