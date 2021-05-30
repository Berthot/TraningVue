import { InjectionKey } from 'vue'
import {useStore as baseUseStore, Store, ModuleTree} from 'vuex'
import {MonsterState, State} from "@/store/state";
import {monsterStore} from "@/store/modules/MonsterStore";
import {RootState} from "@/store/interfaces";


// export const key: InjectionKey<Store<State>> = Symbol()

const modules: ModuleTree<RootState> = {
    counterModule,
};

export const store = ({
    modules:{
        monsterStore
    }
})

// define your own `useStore` composition function
export function useStore (): Store {
    return store as Store
}
