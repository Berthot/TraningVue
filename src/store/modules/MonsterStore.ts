// import {Module} from 'vuex'
// import {MonsterRequest} from "@/Structs/MonsterApi";
// import axios from "axios";
// import {RootState, MonsterState} from "@/store/interfaces";
//
//
// export const MonsterModule: Module<MonsterState, RootState>= {
//     state: {
//         monsters: []
//     },
//     mutations: {
//         addNewMonster (state, value: MonsterRequest) {
//             state.monsters.push(value)
//         }
//     },
//     actions:{
//         async getMonsterById({getters, commit}, id) {
//             const monster = getters.monsterById(id)
//
//             if (monster !== undefined) {
//                 return monster;
//             }
//             return await axios.get(`https://localhost:5001/api/Monster/${id}`).then(r => {
//                 const response: MonsterRequest = r.data;
//                 commit("addNewMonster", response)
//                 console.log(response.dbName)
//                 return response
//             })
//         }
//     },
//     getters:{
//         monsterById(context, id){
//             return context.monsters.find(x => x.id === id)
//         }
//     }
// }
