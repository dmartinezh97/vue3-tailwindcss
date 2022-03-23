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
  <div id="buscarnegocio">
    <div class="bg-uno p-4 text-center">
      <InputText label="" placeholder="Buscar..." v-model="buscar" :details="false"></InputText>
    </div>
    <div class="pt-12 p-4 flex flex-col items-center justify-center">
      <IconBuscar class="w-24 h-24 fill-[#999FA6]"></IconBuscar>
    </div>
    <div class="max-w-xs mx-auto text-center text-[#999FA6]">
      <p>Busca un equipo de trabajo, una promotora de eventos o un lugar; discoteca, pub, restaurante...</p>
    </div>
  </div>
</template>
