<template>


    <div id="monster-wrapper">
      <div class="monster-gif">
        <MonsterId :identify="json.Id" :monsterName="json.Name"/>
      </div>
      <div class="monster-attributes">
        <MonsterAttribute/>
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
import MonsterAttribute from "@/components/Monster/MonsterAttribute.vue";
import MonsterElement from "@/components/Monster/MonsterElement.vue";
import MonsterExperience from "@/components/Monster/MonsterSupply/MonsterExperience.vue";
import MonsterItemMobMap from "@/components/Monster/MonsterSupply/MonsterItemMobMap.vue";

export default defineComponent({
  components: {MonsterItemMobMap, MonsterExperience, MonsterElement, MonsterAttribute, MonsterId},
  data() {
    return {
      json: {
        Name: "KIEL-D-01",
        Id: 1734,
        mLevel: 112,
        mRace: "Formless",
        mSize: "Medium",
        Attributes: {
          "str": 166, "agi": 187, "vit": 155, "int": 141, "dex": 279, "luk": 180
        },
        isMvp: true
      },

    }
  },

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#monster-wrapper {
  display: flex;

}


#monster-supply {
  display: flex;
}


</style>
