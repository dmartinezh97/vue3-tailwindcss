import type { ErrorLogInfo } from '@/types/store';
import { formatToDateTime } from '@/utils/dateUtil';
import { defineStore } from 'pinia'
import type { Nullable } from 'vitest';
import { store } from '..';

export interface ErrorLogState {
    errorLogInfoList: Nullable<ErrorLogInfo[]>;
    errorLogListCount: number;
}

export const useErrorLogStore = defineStore({
    id: 'error-log',
    state: (): ErrorLogState => ({
        errorLogInfoList: null,
        errorLogListCount: 0,
    }),
    getters: {
        getErrorLogInfoList(): ErrorLogInfo[] {
            return this.errorLogInfoList || [];
        },
        getErrorLogListCount(): number {
            return this.errorLogListCount;
        },
    },
    actions: {
        addErrorLogInfo(info: ErrorLogInfo) {
            const item = {
                ...info,
                time: formatToDateTime(new Date()),
            };
            this.errorLogInfoList = [item, ...(this.errorLogInfoList || [])];
            this.errorLogListCount += 1;
        },
    },
})

export function useErrorLogStoreWithOut() {
    return useErrorLogStore(store);
}
