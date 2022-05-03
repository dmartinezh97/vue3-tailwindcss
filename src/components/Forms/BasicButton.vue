<script setup lang="ts">
import { isString } from '@vue/shared';
import { computed, onMounted, type CSSProperties, type PropType } from 'vue';
import { SizeEnum } from '../../enums/sizeEnum';
import { ButtonStyleEnum, ButtonShadowEnum } from '../../enums/buttonEnum';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  block: {
    type: Boolean,
    default: false,
    required: false
  },
  rounded: {
    type: Boolean,
    default: true,
    required: false
  },
  outlined: {
    type: Boolean,
    default: false,
    required: false
  },
  shadow: {
    type: Boolean,
    default: false,
    required: false
  },
  submit: {
    type: Boolean,
    default: false,
    required: false
  },
  disabled: {
    type: Boolean,
    default: false,
    required: false
  },
})

const emit = defineEmits(['click'])
const onClick = () => {
  emit('click')
};

const classObject = computed(() => ({
  'w-full': props.block,
  'rounded-lg': props.rounded,
  'bg-uno text-white border border-uno hover:bg-dos': !props.outlined && !props.disabled,
  'bg-gray-100 text-gray-600 border border-none': props.outlined && !props.disabled,
  'shadow-lg shadow-uno/20': props.shadow && !props.disabled,
  'bg-gray-200 hover:bg-gray-300 text-gray-400 border border-gray-300': props.disabled,
}))

</script>

<template>
  <button
    :type="submit ? 'submit' :'button'"
    :class="classObject"
    :disabled="props.disabled"
    class="flex items-center justify-center font-semibold px-6 py-3 leading-none transition ease-in duration-150"
    @click="onClick"
  >
  <slot name="icon">
  </slot>
  {{ text }}
  </button>
</template>