import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import { setupRouter } from './router'
import { setupStore } from './stores'
import { setupAxios } from './utils/http/axios/index';
import { setupRouterGuard } from './router/guard/index';
import { router } from './router/index';

const app = createApp(App)

//Configuración store
setupStore(app)

//Configuración idioma
//TODO: 18n

//Configuración Axios HTTP
setupAxios(app)

//Configuración router
setupRouter(app)

//Configuración de rutas protegidas
setupRouterGuard(router);


//Montamos/Instanciamos la aplicación web
app.mount('#app')
