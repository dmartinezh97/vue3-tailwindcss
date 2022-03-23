<script setup lang="ts">
import IconHome from "./icons/IconHome.vue";
import IconProfile from "./icons/IconProfile.vue";
import IconNotify from "./icons/IconNotify.vue";
</script>

<template>
    <footer class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
        <div id="tabs" class="flex justify-between py-1">
            <a href="#" class="w-full text-[#999FA6] focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center py-2">
                <IconHome></IconHome>
                <!-- <span class="tab tab-home block text-xs">Home</span> -->
            </a>
            <a href="#" class="w-full text-[#999FA6] focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center py-2">
                <IconNotify></IconNotify>
                <!-- <span class="tab tab-kategori block text-xs">Category</span> -->
            </a>
            <a href="#" class="w-full text-[#999FA6] focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center py-2">
                <IconNotify></IconNotify>
                <!-- <span class="tab tab-explore block text-xs">Explore</span> -->
            </a>
            <a href=# class="w-full text-[#999FA6] focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center py-2">
                <IconProfile></IconProfile>
                <!-- <span class="tab tab-account block text-xs">Account</span> -->
            </a>
        </div>
    </footer>
</template>