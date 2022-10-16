<script setup lang="ts">
import IconStar from "../../components/icons/IconStar.vue";
import IconBookmark from "../../components/icons/IconBookmark.vue";
import IconBookmarkOutlined from "../../components/icons/IconBookmarkOutlined.vue";
import CardLocal from "../../components/Cards/CardLocal.vue";
import type { EventInfo, LocalInfo } from '../../types/store';
import { reactive, ref } from 'vue';
import CardEvent from '../../components/Cards/CardEvent.vue';
import AppHeader from '../../components/AppHeader.vue';


const listaDestinosPopulares: LocalInfo[] = reactive([
  {
    nombre: 'Drinkking Carpes Sant Cugat',
    direccion: 'Sant Cugat del Vallès, Barcelona',
    img: 'https://getluna.app/wp-content/uploads/2020/04/IMG_3588.jpg',
    puntuacion: '5.0'
  },
  {
    nombre: 'Navu',
    direccion: 'Granollers, Barcelona',
    img: 'https://images.xceed.me/clubs/covers/navu-granollers-club-barcelona-xceed-f3fb.jpg',
    puntuacion: '4.3'
  },
  {
    nombre: '2046',
    direccion: 'Granollers, Barcelona',
    img: 'https://www.somgranollers.cat/img/844/474/15482',
    puntuacion: '3.0'
  },
  {
    nombre: 'Cocoa',
    direccion: 'Mataró, Barcelona',
    img: 'https://www.buscafiesta.es/assets/2021/10/Cocoa-discoteca-Mataro-cabecera-1-en-galeria-imagenes-Buscafiesta-580x408.jpg.webp',
    puntuacion: '5.0'
  },
])

const listaEventos: EventInfo[] = reactive([
  {
    nombre: 'Arenal Sound',
    img: 'https://actualitatvalenciana.com/wp-content/uploads/2021/09/Arenal-Sound-1.jpg',
    fecha: 'Sáb, 7 Ago 2022 | 18:00 - 3:00',
    ubicacion: 'Burriana'
  },
  {
    nombre: 'Reggaeton Beach Festival',
    img: 'https://metropolitano.gal/wp-content/uploads/2022/01/regueton_beach_festival.jpg',
    fecha: 'Sáb, 2 Jul 2022 | 17:00 - 01:30',
    ubicacion: 'Latin Fest'
  },
  
  
])

const listaRestaurantes: EventInfo[] = reactive([
  {
    nombre: 'El Xalet de Montjuïc',
    img: 'https://images.xceed.me/restaurants/covers/el-xalet-de-montjuic-restaurant-barcelona-xceed8725.jpeg?w=600&ar=16:9&fm=auto',
    fecha: '',
    ubicacion: ''
  },
  {
    nombre: 'Ferroz',
    img: 'https://images.xceed.me/restaurants/covers/feroz-restaurant-barcelona-xceeda8dd.jpeg?w=600&ar=16:9&fm=auto',
    fecha: '',
    ubicacion: ''
  },  
])



</script>

<template>
  <AppHeader></AppHeader>
  <main id="discover" class="py-4">
    <div id="destinospopulares" class="mb-4">
      <div class="flex justify-between items-center mb-2 px-4">
        <h1 class="text-normal font-semibold text-fuente">Destinos populares para salir</h1>
        <label class="text-normal font-semibold text-uno-500">Ver más</label>
      </div>
      <div class="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start px-4 pb-8">
        <!-- CARDS -->
        <CardLocal :data="x" v-for="x in listaDestinosPopulares" :key="x.nombre"></CardLocal>
      </div>
    </div>
    <div id="festivales" class="mb-4">
      <div class="flex justify-between items-center mb-2 px-4">
        <div class="leading-4">
          <h1 class="text-normal font-semibold text-fuente">Festivales</h1>
          <label class="text-xs">Todos los festivales próximos</label>
        </div>
        <label class="text-normal font-semibold text-uno-500">Ver más</label>
      </div>
      <div class="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start px-4 pb-8">
        <!-- CARDS -->
        <CardEvent :data="x" v-for="x in listaEventos" :key="x.nombre"></CardEvent>
        <!-- <CardLocal :data="x" v-for="x in 5" :key="x"></CardLocal> -->
      </div>
    </div>
    <div id="restaurantespopulares" class="mb-4">
      <div class="flex justify-between items-center mb-2 px-4">
        <div class="leading-4">
          <h1 class="text-normal font-semibold text-fuente">Restaurantes populares</h1>
          <label class="text-xs">Los restaurantes más famosos</label>
        </div>
        <label class="text-normal font-semibold text-uno-500">Ver más</label>
      </div>
      <div class="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start px-4 pb-8">
        <!-- CARDS -->
        <CardEvent :data="x" v-for="x in listaRestaurantes" :key="x.nombre"></CardEvent>
        <!-- <CardLocal :data="x" v-for="x in 5" :key="x"></CardLocal> -->
      </div>
    </div>
  </main>
</template>