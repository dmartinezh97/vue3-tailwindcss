<script setup lang="ts">

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
  modelValue: {
    type: [String, Number],
    default: '',
    required: false
  },
})

const emit = defineEmits(['update:modelValue'])
const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
};

</script>

<template>
  <div class="border border-gray-300 w-full rounded-md focus-within:border-uno-500 mb-4">
    <div class="relative px-4 py-2">
      <input :value="modelValue" :type="props.type" @input="updateValue" :name="props.label" placeholder=" " class="block w-full z-2 appearance-none focus:outline-none bg-transparent" />
      <label :for="props.label" class="absolute top-1/2 left-6 transform -translate-y-1/2 z-1 duration-300 bg-white">{{props.label}}</label>
      <!-- <label for="username" class="absolute top-1/2 transform -translate-y-1/2 z-1 duration-300 bg-white">{{props.label}}</label> -->
    </div>
  </div>
</template>