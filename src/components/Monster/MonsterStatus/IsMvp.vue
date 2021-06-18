<template>

  <div class="mvp-tag">
        <span v-if="currentMonster.isMvp">
            <img alt="" src="https://i.ibb.co/hgCJ27p/mvp-on.png">
        </span>
    <span v-else>
            <img alt="" src="https://i.ibb.co/CHKzsqm/mvp-off.png">
        </span>
  </div>
</template>
<script lang="ts">
import {mapState} from "pinia";
import {useMonsterStore} from "@/stores/MonsterStore";

export default {
  computed:{
    ...mapState(useMonsterStore, ['currentMonster'])
  }
}
</script>
<style scoped>

* {
  width: 460px;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 0 15px 15px;
}


.mvp-tag {
  height: 100%;
  width: 110px;
  margin: 0;
  /*background-color: red;*/
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 2s;

}

.mvp-tag span {
  margin: 0;
}

.mvp-tag > span > img {
  transition:  width 4s, height 4s, transform 5s;
  width: 110px;
  height: 100px;
  margin-left: 0;

}
@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>
