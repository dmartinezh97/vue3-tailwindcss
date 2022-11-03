<script setup lang="ts">
import { router } from '@/router/index';
import { computed, onBeforeMount, ref, reactive } from 'vue';
import IconAdd from '@/components/icons/IconAdd.vue';
import { PageEnum } from "@/enums/pageEnum";
import { useRoute } from 'vue-router';
import { useEventoStore } from '@/stores/modulos/evento';
import type { MisEventosResultModel } from '@/api/model/eventoModel';
import DialogOkCancel from '@/components/Dialogs/DialogOkCancel.vue';

const eventoStore = useEventoStore();
const { params } = useRoute();
let showModal = ref(false);

let statePage = reactive({
  eventos: [] as MisEventosResultModel[],
});

onBeforeMount(async () => {
  if (params.id) {
    statePage.eventos = await eventoStore.misEventos(params.id.toString());
  }
})

const onClickOpenModalCrearEvento = () => {
  showModal.value = !showModal.value;
};

const onClickAddEvento = async () => {
  await eventoStore.crearEvento(params.id.toString())
}

const getMisEventos = computed(() => {
  //Retornar eventos por la fecha de creación más reciente
  return statePage.eventos.sort((a, b) => {
    return new Date(b.fecha_creacion).getTime() - new Date(a.fecha_creacion).getTime();
  });
})

</script>

<template>
  <div id="eventos" class="grid grid-cols-4 gap-6 gap-y-10 p-4">
    <div @click="onClickOpenModalCrearEvento"
      class="flex flex-col items-center justify-start w-full max-w-md mx-auto cursor-pointer">
      <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"></div>
      <div class="w-56 -mt-5 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3
          class="py-2 px-4 font-bold capitalize tracking-wide whitespace-nowrap text-ellipsis overflow-hidden text-center text-gray-800">
          Añadir evento </h3>
      </div>
    </div>
    <router-link v-for="evento in getMisEventos" :key="'evento-' + evento.idevento"
      :to="{ name: PageEnum.EDITAR_EVENTO, params: { idevento: evento.idevento } }"
      class="flex flex-col items-center justify-center w-full max-w-md mx-auto">
      <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
        :style="'background-image: url(' + evento.img_cabecera + ')'"></div>
      <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3
          class="h-10 py-2 px-3 font-bold tracking-wide whitespace-nowrap text-ellipsis overflow-hidden text-center text-gray-800 uppercase dark:text-white">
          {{ evento.nombre }} </h3>
        <div class="text-center capitalize px-3 py-2 bg-gray-200 dark:bg-gray-700">
          {{ $filters.formatDate(evento.fecha_creacion, "date") }}
        </div>
      </div>
    </router-link>
    <!-- Dialogs -->
    <DialogOkCancel v-model="showModal" @submit="onClickAddEvento" titulo="Crear evento" descripcion="Promociona, vende y gestiona entradas online. Añade un negocio para empezar"></DialogOkCancel>
    <!-- Dialogs -->
  </div>
</template>
