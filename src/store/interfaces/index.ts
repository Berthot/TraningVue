import {MonsterRequest} from "@/Structs/MonsterApi";

export interface RootState {
    monster: MonsterState;
}

export interface MonsterState {
    monsters: MonsterRequest[];
}
