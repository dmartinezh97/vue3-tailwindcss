import axios from 'axios';
import VueAxios from "vue-axios";
import type { App } from "vue";
import { isDevMode } from '@/utils/env';
import { Http } from './Http';

export function setupAxios(app: App<Element>) {
  axios.defaults.baseURL = isDevMode() ? "https://26.25.24.45:45455/" : "";
  new Http.ApiJwtService();
  app.use(VueAxios, axios)
}