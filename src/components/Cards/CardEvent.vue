<script setup lang="ts">
import IconBookmark from '../icons/IconBookmark.vue';
import IconStar from '../icons/IconStar.vue';
import type { EventInfo, LocalInfo } from '../../types/store';
import type { PropType } from 'vue';
import IconUbicacion from '../icons/IconUbicacion.vue';

const props = defineProps<{
    data: EventInfo
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
        <div class="relative max-h-[120px] overflow-hidden">
            <img :src="props.data.img" />
            <div class="bg-gray-900/50 rounded-full p-3 absolute bottom-2 right-2">
                <IconBookmark class="w-4 h-4 text-white fill-transparent"></IconBookmark>
            </div>
        </div>
        <div class="flex flex-col p-2">
            <div class="leading-3">
                <h1 class="text-xs font-semibold text-fuente">{{props.data.nombre}}</h1>
                <label class="text-xs font-light text-fuente" v-if="props.data.fecha">{{props.data.fecha}}</label>
                <div class="flex items-center my-1" v-if="props.data.ubicacion">
                    <IconUbicacion class="text-uno-500 fill-uno w-3 h-3 mr-1"></IconUbicacion>
                    <h1 class="text-xs font-semibold text-uno-500">{{props.data.ubicacion}}</h1>
                </div>
            </div>
        </div>
    </div>
</template>