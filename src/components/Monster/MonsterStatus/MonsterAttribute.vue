<template>
  <div class="monster-attribute">
    <ul class="attributes-items">
      <li v-for="item in GetItems()" :key="item.key">
        <MonsterAttributeItems :name="item.key" :value="item.value"/>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {GenericKeyValue} from "@/Structs/GenericKeyValue";
import MonsterAttributeItems from "@/components/Monster/MonsterStatus/MonsterAttributeItems.vue";

export default defineComponent({
  components: {MonsterAttributeItems},
  data() {
    return {
      "atq": "1111-2222",
      "atqm": "1111-2222",
      "def": "123",
      "mdef": "123",
      "health": "2502000",
      "aspd": "1.75",
      "flee": "574",
      "hit": "512",
    }
  },
  methods: {
    GetItems(): GenericKeyValue[] {
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
          "value": this.atq
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
      ] as GenericKeyValue[]
    },
  },
  props: {},
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
