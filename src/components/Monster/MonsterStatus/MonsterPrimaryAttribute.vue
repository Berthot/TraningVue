<template>
  <div class="primary-attribute-wrapper">
    <ul class="attribute-bar">
      <li class="values" v-for="bar in primaryStatus" :key="bar.key">

        <div class="bar" :style="{height: GetPercent(bar.valueNumber) + '%'}">        </div>
        <div class="bar-name">
          <p>{{bar.key}}</p>
        </div>
        <div class="bar-value" :style="{height: (GetBarValueHeight(bar.valueNumber)) + '%'}">
          <p>{{ bar.valueNumber + '' }}</p>
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
  data() {
    return {
      maxHeight: 75
    }
  },
  methods: {
    GetBarValueHeight(actual: number): number{
      const percent = this.GetPercent(actual)
      if((this.maxHeight - 10) <= percent)
        return percent
      return percent + 18

    },
    GetMaxValue(): number {
      let values = this.primaryStatus.filter(x => x.valueNumber);
      return Math.max.apply(0, values.map(x => x.valueNumber));
    },
    GetPercent(actual: number): number {
      return (actual * this.maxHeight) / this.GetMaxValue();
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
  box-shadow: 0 5px 12px 0 rgba(31, 35, 54, 0.4);

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
  background-color: #9AD678;
  position: absolute;
  /*display: block;*/
  border-radius: 5px 5px 0 0;
  width: 2rem;
  height: 0;
  bottom: 0;
  transition: height 1s;

}


.bar-value {
  transition:  height 2s, transform 2s;
  width: 2rem;
  position: absolute;
  z-index: 1;
  white-space: nowrap;
  bottom: 0;
  margin: 0;
  font-size: 0.8em;
  text-align: center;
  text-justify: inter-word;
  font-weight: bold;

}

.bar-name {
  font-weight: bold;
  padding: 0;
  margin: 0;
  white-space: nowrap;
}

.bar-name p{
  padding: 0;
  margin: 0;
}
</style>
