import {defineStore} from "pinia";
import {MonsterRequest} from "@/Structs/MonsterApi";
import axios from "axios";

// esse partial faz todos os atributos da interface serem opcionais, da para você tirar ele depois, ou definir isso direto na interface
export type MonsterRequestOpcional = Partial<MonsterRequest>;

export interface MonsterState {
    monsters: MonsterRequestOpcional[];
}

export const useMonsterStore = defineStore({
    id: 'monster',
    state(): MonsterState {
        return {
            monsters: [{
                id: 1,
                name: 'poring'
            }]
        }
    },
    actions: {
        async fetchMonsterById(id: number): Promise<void> {
            if (this.monsterById(id) !== undefined) {
                return;
            }
            return await axios.get('https://localhost:5001/api/Monster/' + id).then((response) => {
                const monster: MonsterRequest =  response.data;
                this.addMonster(monster);
            }).catch((err) => {
                console.log("ERRO CABULOZO AO TENTAR PEGAR O MONSTRO");
            })
        },
        monsterById(id: number): MonsterRequestOpcional | undefined {
            return this.monsters.find((monster: MonsterRequestOpcional) => monster.id === id);
        },
        addMonster(monster: MonsterRequest): void {
            this.monsters.push(monster);
        }
    },
    getters: {
        getMonsters(): MonsterRequestOpcional[] {
            return this.monsters;
        }
    }
});
