<template>
  <div class="primary-attribute-wrapper">
    <ul class="attribute-bar">
      <li class="values" v-for="bar in primaryStatus" :key="bar.key">
        <div class="bar" :style="{height: GetPercent(bar.valueNumber) + '%'}">
          <p class="bar-value">{{ bar.valueNumber + '' }}</p>
        </div>
        <div class="bar-name">
          <p>{{bar.key}}</p>
        </div>
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
  methods: {
    GetMaxValue(): number {
      let values = this.primaryStatus.filter(x => x.valueNumber);
      return Math.max.apply(0, values.map(x => x.valueNumber));
    },
    GetPercent(actual: number): number {
      return (actual * 75) / this.GetMaxValue();
    },
  },
  computed: {
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
  border-radius: 10px;
  /*padding: 10px 0 0 20px;*/
  padding: 0 0 0 20px;
  display: flex;
  position: relative;
  gap: 22px;
  background-color: var(--primary-color);
  height: 100%;
  /*display: block;*/
}

.values{
  display: flex;
  flex-direction: column;
}

.bar {
  background-color: cyan;
  position: absolute;
  /*display: block;*/
  border-radius: 5px 5px 0 0;
  width: 2rem;
  height: 0;
  bottom: 0;
}

.bar-value {
  font-size: 0.7em;
  text-align: center;
  text-justify: inter-word;
  font-weight: bold;
}

.bar-name {
  margin-bottom: 10px;
  white-space: nowrap;
}
</style>
