import type { App } from "vue";
import projectSetting from "@/settings/projectSetting";

/**
 * Configure global error handling
 * @param app
 */
 export function setupErrorHandle(app: App) {
    const { useErrorHandle } = projectSetting;
    if (!useErrorHandle) {
      return;
    }
    // Control de excepciones en Vue;
    // app.config.errorHandler = vueErrorHandler;
  
    // Error de script
    // window.onerror = scriptErrorHandler;
  
    // Excepción de promesas
    // registerPromiseErrorHandler();
  
    // Excepción de recurso estático
    // registerResourceErrorHandler();
  }
  