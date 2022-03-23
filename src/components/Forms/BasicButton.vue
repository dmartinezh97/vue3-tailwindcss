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
  shadow: {
    type: String as PropType<ButtonShadowEnum>,
    default: ButtonShadowEnum.DEFAULT,
    required: false
  },
  size: {
    type: String as PropType<SizeEnum>,
    default: SizeEnum.DEFAULT,
    required: false
  },
  type: {
    type: String as PropType<ButtonStyleEnum>,
    default: ButtonStyleEnum.DEFAULT,
    required: false
  },
})

const emit = defineEmits(['click'])
const onClick = () => {
  emit('click')
};

const classSizeObject = computed(() => ({
  'text-xs p-1.5': SizeEnum.XSMALL == props.size,
  'text-sm p-2': SizeEnum.SMALL == props.size,
  'text-base p-3': SizeEnum.DEFAULT == props.size,
  'text-lg p-4': SizeEnum.LARGE == props.size,
}))

const classTypeObject = computed(() => ({
  'bg-uno hover:bg-dos text-white': ButtonStyleEnum.DEFAULT == props.type,
  'bg-white text-uno border border-uno': ButtonStyleEnum.OUTLINED == props.type,
  'text-uno hover:bg-uno/10 bg-transparent': ButtonStyleEnum.TEXT == props.type,
}))

const classShadowObject = computed(() => ({
  'shadow-lg shadow-uno/50': ButtonShadowEnum.DEFAULT == props.shadow,
}))

</script>

<template>
  <button
    :class="[classSizeObject, classTypeObject]"
    class="block mb-2 w-full font-medium rounded-lg focus:outline-none focus:ring-none transition ease-in duration-150"
    @click="onClick"
  >{{ text }}</button>
</template>