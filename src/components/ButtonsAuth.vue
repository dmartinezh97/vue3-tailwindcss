<script setup lang="ts">
import IconFacebook from "./icons/IconFacebook.vue";

</script>

<template>
    <div>
        <div class="text-center text-gray-400 mb-2">
            <h1 class="relative linea"><span class="bg-fondo px-3">o</span></h1>
        </div>
        <div class="flex justify-center gap-x-3 fill-white">
            <div>
                <img width="40" height="40" src="@/assets/img/png/facebook_circled_48px.png">
            </div>
            <div>
                <img width="40" height="40" src="@/assets/img/png/twitter_circled_48px.png">
            </div>
            <div>
                <img width="40" height="40" src="@/assets/img/png/google_plus_circled_48px.png">
            </div>
        </div>
    </div>
</template>

<style scoped>
.linea:before {
  border-top: 1px solid;
  content: "";
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  width: 90%;
  max-width: 200px;
  z-index: -1;
}
</style>