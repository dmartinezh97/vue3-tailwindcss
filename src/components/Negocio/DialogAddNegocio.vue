<script setup lang="ts">
import { ref, onMounted, onDeactivated, reactive } from 'vue';
import { Dialog, DialogOverlay, DialogTitle, DialogDescription } from '@headlessui/vue'
import BasicButton from '../Forms/BasicButton.vue'
import InputText from '../Forms/InputText.vue'
import { useUserStore } from '@/stores/modulos/user';
import type { NegocioParams } from '@/api/model/negocioModel';
import Select from '../Forms/Select.vue';

const userStore = useUserStore();

const frmData: NegocioParams = reactive({
    nombre: "",
    descripcion: "",
    tipo_negocio: 5,
    ubicacion: ""
})

const props = defineProps({
    modelValue: {
        type: [Boolean],
        required: true
    },
})

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
]

const emit = defineEmits(['update:modelValue', 'login'])
const setIsOpen = (value: boolean) => {
    emit('update:modelValue', value)
};

const onClickOpenLogin = () => {
    emit('login', true)
};

const onClickBtnLogin = async () => {
    // const res = await userStore.signUp(frmData)
    // if (res) {
    //     setIsOpen(false)
    //     /* TODO: Redireccionar a otro formulario para hacer la comprobación por correo o SMS */
    // }
};

</script>

<template>
    <Dialog :open="props.modelValue" @close="setIsOpen" class="fixed inset-0 z-30 overflow-y-auto">
        <div class="flex items-center justify-center min-h-full py-8 px-1 md:p-8">
            <DialogOverlay class="fixed inset-0 bg-black opacity-30" />
            <div class="relative w-full max-w-lg mx-auto bg-white rounded-xl">
                <div class="flex justify-center items-center h-16 border-b border-gray-200 px-3">
                    <h2 class="text-base leading-none tracking-tight font-extrabold">Añade tu negocio</h2>
                    <button @click="setIsOpen(false)"
                        class="w-8 h-8 absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-none">
                        <span class="material-icons text-lg text-gray-500">close</span>
                    </button>
                </div>
                <div class="p-6">
                    <div class="text-center mb-6">
                        <p>Rellena el siguiente formulario y empieza a trabajar ya.</p>
                    </div>
                    <div>
                        <InputText label="Nombre" v-model="frmData.nombre"></InputText>
                        <InputText label="Descripción" v-model="frmData.descripcion"></InputText>
                        <Select label="Tipo" v-model="frmData.tipo_negocio" :items="people" item-value="id" item-text="name"></Select>
                        <!-- <div class="flex gap-2">
                            <InputText label="Apellidos" v-model="frmData.apellidos"></InputText>
                            <InputText label="Usuario" v-model="frmData.usuario"></InputText>
                        </div> -->
                    </div>
                    <div>
                        <BasicButton @click="onClickBtnLogin" text="Crear cuenta" block></BasicButton>
                    </div>
                    <div class="my-4">
                        <div class="linea-o">o</div>
                    </div>
                    <div>
                        <button @click="onClickOpenLogin" class="w-full rounded-lg text-gray-600 border border-gray-300 hover:bg-gray-100 flex items-center justify-center text-sm font-normal px-3 py-3.5 leading-none transition ease-in duration-150">
                            Inicia sesión con el correo electrónico
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Dialog>
</template>