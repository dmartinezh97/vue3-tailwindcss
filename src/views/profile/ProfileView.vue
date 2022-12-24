<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import InputText from "../../components/ui/InputText.vue";
import BasicButton from "../../components/ui/buttons/BasicButton.vue";
import ButtonsAuth from "../../components/ButtonsAuth.vue"
import { SizeEnum } from "@/enums/sizeEnum";
import { useUserStore } from "@/stores/modulos/user";
import type { LoginParams } from '../../api/model/userModel';
import IconEye from '../../components/icons/IconEye.vue';
import IconPuntitos from '../../components/icons/IconPuntitos.vue';
import type { UserInfoModel } from '../../api/model/userModel';
import { useToastStore } from '../../stores/modulos/toast';

const userStore = useUserStore();

let frmData = ref<UserInfoModel | null>(null)

onMounted(async () => {
  frmData.value = await userStore.infoUser();
})

const onClickBtnGuardar = async () => {
  if(frmData.value!=null){
    await userStore.updateInfoUser(frmData.value).then(()=>{
      useToastStore().info("¡Guardado!");
    })
  }
};

</script>

<template>
  <div id="login">
    <div class="bg-uno-500 h-32 py-4 text-center">
      <h1 class="text-base text-white font-medium">Modificar perfil</h1>
    </div>
    <div class="rounded-2xl bg-fondo -mt-4 flex flex-col items-center justify-center mb-4 p-4">
      <div class="-mt-16 rounded-full overflow-hidden border-4 border-fondo">
        <img class="h-24 w-24" src="@/assets/img/png/img_avatar.png" alt="">
      </div>
    </div>
    <div class="px-4" v-if="frmData">
      <div class="grid grid-cols-2 gap-x-2">
        <InputText label="Nombre" v-model="frmData.nombre"></InputText>
        <InputText label="Apellidos" v-model="frmData.apellidos"></InputText>
        <InputText label="Teléfono" v-model="frmData.telefono"></InputText>
        <InputText label="Fecha de nacimiento" v-model="frmData.fecha_nacimiento" :type="ButtonTypeEnum.FECHA"></InputText>
      </div>
      <div class="mb-4">
        <InputText label="Correo electrónico" v-model="frmData.email" disabled></InputText>
        <InputText label="Enlace RRPP" placeholder="dmartinezh97" preffix="paginaweb.com/"></InputText>
      </div>
      <div>
        <BasicButton @click="onClickBtnGuardar" text="Guardar"></BasicButton>
      </div>
    </div>
  </div>
</template>
