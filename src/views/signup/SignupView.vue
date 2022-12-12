<script setup lang="ts">
import { reactive, ref } from "vue";
import InputText from "../../components/ui/InputText.vue";
import BasicButton from "../../components/ui/BasicButton.vue";
import { SizeEnum } from "@/enums/sizeEnum";
import { ButtonTypeEnum } from "@/enums/buttonEnum";
import type { FrmSignup } from '../../types/store';
import ButtonsAuth from '../../components/ButtonsAuth.vue';

const form: FrmSignup = reactive({
  nombre: '',
  apellidos: '',
  email: '',
  password: '',
  confirmPassword: ''
})

</script>

<template>
  <div id="signup">
    <div class="max-w-xs mx-auto pt-8">
      <div class="text-center mb-8">
        <h1 class="text-2xl text-fuente font-medium">Crear Cuenta</h1>
      </div>
      <div class="mb-8">
        <InputText v-model="form.nombre" label="Nombre"></InputText>
        <InputText v-model="form.apellidos" label="Apellidos"></InputText>
        <InputText v-model="form.email" label="Correo eletrónico" :type="ButtonTypeEnum.EMAIL"></InputText>
        <InputText v-model="form.password" label="Contraseña" :type="ButtonTypeEnum.PASSWORD"></InputText>
        <InputText v-model="form.confirmPassword" label="Confirmar contraseña" :type="ButtonTypeEnum.PASSWORD"></InputText>
        <BasicButton text="Registrarme"></BasicButton>
      </div>
      <ButtonsAuth></ButtonsAuth>
    </div>
  </div>
</template>
