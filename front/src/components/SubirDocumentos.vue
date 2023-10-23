<script setup lang="ts">

const onClickClose = () => {

}

</script>

<template>
    <div class="fixed h-full-nav top-16 right-2 bg-white shadow-xl rounded-xl w-96 overflow-hidden">
        <div class="flex justify-between px-5 pt-4">
            <h1 class="text-lg font-semibold select-none">Documentos</h1>
            <button @click="onClickClose" class="w-8 h-8 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-none">
                <span class="material-icons text-lg text-gray-500">close</span>
            </button>
        </div>
        <hr class="my-2">
        <div class="px-4 pb-4 h-full-nav overflow-y-scroll">
            
            <!-- <div class="flex justify-between items-center bg-gray-100 p-3 rounded-md">
                <div class="flex items-center">
                    <span class="material-icons-outlined mr-2">description</span>
                    <p>Financial reports</p>
                    <p class="ml-3 text-gray-500">10MB</p>
                </div>
                <div class="flex">
                    <button class="mr-2">Copy link</button>
                    <button class="mr-2">Share document to space</button>
                    <button>View privately</button>
                </div>
            </div> -->
        </div>
    </div>
</template>