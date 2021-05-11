<template>
  <div id="wrapper">

    <div class="monster-name">
      <h1>{{ monsterName }}</h1>
      <div class="monster-id">
        <h1>{{ identify }}</h1>
      </div>
    </div>
    <div class="monster-gif">
      <img alt="" src="../assets/kiel.gif">
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    identify: Number,
    monsterName: String
  },

})

</script>
<style scoped>

* {
  box-sizing: border-box;
  border-radius: 10px;

}

#wrapper {
  position: absolute;
  width: 300px;
  height: 350px;
  background-color: greenyellow;
}

.monster-name {
  position: relative;
  box-sizing: border-box;
  height: 70px;
  background-color: #8D95D7;
  align-items: center;
  display: flex;
}

.monster-id {
  position: relative;
  width: 85px;
  height: 45px;
  align-items: center;
  background-color: #6C6C95;
  right: 8px;
}

.monster-id h1 {
  position: relative;
  top: 5px;
  text-align: center;
}

.monster-name h1 {
  position: relative;
  margin: auto;
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
  line-height: 35px;
  /*padding-right: 20px;*/

}

.monster-gif {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 4rem;
  width: 50%;
}


</style>
