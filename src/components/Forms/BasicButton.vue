<script setup lang="ts">
import { isString } from '@vue/shared';
import { computed, onMounted, type CSSProperties, type PropType } from 'vue';
import { SizeEnum } from '../../enums/sizeEnum';
import { ButtonStyleEnum, ButtonShadowEnum } from '../../enums/buttonEnum';

const props = withDefaults(defineProps<{
  text: string,
  block?: boolean,
  rounded?: boolean,
  outlined?: boolean,
  shadow?: boolean,
  submit?: boolean,
  disabled?: boolean,
}>(), {
  block: false,
  rounded: true,
  outlined: false,
  shadow: false,
  submit: false,
  disabled: false,
});

const emit = defineEmits(['click'])
const onClick = () => {
  emit('click')
};

const classObject = computed(() => ({
  'w-full': props.block,
  'rounded-lg': props.rounded,
  'bg-uno-500 text-white border border-uno-500 hover:bg-dos': !props.outlined && !props.disabled,
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