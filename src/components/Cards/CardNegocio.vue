<script setup lang="ts">
import IconBookmark from '../icons/IconBookmark.vue';
import IconStar from '../icons/IconStar.vue';
import type { LocalInfo } from '../../types/store';
import { onMounted } from 'vue';

defineProps({
    nombre: {
        type: String,
    },
    imgCabecera: {
        type: String,
    },
});

// await new Promise((res) => setTimeout(res, 60000));

</script>

<template>
    <div class="negocio-card">
        <div class="card-header" :style="'background-image: url(' + imgCabecera + ')'"></div>
        <div class="card-body">
            <h3 class="title"> {{ nombre }} </h3>
        </div>
    </div>
</template>

<style>
.negocio-card {
    @apply flex flex-col items-center justify-center w-full max-w-md mx-auto;
}

.negocio-card .card-header {
    @apply w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md;
}

.negocio-card .card-body {
    @apply w-56 h-10 -mt-5 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800;
}

.negocio-card .card-body .title {
    @apply py-2 px-4 font-bold capitalize tracking-wide whitespace-nowrap text-ellipsis overflow-hidden text-center text-gray-800;
}
</style>