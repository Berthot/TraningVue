<template>
  <div class="monster-status">
    <div class="top-side">
      <ul>
        <li v-for="stat in status" :key="stat.key">
          <div class="status-item">
            <img :src="stat.icon" alt="">
          </div>
        </li>
      </ul>
    </div>

    <div class="bot-side">
      <IsMvp :mvp="mvp"/>
      <div class="attributes">

      </div>
    </div>

  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import IsMvp from "@/components/Monster/MonsterStatus/IsMvp.vue";
import {GenericKeyValue} from "@/Structs/GenericKeyValue";

export default defineComponent({
  components: {IsMvp},
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
  list-style: none ;
}


.monster-status {
  border-radius: 10px;
  position: relative;
  background-color: #8D95D7;
  height: 200px;
  margin-bottom: 15px;

}

.top-side {
  display: flex;
  justify-content: space-between;
  /*background-color: red;*/
  height: 70px;
  width: 430px;
  padding-top: 10px;
}

li img {
  width: 30px;
  height: 30px;
}

.status-item {
  display: flex;
  height: 70px;
  width: 110px;
  background-color: #6C6C95;
}

.bot-side {
  display: flex;
  height: 100px;
  width: 430px;
  padding-top: 10px;

  /*background-color: aqua;*/
}

.mvp-tag span {
  margin: 0;
}

.mvp-tag > span > img {
  width: 110px;
  height: 100px;
  margin-left: 0;
}

.attributes {
  height: 100%;
  width: 260px;
  background-color: gold;
}

</style>
