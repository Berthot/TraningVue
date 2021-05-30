import {defineStore} from "pinia";

interface CounterState {
    counter: number;
}

export const useCounterStore = defineStore({
    id: 'counter',
    state(): CounterState {
        return {
            counter: 0
        }
    },
    actions: {
        increment() {
            this.counter++
        },
        incrementBy(num: number) {
            this.counter += num;
        },
    },
    getters: {
        getCounter(state): number {
            return state.counter;
        }
    }
});
