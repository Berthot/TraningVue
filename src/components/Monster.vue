<template>


  <div id="monster-wrapper">
    <div class="monster-gif">
      <MonsterId :identify="monster.id" :monsterName="monster.name" :gifImage="monster.gifUrl"/>
    </div>
    <div class="monster-attributes">
      <MonsterStatus :level="monster.level" :race="monster.race" :size="monster.size"/>
      <MonsterAttribute :attributes="monster.secondaryStats" :attack="getAttack()" :defense="getDefense()"/>
    </div>
    <div class="monster-element">
      <MonsterElement/>
    </div>

  </div>

  <div id="monster-supply">
    <MonsterExperience :base="monster.experience?.base" :job="monster.experience?.job" :mvp="0"/>
    <MonsterItemMobMap/>
  </div>


</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MonsterId from "@/components/Monster/MonsterId.vue";
import MonsterAttribute from "@/components/Monster/MonsterAttribute.vue";
import MonsterElement from "@/components/Monster/MonsterElement.vue";
import MonsterExperience from "@/components/Monster/MonsterSupply/MonsterExperience.vue";
import MonsterItemMobMap from "@/components/Monster/MonsterSupply/MonsterItemMobMap.vue";
import MonsterStatus from "@/components/Monster/MonsterStatus.vue";
import {MonsterRequestOpcional, useMonsterStore} from "@/stores/MonsterStore";
import {mapStores} from 'pinia';
import {IMonsterAttack} from "@/Structs/IMonsterAttack";
import {IMonsterDefense} from "@/Structs/IMonsterDefense";

export default defineComponent({

  components: {MonsterStatus, MonsterItemMobMap, MonsterExperience, MonsterElement, MonsterAttribute, MonsterId},
  data() {
    return {
      monster: {} as MonsterRequestOpcional,
    }
  },

  methods: {
    getAttack(): IMonsterAttack {
      return {
        physical: this.monster.physicalAttack,
        magic: this.monster.magicAttack
      } as IMonsterAttack
    },
    getDefense(): IMonsterDefense {
      return {
        physical: this.monster.physicalDefense,
        magic: this.monster.magicDefense
      } as IMonsterDefense
    }
  },
  created() {
    const monsterId = Number(this.$route.params.id);
    this.monsterStore.fetchMonsterById(monsterId).then(() => {
      this.monster = this.monsterStore.monsterById(monsterId);
    })
  },
  computed: {
    ...mapStores(useMonsterStore)
  }

});
</script>

<style scoped>

#monster-wrapper {
  display: flex;
  flex-direction: row;
}


#monster-supply {
  display: flex;
  flex-direction: row;

}

@media (max-width: 768px) {
  #monster-wrapper {
    flex-flow: column nowrap;
  }

  #monster-supply {
    flex-flow: column nowrap;
  }
}

</style>
