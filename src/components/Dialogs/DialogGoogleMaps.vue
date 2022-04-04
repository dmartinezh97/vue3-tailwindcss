<script setup lang="ts">
import BasicButton from "../Forms/BasicButton.vue";
import InputText from "../Forms/InputText.vue";
import { ref, computed } from 'vue';

const direccion = ref("");
const direccionOk = ref(false);

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: '',
        required: true
    },
})

const emit = defineEmits(['update:modelValue', 'submit'])
const close = (e: Event) => {
    emit('update:modelValue', false)
};

const onClickOk = () => {
    emit('submit', getDireccion.value)
    direccion.value = "";
    emit('update:modelValue', false)
};


const getDireccion = computed(() => {
    if (direccion.value) {
        //Check if the url starting with https://www.google.com/maps/embed? is valid with the regex
        const regexgmaps = /^https:\/\/www.google.com\/maps\/embed\?/;
        //regex to get a src value held in a string
        const regexsrc = /src="(.*?)"/;
        const test = regexsrc.exec(direccion.value);
        if (test != undefined && test.length == 2) {
            if(regexgmaps.test(test[1])){
                return test[1];
            }else{
                return "";
            }
        }else if(regexgmaps.test(direccion.value) && !direccion.value.includes("\"")){
            return direccion.value;
        }else return "";
    } else {
        return ""
    }
})

</script>

<template>
    <div class="fixed inset-0 z-50 bg-[#00000099]" v-show="props.modelValue">
        <div class="flex flex-col justify-center items-center h-full">
            <div class="p-8 bg-white rounded-lg shadow-2xl w-full max-w-2xl">
                <h2 class="text-lg font-bold mb-4">Añadir ubicación</h2>
                <InputText label="Ubicación" v-model="direccion"></InputText>
                <iframe v-if="getDireccion" :src="getDireccion" width="100%" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div class="flex items-center justify-end mt-8">
                    <BasicButton text="Cancelar" @click="close" outlined class="mr-2"></BasicButton>
                    <BasicButton text="Guardar" @click="onClickOk"></BasicButton>
                </div>
            </div>
        </div>
    </div>
</template>