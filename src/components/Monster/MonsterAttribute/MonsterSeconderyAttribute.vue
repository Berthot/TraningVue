<template>
  <div class="monster-attribute">
    <ul class="attributes-items">
      <li v-for="item in items" :key="item.key">
        <MonsterAttributeItems :name="item.key" :value="item.value"/>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {GenericKeyValue} from "@/Structs/GenericKeyValue";
import MonsterAttributeItems from "@/components/Monster/MonsterAttribute/MonsterAttributeItems.vue";
import {mapState} from "pinia";
import {useMonsterStore} from "@/stores/MonsterStore";

export default defineComponent({
  components: {MonsterAttributeItems},
  computed: {
    items(): GenericKeyValue[] {
      return [
        {
          "key": "ATQ",
          "value": this.currentMonster.physicalAttack + ''
        },
        {
          "key": "ATQM",
          "value": this.currentMonster.magicAttack + ''
        },
        {
          "key": "DEF",
          "value": this.currentMonster.physicalDefense + ''
        },
        {
          "key": "MDEF",
          "value": this.currentMonster.magicDefense + ''
        },
        {
          "key": "HP",
          "value": this?.currentMonster?.secondaryStats?.hp.toString() + ''
        },
        {
          "key": "ASPD",
          "value": this?.currentMonster?.secondaryStats?.attackSpeed.toString() + ''
        },
        {
          "key": "FLEE",
          "value": this?.currentMonster?.secondaryStats?.flee.toString() + ''
        },
        {
          "key": "HIT",
          "value": this?.currentMonster?.secondaryStats?.hit.toString() + ''
        },
      ];
    },
    ...mapState(useMonsterStore, ['currentMonster'])
  },
})
</script>
<style scoped>


.attributes-items {
  position: relative;
  padding-top: 0.7rem;

}

ul {
  display: grid;
  /*grid-template-columns: 23% 23% 23% 23%;*/
  grid-template-columns: 0 0 0 0;
  gap: 2rem 7rem;
}

li {
  width: max-content;
  list-style: none;
}


* {
  width: 460px;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style: none;

}

.monster-attribute {
  border-radius: 10px;
  position: relative;
  height: 185px;
  background-color: #8D95D7;
  margin: 0 15px 15px;
  z-index: 10;
  padding: 15px 17px;
  box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.4);


}


</style>
