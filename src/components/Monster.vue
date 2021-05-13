<template>


  <div id="monster-wrapper">
    <div class="monster-gif">
      <MonsterId :identify="ragnaLibApi.id" :monsterName="ragnaLibApi.name" :gifImage="ragnaLibApi.gifUrl"/>
    </div>
    <div class="monster-attributes">
      <MonsterStatus/>
      <MonsterAttribute/>
    </div>
    <div class="monster-element">
      <MonsterElement/>
    </div>

  </div>

  <div id="monster-supply">
    <MonsterExperience :base="ragnaLibApi.experience.base" :job="ragnaLibApi.experience.job" :mvp="0"/>
    <MonsterItemMobMap/>
  </div>


</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MonsterId from "@/components/Monster/MonsterId.vue";
import MonsterAttribute from "@/components/Monster/MonsterStatus/MonsterAttribute.vue";
import MonsterElement from "@/components/Monster/MonsterStatus/MonsterElement.vue";
import MonsterExperience from "@/components/Monster/MonsterSupply/MonsterExperience.vue";
import MonsterItemMobMap from "@/components/Monster/MonsterSupply/MonsterItemMobMap.vue";
import MonsterStatus from "@/components/Monster/MonsterStatus/MonsterStatus.vue";
import mocJson from "@/assets/valk.json"

export default defineComponent({

  components: {MonsterStatus, MonsterItemMobMap, MonsterExperience, MonsterElement, MonsterAttribute, MonsterId},
  data() {
    return {
      json: {
        gifImage: "https://static.ragnaplace.com/db/npc/gif/2109.gif",
        Name: "Valkyrie Randgris",
        Id: 1734,
        mLevel: 112,
        mRace: "Angel",
        mSize: "Large",
        Attributes: {
          "str": 166, "agi": 187, "vit": 155, "int": 141, "dex": 279, "luk": 180
        },
        isMvp: true,
        job: 792000,
        base: 1170000,
        mvp: 0
      },
      ragnaLibApi: mocJson
    }
  },

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
