<script setup lang="ts">
import { ref, onMounted, onDeactivated, reactive } from 'vue';
import { Dialog, DialogOverlay, DialogTitle, DialogDescription } from '@headlessui/vue'
import BasicButton from './Forms/BasicButton.vue'
import InputText from './Forms/InputText.vue'
import type { LoginParams } from '@/api/model/userModel';
import { useUserStore } from '@/stores/modulos/user';

const userStore = useUserStore();

const showModal = ref(true);
// const emit = defineEmits(['update:modelValue', 'registro'])
const setIsOpen = (value: boolean) => {
    showModal.value = false
    //emit('update:modelValue', value)
};

// const onClickOpenRegistro = () => {
//     emit('registro', true)
// };

// const onClickBtnLogin = async () => {
//     const res = await userStore.login(frmData)
//     if (res) {
//         setIsOpen(false)
//     }
// };

</script>

<template>
    <Dialog :open="showModal" @close="setIsOpen" class="fixed inset-0 z-30 overflow-y-auto">
        <div class="flex items-end justify-center min-h-full py-8 px-1 md:p-8">
            <DialogOverlay class="fixed inset-0 bg-black opacity-0" />
            <div class="relative w-full max-w-screen-2xl mx-auto p-6 bg-white rounded-xl shadow-2xl">
                <div class="flex items-center text-base leading-none tracking-tight font-extrabold mb-2">
                    Tu privacidad
                    <span class="material-icons text-lg ml-2 text-blue-500">lock</span>
                </div>
                <div class="flex items-center">
                    <div class="pr-4">
                        <p class="text-sm">Utilizamos cookies y tecnologías similares para ofrecer una mejor experiencia. Al hacer clic en Vale o activar una opción en las Preferencias de cookies, aceptas lo establecido en nuestra <a href="" class="font-bold underline underline-offset-2">Política de Cookies</a>. Para cambiar tus preferencias o retirar tu consentimiento, actualiza tus Preferencias de cookies.</p>
                    </div>
                    <div class="flex gap-x-2">
                        <BasicButton text="Preferencias de cookies" class="min-w-[250px]" outlined></BasicButton>
                        <BasicButton text="Vale" class="min-w-[150px]"></BasicButton>
                    </div>
                </div>
                <!-- <div class="p-6">
                    <div class="mb-8">
                        <h3 class="font-semibold text-xl">¡Te damos la bienvenida a {nombreApp}!</h3>
                    </div>
                    <div>
                        <InputText label="Correo electrónico" v-model="frmData.username" type="email"></InputText>
                        <InputText label="Contraseña" v-model="frmData.password" type="password"></InputText>
                    </div>
                    <div>
                        <BasicButton @click="onClickBtnLogin" text="Iniciar sesión" block></BasicButton>
                    </div>
                    <div class="my-4">
                        <div class="linea-o">o</div>
                    </div>
                    <div>
                        <button @click="onClickOpenRegistro" class="w-full rounded-lg text-gray-600 border border-gray-300 hover:bg-gray-100 flex items-center justify-center text-sm font-normal px-3 py-3.5 leading-none transition ease-in duration-150">
                            Regístrate con el correo electrónico
                        </button>
                    </div>
                </div> -->
            </div>
        </div>
    </Dialog>
</template>