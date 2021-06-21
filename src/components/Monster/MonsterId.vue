<template>
  <div id="wrapper">

    <div class="monster-name">
      <h1>{{ name }}</h1>
      <div class="monster-id">
        <h1>{{ id }}</h1>
      </div>
    </div>
    <div class="monster-gif">
      <img alt="" v-bind:src="gif">
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {mapState} from "pinia";
import {useMonsterStore} from "@/stores/MonsterStore";

export default defineComponent({
  computed: {
    id(): number{
      return this.currentMonster.id || 0;
    },
    name(): string{
      return this.currentMonster.name || "";
    },
    gif(): string{
      return this.currentMonster.gifUrl || "";
    },
    // ...mapStores(useMonsterStore)
    ...mapState(useMonsterStore, ['currentMonster'])
  }

})

</script>


<style scoped lang="css">

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
  /*background-color: var(--test-color);*/
  align-items: center;
  display: flex;
  box-shadow: 0 5px 12px .1rem rgba(0, 0, 0, 0.3);

}

.monster-id {
  width: 85px;
  height: 45px;
  align-items: center;
  background-color: #6C6C95;
  right: 8px;
  margin-right: 15px;
  box-shadow: 0 3px 12px .1rem rgba(0, 0, 0, 0.2);


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
  margin-top: 1.5rem;
  padding-top: 4rem;
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 1.5s;


}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
