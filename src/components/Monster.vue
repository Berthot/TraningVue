<template>


  <div id="monster-wrapper">
    <div class="monster-gif">
      <MonsterId :identify="monster.id" :monsterName="monster.name" :gifImage="monster.gifUrl"/>
    </div>
    <div class="monster-attributes">
      <MonsterStatus :monsterAttributes="monster.primaryStats" :mvp="monster.isMvp" :level="monster.level" :race="monster.race" :size="monster.size"/>
      <MonsterAttribute :monsterAttributes="monster.secondaryStats" :attack="getAttack()" :defense="getDefense()"/>
    </div>
    <div class="monster-element">
      <MonsterElement/>
    </div>

  </div>

  <div id="monster-supply">
    <MonsterExperience/>
    <MonsterItemMobMap/>
  </div>


</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MonsterId from "@/components/Monster/MonsterId.vue";
import MonsterAttribute from "@/components/Monster/MonsterAttribute/MonsterSeconderyAttribute.vue";
import MonsterElement from "@/components/Monster/MonsterElement.vue";
import MonsterExperience from "@/components/Monster/MonsterExperience.vue";
import MonsterItemMobMap from "@/components/Monster/MonsterItemMobMap.vue";
import MonsterStatus from "@/components/Monster/MonsterStatus.vue";
import {MonsterRequestOpcional, useMonsterStore} from "@/stores/MonsterStore";
import {mapState, mapStores} from 'pinia';

export default defineComponent({

  components: {MonsterStatus, MonsterItemMobMap, MonsterExperience, MonsterElement, MonsterAttribute, MonsterId},
  data() {
    return {
      monster: {} as MonsterRequestOpcional,
    }
  },
  created() {
    const monsterId = Number(this.$route.params.id);
    this.monsterStore.fetchMonsterAndSetCurrentById(monsterId);
  },
  computed: {
    ...mapStores(useMonsterStore),
    ...mapState(useMonsterStore, ['currentMonster'])
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
