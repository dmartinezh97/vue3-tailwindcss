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
  'bg-uno text-white border boder-uno hover:bg-dos': !props.outlined && !props.disabled,
  'bg-gray-100 text-gray-600 border border-none': props.outlined && !props.disabled,
  'shadow-lg shadow-uno/20': props.shadow && !props.disabled,
  'bg-gray-200 text-gray-500 border border-gray-300 shadow-sm': props.disabled,
}))

</script>

<template>
  <button
    :type="submit ? 'submit' :'button'"
    :class="classObject"
    :disabled="props.disabled"
    class="block font-medium px-5 py-2 transition ease-in duration-150"
    @click="onClick"
  >{{ text }}</button>
</template>