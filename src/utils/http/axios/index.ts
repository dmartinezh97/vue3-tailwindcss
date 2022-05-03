import axios from 'axios';
import VueAxios from "vue-axios";
import type { App } from "vue";
import { isDevMode } from '@/utils/env';
import { Http } from './Http';

export function setupAxios(app: App<Element>) {
  axios.defaults.baseURL = isDevMode() ? "https://localhost:44392/" : "https://localhost:44392/";
  new Http.ApiJwtService();
  app.use(VueAxios, axios)
}