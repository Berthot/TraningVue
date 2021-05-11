<template>
  <div id="monster-core">

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
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MonsterId from "@/components/MonsterId.vue";
import MonsterAttribute from "@/components/MonsterAttribute.vue";
import MonsterElement from "@/components/MonsterElement.vue";

export default defineComponent({
  components: {MonsterElement, MonsterAttribute, MonsterId},
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

#monster-core {
  display: flex;
  height: 400px;

}

.monster-gif {
  width: 300px;
}




</style>
