<template>
  <div class="wrapper-monster-status">
    <ul class="level-race-size">
      <li class="level-race-size-items" v-for="stat in CompStatus" :key="stat.key">
        <MonsterSizeLevelRace :keyValueIcon="stat"/>
      </li>
    </ul>

    <div class="attributes">
      <IsMvp :mvp="mvp"/>
      <MonsterPrimaryAttribute :monsterAttributes="monsterAttributes"/>
    </div>

  </div>
</template>
<script lang="ts">
import {defineComponent, PropType} from "vue";
import MonsterSizeLevelRace from "@/components/Monster/MonsterStatus/MonsterSizeLevelRace.vue";
import {KeyValueIcon} from "@/Structs/KeyValueIcon";
import IsMvp from "@/components/Monster/MonsterStatus/IsMvp.vue";
import {PrimaryStats} from "@/Structs/MonsterApi";
import MonsterPrimaryAttribute from "@/components/Monster/MonsterStatus/MonsterPrimaryAttribute.vue";

export default defineComponent({
  components: {MonsterPrimaryAttribute, IsMvp, MonsterSizeLevelRace},
  props: {
    monsterAttributes: {
      type: Object as PropType<PrimaryStats>,
      required: true
    },
    mvp: Boolean,
    level: Number,
    race: String,
    size: String
  },
  data() {
    return {
      status: {} as KeyValueIcon[]
    }
  },

  computed: {
    CompStatus(): KeyValueIcon[] {
      return [
        {
          "key": "Level",
          "value": this.level,
          "icon": require("@/assets/level-icon.png")
        },
        {
          "key": "Race",
          "value": this.race,
          "icon": require("@/assets/race-icon.png")
        },
        {
          "key": "Size",
          "value": this.size,
          "icon": require("@/assets/medium-icon.png")
        },
      ] as KeyValueIcon[]
    }
  },

})
</script>
<style scoped>

* {
  width: 460px;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 0 15px 15px;
  list-style: none;
}

.wrapper-monster-status {
  background-color: #8D95D7;
  height: 200px;
  margin-bottom: 15px;
  padding: 15px 0 0 15px;

}

.level-race-size {
  display: flex;
  gap: 15px;
  height: 70px;
  width: 430px;
  padding: 0;
  margin: 0;
}

.level-race-size-items {
  margin: 0;
  background-color: #6C6C95;
  display: flex;
  height: 70px;
  width: 125px;
}

.level-race-size-items:nth-child(2) {
  width: 150px;
}

.attributes {
  display: flex;
  height: 93px;
  width: 430px;
  margin: 10px 0 0 0;

}



</style>
