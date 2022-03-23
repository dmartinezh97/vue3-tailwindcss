<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import InputText from "../../components/Forms/InputText.vue";
import BasicButton from "../../components/Forms/BasicButton.vue";
import ButtonsAuth from "../../components/ButtonsAuth.vue"
import { SizeEnum } from "@/enums/sizeEnum";
import { ButtonTypeEnum } from "@/enums/buttonEnum";
import { useUserStore } from "@/stores/modulos/user";
import type { LoginParams } from '../../api/model/userModel';

const userStore = useUserStore();

const frmData: LoginParams = reactive({
  username: "dmartinezh97@gmail.com",
  password: "1234"
})

const onClickBtnLogin = () => {
  userStore.login(frmData)
};

</script>

<template>
  <div id="login">
    <div class="max-w-xs mx-auto pt-8">
      <div class="text-center mb-8">
        <h1 class="text-2xl text-fuente font-medium">Iniciar Sesión</h1>
      </div>
      <div class="mb-8">
        <InputText v-model="frmData.username" label="Correo electrónico"></InputText>
        <InputText v-model="frmData.password" label="Contraseña" :type="ButtonTypeEnum.PASSWORD"></InputText>
        <BasicButton @click="onClickBtnLogin" text="Entrar"></BasicButton>
      </div>
      <ButtonsAuth></ButtonsAuth>
    </div>
  </div>
</template>
