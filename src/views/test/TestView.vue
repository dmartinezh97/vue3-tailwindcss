<script setup lang="ts">
import { onMounted, ref } from "vue";
import InputText from "../../components/ui/InputText.vue";
import BasicButton from "../../components/ui/BasicButton.vue";
import { SizeEnum } from "@/enums/sizeEnum";
import { ButtonStyleEnum } from "@/enums/buttonEnum";
import IconApp from "../../components/icons/IconApp.vue";
import AnimationApp from "../../components/icons/AnimationApp.vue";
import { router } from '../../router/index';
import { useToastStore } from '../../stores/modulos/toast';
import { ToastTypeEnum } from "@/enums/toastEnum";

const toastStore = useToastStore();

const nombre = ref("")

const onClickAddToast = () => {
  toastStore.info(nombre.value);
};

onMounted(() => {
  //onClickAddToast();
})

</script>

<template>
  <div id="login">
    <div class="max-w-xs mx-auto pt-8">
      <div class="text-center mb-8">
        <h1 class="text-2xl text-fuente font-medium">Pantalla Componentes</h1>
      </div>
      <div class>
        <InputText label="Titulo toast" v-model="nombre"></InputText>
        <BasicButton @click="onClickAddToast" text="Añadir toast"></BasicButton>
      </div>
    </div>
  </div>
</template>
