<template>
  <div class="primary-attribute-wrapper">
    <ul class="attribute-bar">
      <li class="values" v-for="bar in batata" :key="bar.key">
<!--        <p class="bar-value">{{ bar.valueString }}</p>-->
        <p class="bar-name">{{ bar.key }}</p>

      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {PrimaryStats} from "@/Structs/MonsterApi";
import {IGenericKeyValueValue} from "@/Structs/IGenericKeyValueValue";

export default defineComponent({
  props: {
    monsterAttributes: Object
  },
  created() {
    console.log(this.monsterAttributes)
  },
  computed:{
    batata(): IGenericKeyValueValue[] {
      return [
        {
          key: "STR",
          valueNumber: this.monsterAttributes?.str,
          valueString: this.monsterAttributes?.str,
        },
        {
          key: "AGI",
          valueNumber: 90,
          valueString: "String(this.attributes.agi)"
        },
        {
          key: "VIT",
          valueNumber: 80,
          valueString: "String(this.attributes.vit)"
        },
        {
          key: "INT",
          valueNumber: 70,
          valueString: "String(this.attributes.int)"
        },
        {
          key: "DEX",
          valueNumber: 0,
          valueString: "String(this.attributes.dex)"
        },
        {
          key: "LUK",
          valueNumber: 30,
          valueString: "String(this.attributes.luk)"
        }
      ];
    }
  }

});
</script>

<style scoped>


* {
  box-sizing: border-box;
  list-style: none;

}

.primary-attribute-wrapper {
  width: 470px;
  border-radius: 10px;
  display: block;
  height: 100%;
  margin: 0 0 0 0;
  /*background-color: red;*/
}

.attribute-bar {
  padding: 10px 0 0 20px;
  display: flex;
  gap: 20px;
  background-color: deeppink;
}

.values {
  display: block;
  flex-direction: column;
  height: 64px;
  width: 30px;
  background-color: cyan;
  border-radius: 4px 4px 0 0;

}

.bar-value {
  font-size: 10px;
  font-weight: bold;
  display: flow;
  height: 35px;
  width: 30px;
  text-align: center;
}

.bar-name {
  font-weight: bold;
  margin-top: 29px;
  white-space: nowrap;
  width: 30px;
  height: 20px;
  /*background-color: orange;*/
}
</style>
