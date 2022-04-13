<script setup lang="ts">
import { ref, onMounted, onDeactivated } from 'vue';
import { Dialog, DialogOverlay, DialogTitle, DialogDescription} from '@headlessui/vue'
import BasicButton from './Forms/BasicButton.vue'
import InputText from './Forms/InputText.vue'

const props = defineProps({
  modelValue: {
    type: [Boolean],
    required: true
  },
})

const emit = defineEmits(['update:modelValue'])
const setIsOpen = (value: boolean) => {
  emit('update:modelValue', value)
};

</script>

<template>
    <Dialog :open="props.modelValue" @close="setIsOpen" class="fixed inset-0 z-50 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen">
            <DialogOverlay class="fixed inset-0 bg-black opacity-30"/>
    
            <div class="relative max-w-lg mx-auto bg-white rounded-xl">
                <div class="flex justify-center items-center h-16 border-b border-gray-200 px-3">
                    <h2 class="text-base leading-none tracking-tight font-extrabold">Inicia sesión o regístrate</h2>
                </div>
                <div class="p-6">
                    <div>
                        <div class="mb-4">
                            <h3 class="font-semibold text-xl">¡Te damos la bienvenida a {nombreApp}!</h3>
                        </div>
                        <div>
                            <InputText label="asd"></InputText>
                        </div>
                        <div>
                            <BasicButton text="Continuar" block></BasicButton>
                        </div>
                    </div>
                </div>
                <DialogDescription>
                This will permanently deactivate your account
                </DialogDescription>
        
                <p>
                Are you sure you want to deactivate your account? All of your data will be
                permanently removed. This action cannot be undone.
                </p>
        
                <button @click="setIsOpen(false)">Deactivate</button>
                <button @click="setIsOpen(false)">Cancel</button>
            </div>
        </div>
    </Dialog>
</template>