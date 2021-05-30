import {defineStore} from "pinia";

interface MainCounter {
    counter: number;
}

export const useStore = defineStore({
    id: 'counterStore',
    state(): MainCounter {
        return {
            counter: 0
        }
    },
    actions: {
        increment() {
            this.counter++
        },
    },
     getters: {
        getCounter(state): number {
            return state.counter;
        }
     }
});
