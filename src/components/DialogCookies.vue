<script setup lang="ts">
import BasicButton from './ui/BasicButton.vue'
import { useUserStore } from '@/stores/modulos/user';

const userStore = useUserStore();

const aceptarCookies = () => {
    userStore.setCookies(true)
};

const onClickAbrirPoliticaDeCookies = () => {
    alert("test")
};

const onClickAbrirPreferenciaDeCookies = () => {
    alert("test")
};

</script>

<template>
    <div v-if="!userStore.getIsCookiesAcepted" class="fixed bottom-0 z-30 overflow-y-auto w-full">
        <div class="flex items-end justify-center p-4 md:p-8">
            <!-- <DialogOverlay class="fixed inset-0 bg-black opacity-0" /> -->
            <div class="relative flex flex-col gap-y-4 lg:flex-row w-full max-w-screen-2xl mx-auto p-6 bg-white rounded-xl shadow-2xl">
                <div class="flex">
                    <div class="flex flex-col pr-4">
                        <div class="flex items-center text-base leading-none tracking-tight font-extrabold mb-2">
                            Tu privacidad
                            <span class="material-icons text-lg ml-2 text-blue-500">lock</span>
                        </div>
                        <p class="text-sm">Utilizamos cookies y tecnologías similares para ofrecer una mejor experiencia. Al hacer clic en Vale o activar una opción en las Preferencias de cookies, aceptas lo establecido en nuestra <span @click="onClickAbrirPoliticaDeCookies" class="font-bold underline underline-offset-2">Política de Cookies</span>. Para cambiar tus preferencias o retirar tu consentimiento, actualiza tus Preferencias de cookies.</p>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="flex gap-x-2">
                        <BasicButton @click="onClickAbrirPreferenciaDeCookies" text="Preferencias de cookies" class="min-w-[250px]" outlined></BasicButton>
                        <BasicButton @click="aceptarCookies" data-test="btnAceptarCookies" text="Vale" class="min-w-[150px]"></BasicButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>