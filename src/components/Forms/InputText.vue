<script setup lang="ts">
import { isString } from '@vue/shared';
import { computed, onMounted, ref, type CSSProperties, type PropType } from 'vue';
import { SizeEnum } from '../../enums/sizeEnum';
import { ButtonTypeEnum } from '../../enums/buttonEnum';
import IconEye from '../icons/IconEye.vue';
import IconEyeCerrado from '../icons/IconEyeCerrado.vue';
import IconAdd from '../icons/IconAdd.vue';

const props = defineProps({
  label: {
    type: String,
    required: false
  },
  type: {
    type: String,
    default: 'text',
    required: false
  },
  class: {
    type: String,
    required: false
  },
  placeholder: {
    type: String,
    required: false
  },
  iconRight: {
    type: String,
    default: '',
    required: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  editable: {
    type: Boolean,
    default: true,
    required: false
  },
  modelValue: {
    type: [String, Number],
    default: '',
    required: false
  },
})

const emit = defineEmits(['update:modelValue', 'click'])
const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
};

const onClick = () => {
  emit('click')
};

const classInputObject = computed(() => ({
  'bg-gray-200': props.disabled,
  'rounded-lg': props.iconRight === '',
  'rounded-l-lg': props.iconRight != '',
}))

</script>

<template>
  <template v-if="editable">
    <div class="flex flex-col" :class="class" @click="onClick">
      <label v-if="props.label" class="text-gray-600 font-medium mb-1">{{ props.label }}</label>
      <div class="flex items-center">
        <input
          :type="type"
          step="0.1"
          :value="modelValue"
          :disabled="disabled"
          @input="updateValue"
          :class="classInputObject"
          :placeholder="props.placeholder"
          spellcheck="false"
          :readonly="readonly"
          class="block w-full font-light text-base bg-transparent text-black placeholder:text-gray-300 py-2 px-4 bg-primary border border-gray-300 focus:border focus:outline-none focus:border-uno focus:ring-none"
        />
        <div v-if="props.iconRight!=''" class="px-4 py-2 rounded-r-lg bg-primary border-r border-y border-gray-300">{{props.iconRight}}</div>
      </div>
    </div>
  </template>
  <template v-else>
    <slot name="content">
    </slot>
  </template>
</template>