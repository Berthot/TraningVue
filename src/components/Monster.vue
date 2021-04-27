<template>
  <div>
    <h1>Ifrit</h1>

    <div class="monster-gif">
      <img alt="" src="../assets/ifrit.gif">
    </div>

    <div class="info">
      info
    </div>

<!--    <div class="status">-->
<!--      status-->
<!--    </div>-->

<!--    <div class="element">-->
<!--      element-->
<!--    </div>-->

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  props: {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/** {*/
/*  box-sizing: border-box;*/
/*}*/
/*.bg {*/
/*  background-color: aquamarine;*/
/*  !*height: 100vh;*!*/
/*  !*height: 100%;*!*/
/*}*/

.monster-gif {
  width: 12%;
  height: 35%;
  background-color: chartreuse;

}

.info {
  /*position: relative;*/
  width: 43%;
  height: 35%;
  background-color: chocolate;
  left: 11%;

}

/*.element {*/
/*  !*position: relative;*!*/
/*  width: 56%;*/
/*  height: 15%;*/
/*  background-color: red;*/
/*  left: 10%;*/
/*  top: 2%;*/
/*  text-align: left;*/
/*}*/

/*.status {*/
/*  !*position: relative;*!*/
/*  width: 300px;*/
/*  height: 120px;*/
/*  background-color: darkblue;*/
/*  margin-left: 25%;*/
/*  padding: 25px;*/
/*  right: 10%;*/
/*  !*padding-left: 25%;*!*/
/*}*/


</style>
