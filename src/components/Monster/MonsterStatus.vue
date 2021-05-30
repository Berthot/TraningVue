<template>
  <div class="wrapper-monster-status">
    <ul class="level-race-size">
      <li v-for="stat in status" :key="stat.key">
        <MonsterSizeLevelRace :stat="stat"/>
      </li>
    </ul>

    <!--    <div class="mvp-attribute">-->
    <!--      <IsMvp :mvp="mvp"/>-->

    <!--      <div class="attributes">-->
    <!--      </div>-->
    <!--    </div>-->

  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import MonsterSizeLevelRace from "@/components/Monster/MonsterSizeLevelRace.vue";
// import IsMvp from "@/components/Monster/MonsterStatus/IsMvp.vue";

export default defineComponent({
  components: {MonsterSizeLevelRace},
  data() {
    return {
      "mvp": true,
      "level": 123,
      "status": [
        {
          "key": "Level",
          "value": "122",
          "icon": require("@/assets/level-icon.png")
        },
        {
          "key": "Race",
          "value": "Demi-Human",
          "icon": require("@/assets/race-icon.png")
        },
        {
          "key": "Size",
          "value": "Large",
          "icon": require("@/assets/medium-icon.png")
        },
      ]
    }
  },
  props: {},
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
  border-radius: 10px;
  position: relative;
  background-color: #8D95D7;
  height: 200px;
  margin-bottom: 15px;


}

.level-race-size {
  display: flex;
  gap: 15px;
  height: 70px;
  width: 430px;
  padding: 10px 0;
  margin: 0;
}

.level-race-size {
  display: flex;
  padding: 0;
  margin: 0 5px;
}


.level-race-size > li {
  display: flex;
  padding: 0;
  margin: 15px 10px;
}

.mvp-attribute {
  display: flex;
  height: 100px;
  width: 430px;
  padding-top: 10px;

  /*background-color: aqua;*/
}

.attributes {
  height: 100%;
  width: 260px;
  background-color: gold;
}

</style>
