import {defineStore} from "pinia";


export interface ActualLocationNavBar {
    actualValue: string;
}

export const useDropLocationStore = defineStore({
    id: 'dropLocation',
    state(): ActualLocationNavBar {
        return {
            actualValue: "Drop"
        }
    },
    actions: {
        addNewValue(newValue: string): void {
            if(newValue.trim() == "")
                return
            this.actualValue = newValue + ''
        },
    },
    getters: {
    }
});
