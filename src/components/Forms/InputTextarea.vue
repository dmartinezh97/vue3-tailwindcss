<script setup lang="ts">
import { isString } from '@vue/shared';
import { computed, onMounted, ref, type CSSProperties, type PropType } from 'vue';
import { SizeEnum } from '../../enums/sizeEnum';
import { ButtonTypeEnum } from '../../enums/buttonEnum';
import IconEye from '../icons/IconEye.vue';
import IconEyeCerrado from '../icons/IconEyeCerrado.vue';

const props = defineProps({
  label: {
    type: String,
    required: false
  },
  placeholder: {
    type: String,
    required: false
  },
  disabled: {
    type: Boolean,
    default: false
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
  //console.log("fuera", e.target);
};

const classInputObject = computed(() => ({
  'bg-gray-200': props.disabled,
  // 'rounded-tr-lg rounded-br-lg border border-l-0 pr-3 focus:outline-none': props.preffix,
  // 'rounded-lg border px-3 focus:outline-none focus:ring-none focus:border-uno': !props.preffix,
}))

// const classIconObject = computed(() => ({
//   'block': ButtonTypeEnum.PASSWORD == props.type,
//   'hidden': ButtonTypeEnum.PASSWORD != props.type,
// }))

</script>

<template>
  <div class="flex flex-col">
    <label v-if="props.label" class="text-gray-600 font-medium mb-1">{{ props.label }}</label>
    <textarea
      :value="modelValue"
      :disabled="disabled"
      @input="updateValue"
      @focusout="onFocusOutInput"
      :class="classInputObject"
      :placeholder="props.placeholder"
      spellcheck="false"
      class="block w-full font-light text-base bg-primary text-black placeholder:text-gray-300 rounded-lg py-2 px-4 border border-gray-300 focus:border focus:outline-none focus:border-uno focus:ring-none"
    ></textarea>  
  </div>
</template>