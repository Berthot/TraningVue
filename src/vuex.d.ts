import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import {MonsterState, State} from "@/store/state";

declare module '@vue/runtime-core' {
    // declare your own index states

    // provide typings for `this.$index`
    interface ComponentCustomProperties {
        $store: Store<State, MonsterState>
    }
}
