<template>
  <div class="primary-attribute-wrapper">
    <ul class="attribute-bar">
      <li class="values" v-for="bar in primaryStatus" :key="bar.key">
        <p class="bar-value">{{ bar.valueString }}</p>
        <p class="bar-name">{{ bar.key }}</p>

      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {IGenericKeyValueValue} from "@/Structs/IGenericKeyValueValue";
import {mapState} from "pinia";
import {useMonsterStore} from "@/stores/MonsterStore";

export default defineComponent({
  computed:{
    primaryStatus(): IGenericKeyValueValue[] {
      return [
        {
          key: "STR",
          valueNumber: this.currentMonster?.primaryStats?.str || 0,
          valueString: this.currentMonster?.primaryStats?.str.toString() + '',
        },
        {
          key: "AGI",
          valueNumber: this.currentMonster?.primaryStats?.agi || 0,
          valueString: this.currentMonster?.primaryStats?.agi.toString() + '',
        },
        {
          key: "VIT",
          valueNumber: this.currentMonster?.primaryStats?.vit || 0,
          valueString: this.currentMonster?.primaryStats?.vit.toString() + '',
        },
        {
          key: "INT",
          valueNumber: this.currentMonster?.primaryStats?.int || 0,
          valueString: this.currentMonster?.primaryStats?.int.toString() + '',
        },
        {
          key: "DEX",
          valueNumber: this.currentMonster?.primaryStats?.dex || 0,
          valueString: this.currentMonster?.primaryStats?.dex.toString() + '',
        },
        {
          key: "LUK",
          valueNumber: this.currentMonster?.primaryStats?.luk || 0,
          valueString: this.currentMonster?.primaryStats?.luk.toString() + '',
        }
      ];
    },
    ...mapState(useMonsterStore, ['currentMonster'])

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
