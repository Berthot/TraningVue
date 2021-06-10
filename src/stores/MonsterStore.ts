import {defineStore} from "pinia";
import {MonsterRequest} from "@/Structs/MonsterApi";
import axios from "axios";
// import mocJson from "@/assets/valk.json"
import notEmpty from "@/helpers/notEmpty";

// esse partial faz todos os atributos da interface serem opcionais, da para você tirar ele depois, ou definir isso direto na interface
export type MonsterRequestOpcional = Partial<MonsterRequest>;

export interface MonsterState {
    monsters: MonsterRequestOpcional[];
    currentMonster: MonsterRequestOpcional;
}

export const useMonsterStore = defineStore({
    id: 'monster',
    state(): MonsterState {
        return {
            currentMonster: {} as MonsterRequestOpcional,
            monsters: []
        }
    },
    actions: {
        async fetchMonsterById(id: number): Promise<void> {
            if (notEmpty(this.monsterById(id))) {
                return;
            }
            // console.log(process.env.VUE_APP_MONSTER_API)
            // return await new Promise(r => setTimeout(r, 2000));
            return await axios.get(process.env.VUE_APP_MONSTER_API + id.toString()).then((response) => {
                const monster: MonsterRequest = response.data;
                this.addMonster(monster);

            }).catch(() => {
                console.log("ERRO CABULOZO AO TENTAR PEGAR O MONSTRO");
            })
        },
        monsterById(id: number): MonsterRequestOpcional {
            const monster = this.monsters.find((monster: MonsterRequestOpcional) => monster.id === id);
            if (monster) {
                return monster;
            }
            return {};
        },
        addMonster(monster: MonsterRequest): void {
            this.monsters.push(monster);
        },
        setCurrentMonster(monster: MonsterRequestOpcional): void {
            this.currentMonster = monster
        },
        fetchMonsterAndSetCurrentById(id: number): void{
            this.fetchMonsterById(id).then(() => {
                console.log(this.monsters.length)
                const monster  = this.monsterById(id);
                this.setCurrentMonster(monster)
            })
        }
    },
    getters: {
        getMonsters(): MonsterRequestOpcional[] {
            return this.monsters;
        },
    }
});
