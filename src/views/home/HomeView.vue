<script setup lang="ts">
import BasicButton from "../../components/Forms/BasicButton.vue";
import { ButtonStyleEnum, ButtonShadowEnum } from "@/enums/buttonEnum";
import AnimationApp from "../../components/icons/AnimationApp.vue";
import { router } from '../../router/index';
import { SizeEnum } from '../../enums/sizeEnum';
import { PageEnum } from '../../enums/pageEnum';
import InputText from '../../components/Forms/InputText.vue';
import { reactive, ref } from "vue";
import type { LocalInfo } from "@/types/store";

const buscar = ref("");

</script>

<template>
  <div id="inicio" class="p-4 w-full">
    <div class="bg-secondary rounded-2xl p-8">
      <div
        class="flex flex-col justify-center items-center text-white bg-white/10 fondo rounded-xl p-8"
      >
        <h1 class="text-5xl font-semibold py-4">¡Bienvenido a {nombreApp}!</h1>
        <p
          class="py-3 text-center font-semibold max-w-xl"
        >Discover the world of Memberset groups and communities. Find groups are interesting to you and suscribe to useful categories</p>
        <div class="pt-6 w-full max-w-2xl">
          <InputText v-model="buscar" placeholder="Busca tu próxima experiencia inolvidable"></InputText>
        </div>
      </div>
      <!-- <div class="mt-12">
        <div>
          <h1 class="text-2xl font-semibold text-white">Destinos populares para salir</h1>
          <div class="flex">
            <div class="bg-red-100 max-w-[350px]">
              <div>
                <img
                  src="https://images.xceed.me/clubs/covers/navu-granollers-club-barcelona-xceed-f3fb.jpg"
                />
              </div>
              <div>
                <h1></h1>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
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