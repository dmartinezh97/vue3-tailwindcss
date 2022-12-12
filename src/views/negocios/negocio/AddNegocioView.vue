<script setup lang="ts">
import BasicButton from "@/components/ui/BasicButton.vue";
import { ButtonStyleEnum, ButtonShadowEnum } from "@/enums/buttonEnum";
import AnimationApp from "@/components/icons/AnimationApp.vue";
import { router } from '@/router/index';
import { SizeEnum } from '@/enums/sizeEnum';
import InputText from '@/components/ui/InputText.vue';
import { computed, reactive, ref } from "vue";
import type { NegocioParams } from '@/api/model/negocioModel';
import { useNegocioStore } from '@/stores/modulos/negocio';

const logo = ref(null)
const imgCabecera = ref(null)

const negocioStore = useNegocioStore();

const onClickBtnCrearNegocio = () => {
  //TODO: Hacer validación de datos
  let formData = new FormData();
  formData.append('nombre', frmData.nombre)
  formData.append('descripcion', frmData.descripcion)
  formData.append('tipo_negocio', frmData.tipo_negocio)
  formData.append('ubicacion', frmData.ubicacion)
  if (logo.value != null)
    formData.append('logo', logo.value)
  if (imgCabecera.value != null)
    formData.append('img_cabecera', imgCabecera.value)
  negocioStore.crearNegocio(formData)
};

const onChangeFileLogo = (e: any) => {
  if(e.target.files.length>0){
    logo.value = e.target.files[0];
  }
};

const onChangeFileImgCabecera = (e: any) => {
  if(e.target.files.length>0){
    imgCabecera.value = e.target.files[0];
  }
};

const frmData: NegocioParams = reactive({
  nombre: "",
  descripcion: "",
  ubicacion: "",
  tipo_negocio: 0,
})

const getNombreNegocio = computed(() => {
  return frmData.nombre ? frmData.nombre : "Paco Meralgo";
})

const getDescripcionNegocio = computed(() => {
  return frmData.descripcion ? frmData.descripcion : "El mejor restaurante de La Vía Láctea.";
})

const getLogoNegocio = computed(() => {
  var urlCreator = window.URL || window.webkitURL;
  return logo.value != null ? urlCreator.createObjectURL(logo.value) : "https://scontent-mad1-1.xx.fbcdn.net/v/t1.18169-9/26730586_1529012650479589_6601663021449917971_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=it_sm_17kFUAX9q7Hgm&_nc_ht=scontent-mad1-1.xx&oh=00_AT-U3JJ2PgOZH2z1JMC4kN67tUovUJ_hkgZljNgqS2JrKA&oe=6264C3DB";
})

const getImgCabeceraNegocio = computed(() => {
  var urlCreator = window.URL || window.webkitURL;
  return imgCabecera.value != null ? urlCreator.createObjectURL(imgCabecera.value) : "https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/276007407_4930148147032672_7062034494787834528_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0debeb&_nc_ohc=0lnQAr5zXgAAX_5cE-x&_nc_ht=scontent-mad1-1.xx&oh=00_AT-hA2BKSVcZVpZEZrSennS4Q14hSAh_TUdhec1KRF5Y5w&oe=624483B3";
})


</script>

<template>
  <div id="addnegocio" class="flex justify-center items-center w-full lg:pt-16">
    <div class="flex flex-col lg:flex-row justify-center items-center w-full mx-auto">
      <div
        class="w-full max-w-xl p-4 lg:p-8 mb-4 md:mb-8 lg:mb-0 lg:mr-8 bg-white rounded-md overflow-hidden shadow-md"
      >
        <h1
          class="text-center mx-auto sm:max-w-xs lg:max-w-lg text-xl sm:text-2xl lg:text-4xl text-gray-600 font-semibold py-4"
        >Vamos a pensar un nombre para el negocio</h1>
        <form class="lg:mt-6" @submit.prevent="onClickBtnCrearNegocio" enctype="multipart/form-data">
          <InputText
            v-model="frmData.nombre"
            label="Nombre"
            class="mb-4"
            :placeholder="getNombreNegocio"
          ></InputText>
          <InputText
            v-model="frmData.descripcion"
            label="Descripción"
            class="mb-4"
            :placeholder="getDescripcionNegocio"
          ></InputText>
          <label class="block mb-4">
            <span class="text-gray-600 font-medium mb-1">Añade el logo de tu negocio</span>
            <input
              @change="onChangeFileLogo"
              type="file"
              accept="image/*"
              class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
            />
          </label>
          <label class="block mb-4">
            <span class="text-gray-600 font-medium mb-1">Añade una imagen para la cabecera</span>
            <input
              @change="onChangeFileImgCabecera"
              type="file"
              accept="image/*"
              class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
            />
          </label>
          <BasicButton text="Crear negocio" submit block shadow></BasicButton>
        </form>
      </div>

      <div class="w-full max-w-xl lg:max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
        <!-- https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
        https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80-->
        <img
          class="object-cover object-center w-full h-56"
          :src="getImgCabeceraNegocio"
          alt="avatar"
        />
        <div class="flex justify-center -mt-16 mr-3 md:justify-end">
          <img
            class="object-cover w-20 h-20 border-2 border-uno-500 rounded-full dark:border-uno-500"
            alt="Testimonial avatar"
            :src="getLogoNegocio"
          />
        </div>
        <!-- <div class="flex items-center px-6 py-3 bg-gray-900">
              <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"/>
              </svg>

              <h1 class="mx-3 text-lg font-semibold text-white">Focusing</h1>
        </div>-->

        <div class="px-6 py-4">
          <h1
            class="text-xl font-semibold text-gray-800 dark:text-white capitalize"
          >{{ getNombreNegocio }}</h1>

          <p class="py-2 text-gray-700 dark:text-gray-400">{{ getDescripcionNegocio }}</p>

          <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg
              class="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 11H10V13H14V11Z" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
              />
            </svg>

            <h1 class="px-2 text-sm">Discoteca</h1>
          </div>

          <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg
              class="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
              />
            </svg>

            <h1 class="px-2 text-sm">Sant Cugat del Vallès, Barcelona</h1>
          </div>

          <!-- <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                  <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"/>
                  </svg>
                  
                  <h1 class="px-2 text-sm">patterson@example.com</h1>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>
