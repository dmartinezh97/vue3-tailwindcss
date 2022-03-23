<script setup lang="ts">
import { useUserStore } from "@/stores/modulos/user";

const userStore = useUserStore();

// // a computed ref
// const isLogged = computed(() => {
//   return author.books.length > 0 ? 'Yes' : 'No'
// })

</script>

<template>
    <header v-if="userStore.getIsLogged" class="flex justify-center items-center py-4 bg-uno text-white">
        <h1 class="text-normal font-medium">Los mejores eventos</h1>
        <!-- text-base p-3 bg-uno hover:bg-dos text-white shadow-lg shadow-uno/50 block mb-2 w-full font-medium rounded-lg -->
    </header>
</template>