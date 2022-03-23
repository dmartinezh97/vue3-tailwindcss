<script setup lang="ts">
import BasicButton from "../../components/Forms/BasicButton.vue";
import { ButtonStyleEnum, ButtonShadowEnum } from "@/enums/buttonEnum";
import AnimationApp from "../../components/icons/AnimationApp.vue";
import { router } from '../../router/index';
import { SizeEnum } from '../../enums/sizeEnum';
import { PageEnum } from '../../enums/pageEnum';

const onClickBtnAddNegocio = () => {
  router.push(PageEnum.BASE_NEGOCIO)
};

</script>

<template>
  <div id="inicio" class="p-4 pl-2 w-full">
    <div class="bg-gris rounded-2xl p-8">
      <div class="flex flex-col justify-center items-center text-white bg-white/10 fondo rounded-xl p-8">
        <h1 class="text-5xl font-semibold py-4">¡Bienvenido a {nombreApp}!</h1>
        <p class="py-3 text-center font-semibold max-w-xl">Discover the world of Memberset groups and communities. Find groups are interesting to you and suscribe to useful categories</p>
        <div class="py-4">
          input
        </div>
      </div>
    </div>
  </div>
</template>


<style>
/* .fondo{
  background: url('https://images.pexels.com/photos/6985048/pexels-photo-6985048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-position: center;
} */
.fondo{
  background: url('https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-position: center;
}

</style>