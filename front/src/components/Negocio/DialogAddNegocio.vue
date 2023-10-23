<script setup lang="ts">
import { ref, onMounted, onDeactivated, reactive } from 'vue';
import { Dialog, DialogOverlay, DialogTitle, DialogDescription } from '@headlessui/vue'
import BasicButton from '../ui/buttons/BasicButton.vue'
import InputText from '../ui/InputText.vue'
import type { NegocioParams } from '@/api/model/negocioModel';
import Select from '../ui/Select.vue';
import { listadoTipoNegocio } from '@/data/app'
import { useNegocioStore } from '@/stores/modulos/negocio';

const negocioStore = useNegocioStore();

const frmData: NegocioParams = reactive({
    nombre: "",
    descripcion: "",
    tipo_negocio: 0
})

const props = defineProps({
    modelValue: {
        type: [Boolean],
        required: true
    },
})

const emit = defineEmits(['update:modelValue', 'login'])
const setIsOpen = (value: boolean) => {
    emit('update:modelValue', value)
};

const onClickAddNegocio = async () => {
    const res = await negocioStore.crearNegocio(frmData)
    console.log(res)
    if(res){
        alert("asd")
    }
    // const res = await userStore.signUp(frmData)
    // if (res) {
    //     setIsOpen(false)
    //     /* TODO: Redireccionar a otro formulario para hacer la comprobación por correo o SMS */
    // }
};

</script>

<template>
    <Dialog :open="props.modelValue" @close="setIsOpen(false)" class="fixed inset-0 z-30 overflow-y-auto">
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
                        <!-- <Select label="Tipo" v-model="frmData.tipo_negocio" :items="listadoTipoNegocio"></Select> -->
                        <!-- <div class="flex gap-2">
                            <InputText label="Apellidos" v-model="frmData.apellidos"></InputText>
                            <InputText label="Usuario" v-model="frmData.usuario"></InputText>
                        </div> -->
                    </div>
                    <div class="flex gap-2">
                        <BasicButton @click="setIsOpen(false)" text="Cancelar" block outlined></BasicButton>
                        <BasicButton @click="onClickAddNegocio" text="Crear negocio" block></BasicButton>
                    </div>
                </div>
            </div>
        </div>
    </Dialog>
</template>