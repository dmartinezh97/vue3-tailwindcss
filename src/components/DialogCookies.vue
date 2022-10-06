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

const onClickAbrirPoliticaDeCookies = () => {
    alert("test")
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
    <Dialog :open="showModal" @close="setIsOpen" class="fixed bottom-0 z-30 overflow-y-auto w-full">
        <div class="flex items-end justify-center py-8 px-1 md:p-8">
            <!-- <DialogOverlay class="fixed inset-0 bg-black opacity-0" /> -->
            <div class="relative flex w-full max-w-screen-2xl mx-auto p-6 bg-white rounded-xl shadow-2xl">
                <div class="flex">
                    <div class="flex flex-col pr-4">
                        <div class="text-base leading-none tracking-tight font-extrabold mb-2">
                            Tu privacidad
                            <span class="material-icons text-lg ml-2 text-blue-500">lock</span>
                        </div>
                        <p class="text-sm">Utilizamos cookies y tecnologías similares para ofrecer una mejor experiencia. Al hacer clic en Vale o activar una opción en las Preferencias de cookies, aceptas lo establecido en nuestra <span @click="onClickAbrirPoliticaDeCookies" class="font-bold underline underline-offset-2">Política de Cookies</span>. Para cambiar tus preferencias o retirar tu consentimiento, actualiza tus Preferencias de cookies.</p>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="flex gap-x-2">
                        <BasicButton text="Preferencias de cookies" class="min-w-[250px]" outlined></BasicButton>
                        <BasicButton text="Vale" class="min-w-[150px]"></BasicButton>
                    </div>
                </div>
            </div>
        </div>
    </Dialog>
</template>