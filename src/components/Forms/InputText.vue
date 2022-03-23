<script setup lang="ts">
import { isString } from '@vue/shared';
import { computed, onMounted, ref, type CSSProperties, type PropType } from 'vue';
import { SizeEnum } from '../../enums/sizeEnum';
import { ButtonTypeEnum } from '../../enums/buttonEnum';
import IconEye from '../icons/IconEye.vue';
import IconEyeCerrado from '../icons/IconEyeCerrado.vue';

const verPassword = ref(false)

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  details: {
    type: Boolean,
    default: true
  },
  preffix: {
    type: String,
    default: ""
  },
  placeholder: {
    type: String,
    default: ""
  },
  type: {
    type: String as PropType<ButtonTypeEnum>,
    default: ButtonTypeEnum.TEXT,
    required: false
  },
  modelValue: {
    type: String,
    default: '',
    required: true
  },
})

const emit = defineEmits(['update:modelValue'])
const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
};

const onFocusOutInput = (e: Event) => {
  //TODO: Si el tipo es EMAIL, verificar que es un correo si se hace focus fuera
  //console.log("fuera", e.target);
};

const getName = computed(()=>{
  return props.label.replace(/\s/g,'').toLowerCase()
})

const getType = computed(()=>{
  switch (props.type) {
    case ButtonTypeEnum.TEXT:
      return ButtonTypeEnum.TEXT
    case ButtonTypeEnum.PASSWORD:
      return !verPassword.value ? "password": "text"
    case ButtonTypeEnum.FECHA:
      return ButtonTypeEnum.FECHA
    default:
      return "text";
  }
  return ButtonTypeEnum.PASSWORD == props.type && !verPassword.value ? "password": "text"
})

const getPlaceholder = computed(()=>{
  if(ButtonTypeEnum.EMAIL == props.type){
    return "example@example.com"
  }else if(props.placeholder){
    return props.placeholder;
  }else return props.label;
})

const classInputObject = computed(() => ({
  'pr-8': verPassword.value,
  'bg-gray-200': props.disabled,
  'rounded-tr-lg rounded-br-lg border border-l-0 pr-3 focus:outline-none': props.preffix,
  'rounded-lg border px-3 focus:outline-none focus:ring-none focus:border-uno': !props.preffix,
}))

const classIconObject = computed(() => ({
  'block': ButtonTypeEnum.PASSWORD == props.type,
  'hidden': ButtonTypeEnum.PASSWORD != props.type,
}))

const onClickVerPassword = () => {
  verPassword.value = !verPassword.value
};

</script>

<template>
  <div :class="props.details ? 'mb-3':''">
    <label v-if="label" class="text-sm font-normal inline-block" :for="getName">{{ label }}</label>
    <div class="relative flex items-center">
      <label v-if="props.preffix" class="text-gray-400 rounded-tl-lg rounded-bl-lg border border-gray-400 text-sm border-r-0 bg-white pl-3 py-1.5" :for="getName">{{ props.preffix }}</label>
      <input
        :type="getType"
        :value="modelValue"
        :disabled="disabled"
        :placeholder="getPlaceholder"
        @input="updateValue"
        @focusout="onFocusOutInput"
        :class="classInputObject"
        class="block w-full font-light py-1.5 text-sm bg-white border-gray-400"
        :name="getName"
        :id="getName"
      />
      <div @click="onClickVerPassword" class="absolute p-1 right-1 top-1/2 -translate-y-1/2">
        <IconEyeCerrado v-if="verPassword" :class="classIconObject" class="text-[#999FA6]"></IconEyeCerrado>
        <IconEye v-else :class="classIconObject" class="text-[#999FA6]"></IconEye>
      </div>
    </div>
  </div>
</template>