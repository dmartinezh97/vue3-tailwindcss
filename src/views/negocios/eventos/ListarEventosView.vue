<script setup lang="ts">
import { router } from '@/router/index';
import { computed, onBeforeMount, ref, reactive } from 'vue';
import IconAdd from '@/components/icons/IconAdd.vue';
import { PageEnum } from "@/enums/pageEnum";
import { useRoute } from 'vue-router';
import { useEventoStore } from '@/stores/modulos/evento';
import type { MisEventosResultModel } from '@/api/model/eventoModel';

const eventoStore = useEventoStore();
const { params } = useRoute();

let statePage = reactive({
  eventos: [] as MisEventosResultModel[],
});

onBeforeMount(async () => {
  if(params.id){
    statePage.eventos = await eventoStore.misEventos(params.id.toString());
  }
})

const onClickAddEvento = async () => {
  await eventoStore.crearEvento(params.id.toString())
}

</script>

<template>
  <div id="eventos">
    <div class="max-w-7xl mx-auto overflow-hidden">
      <div class="grid grid-cols-3 gap-6 gap-y-10">
        <div class="flex flex-col items-center w-full max-w-sm mx-auto appearance-none">
            <div @click="onClickAddEvento" class="w-full cursor-pointer flex justify-center items-center h-64 bg-transparent bg-center bg-cover rounded-lg shadow-md border border-dashed border-gray-300">
              <div class="flex flex-col items-center text-base font-semibold text-gray-600">
                <IconAdd class="w-24 h-24 text-gray-200"></IconAdd>
                Añadir evento
              </div>
            </div>
        </div>

        <router-link v-for="evento in statePage.eventos" :to="{ name: PageEnum.EDITAR_EVENTO, params: { idevento: evento.idevento } }" :key="'evento-'+evento.idevento" class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
            <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" :style="'background-image: url('+ evento.img_cabecera +')'"></div>
            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                <h3 class="h-10 py-2 px-3 font-bold tracking-wide whitespace-nowrap text-ellipsis overflow-hidden text-center text-gray-800 uppercase dark:text-white"> {{evento.nombre}} </h3>
                <div class="text-center capitalize px-3 py-2 bg-gray-200 dark:bg-gray-700">
                    {{$filters.formatDate(evento.fecha_creacion, "date")}}
                </div>
            </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
