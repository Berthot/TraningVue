<template>
  <div id="wrapper">

    <div class="monster-name">
      <h1>{{ monsterName }}</h1>
      <div class="monster-id">
        <h1>{{ identify }}</h1>
      </div>
    </div>
    <div class="monster-gif">
      <img alt="" src="../../assets/kiel.gif">
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

<!--<style>-->
<!-- @import "src/styles/Variables.css";-->
<!--</style>-->

<style scoped lang="css">
@import "src/styles/Variables.css";

* {
  box-sizing: border-box;
  border-radius: 10px;

}

#wrapper {
  width: 300px;
  height: 400px;
  /*background-color: greenyellow;*/
}

.monster-name {
  box-sizing: border-box;
  height: 70px;
  background-color: #8D95D7;
  align-items: center;
  display: flex;
}

.monster-id {
  width: 85px;
  height: 45px;
  align-items: center;
  background-color: #6C6C95;
  right: 8px;
  margin-right: 15px;

}

.monster-id h1 {
  position: relative;
  top: 5px;
  text-align: center;
}

.monster-name h1 {
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


}

.monster-gif img{
  object-fit: fill;
  display: block;
  margin-left: auto;
  margin-right: auto;
  /*width: 170px;*/
  height: auto;

}


</style>
