<script setup lang="ts">
import IconBookmark from '../icons/IconBookmark.vue';
import IconStar from '../icons/IconStar.vue';
import type { LocalInfo } from '../../types/store';
import type { PropType } from 'vue';

const props = defineProps<{
    data: LocalInfo
}>(
//   size: {
//     type: String as PropType<SizeEnum>,
//     default: SizeEnum.DEFAULT,
//     required: false
//   },
//   type: {
//     type: String as PropType<ButtonStyleEnum>,
//     default: ButtonStyleEnum.DEFAULT,
//     required: false
//   },
)

// const emit = defineEmits(['click'])
// const onClick = () => {
//   emit('click')
// };

// const classSizeObject = computed(() => ({
//   'text-xs p-1.5': SizeEnum.XSMALL == props.size,
//   'text-sm p-2': SizeEnum.SMALL == props.size,
//   'text-base p-3': SizeEnum.DEFAULT == props.size,
//   'text-lg p-4': SizeEnum.LARGE == props.size,
// }))

// const classTypeObject = computed(() => ({
//   'bg-uno-500 hover:bg-dos text-white shadow-lg shadow-uno/50': ButtonStyleEnum.DEFAULT == props.type,
//   'bg-white text-uno-500 border border-uno-500': ButtonStyleEnum.OUTLINED == props.type,
//   'text-uno-500 hover:bg-uno-500/10 bg-transparent': ButtonStyleEnum.TEXT == props.type,
// }))

</script>

<template>
    <div class="flex-none w-2/3 md:w-1/3 max-w-[250px] overflow-hidden rounded-xl shadow-xl mr-4">
        <div class="relative max-h-[150px] overflow-hidden">
            <img :src="props.data.img" />
            <div class="bg-gray-900/50 rounded-full p-3 absolute bottom-2 right-2">
                <IconBookmark class="w-4 h-4 text-white fill-transparent"></IconBookmark>
            </div>
        </div>
        <div class="flex flex-col p-2">
            <div class="leading-3 mb-2">
                <h1 class="text-xs font-semibold text-fuente">{{props.data.nombre}}</h1>
                <label class="text-xs font-light text-fuente">{{props.data.direccion}}</label>
            </div>
            <div class="flex items-center">
                <IconStar class="w-5 h-5 text-uno-500"></IconStar>
                <IconStar class="w-5 h-5 text-uno-500"></IconStar>
                <IconStar class="w-5 h-5 text-uno-500"></IconStar>
                <IconStar class="w-5 h-5 text-uno-500"></IconStar>
                <IconStar class="w-5 h-5 text-uno-500"></IconStar>
                <span
                    class="bg-dos/20 text-uno-500 text-xs font-semibold mx-2 px-2.5 py-0.5 rounded"
                >{{props.data.puntuacion}}</span>
            </div>
            <div></div>
        </div>
    </div>
</template>