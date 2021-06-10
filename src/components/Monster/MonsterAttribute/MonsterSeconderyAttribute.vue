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
import {defineComponent, PropType} from "vue";
import {GenericKeyValue} from "@/Structs/GenericKeyValue";
import MonsterAttributeItems from "@/components/Monster/MonsterAttribute/MonsterAttributeItems.vue";
import {SecondaryStats} from "@/Structs/MonsterApi";
import {IMonsterAttack} from "@/Structs/IMonsterAttack";
import {IMonsterDefense} from "@/Structs/IMonsterDefense";

export default defineComponent({
  components: {MonsterAttributeItems},
  props: {
    attack: {
      type: Object as PropType<IMonsterAttack>,
      required: true
    },
    defense: {
      type: Object as PropType<IMonsterDefense>,
      required: true
    },
    monsterAttributes: {
      type: Object as PropType<SecondaryStats>,
      required: true
    }
  },
  data() {
    return {
      "atq": this.attack.physical,
      "atqm": this.attack.magic,
      "def": this.defense.physical,
      "mdef": this.defense.magic,
      "health": this.monsterAttributes.hp + '',
      "aspd": this.monsterAttributes.attackSpeed + '',
      "flee": this.monsterAttributes.flee + '',
      "hit": this.monsterAttributes.hit + '',
    }
  },
  computed: {
    items(): GenericKeyValue[] {
      return [
        {
          "key": "ATQ",
          "value": this.atq
        },
        {
          "key": "ATQM",
          "value": this.atqm
        },
        {
          "key": "DEF",
          "value": this.def
        },
        {
          "key": "MDEF",
          "value": this.mdef
        },
        {
          "key": "HP",
          "value": this.health
        },
        {
          "key": "ASPD",
          "value": this.aspd
        },
        {
          "key": "FLEE",
          "value": this.flee
        },
        {
          "key": "HIT",
          "value": this.hit
        },
      ];
    },
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

}


</style>
