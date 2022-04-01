<script setup lang="ts">
import BasicButton from "../../components/Forms/BasicButton.vue";
import { ButtonStyleEnum, ButtonShadowEnum } from "@/enums/buttonEnum";
import AnimationApp from "../../components/icons/AnimationApp.vue";
import { router } from '../../router/index';
import { SizeEnum } from '../../enums/sizeEnum';
import { ref } from 'vue';
import InputText from '../../components/Forms/InputText.vue';
import IconBuscar from '../../components/icons/IconBuscar.vue';

const buscar = ref("")

const onClickBtnAddNegocio = () => {
  router.push({
    name: 'Signup'
  })
};

</script>

<template>
  <div id="trabajadores" class="w-full">
    <h1>TRABAJADORES</h1>
  </div>
</template>
