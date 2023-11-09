/// <reference path="auto-imports.d.ts" />
/// <reference path="components.d.ts" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />
/* https://vitejs.dev/guide/env-and-mode.html */

interface ImportMetaEnv {
    readonly VITE_APP_NAME: string
    readonly VITE_APP_VERSION: string
    readonly VITE_APP_API_URL: string
}

// interface ImportMeta {
//     readonly env: ImportMetaEnv
// }