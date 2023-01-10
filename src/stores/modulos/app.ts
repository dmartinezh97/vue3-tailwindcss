import type { AppState } from '@/types/store'
import { defineStore } from 'pinia'


export const useAppStore = defineStore({
    id: 'app',
    state: (): AppState => ({
        pageLoading: true,
    }),
    getters: {
        getPageLoading(): boolean {
            return this.pageLoading;
        }
    },
    actions: {
        setPageLoading(loading: boolean): void {
            this.pageLoading = loading;
        }
    }
})
