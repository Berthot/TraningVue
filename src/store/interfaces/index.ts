import {MonsterRequest} from "@/Structs/MonsterApi";

export interface RootState {
    count: number
}

export interface MonsterState {
    monsters: MonsterRequest[]
}
