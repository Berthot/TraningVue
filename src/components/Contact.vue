<template>
  <div class="bar-wrapper">
    <ul class="attribute-bar">

      <li class="values" v-for="bar in primaryStatus()" :key="bar.key">
        <div class="bar" :style="{height: GetPercent(bar.valueNumber) + '%'}">
          <p class="bar-value">{{ bar.valueNumber + '' }}</p>
          <p class="bar-name">{{ bar.key }}</p>
        </div>

      </li>

    </ul>
  </div>
</template>


<script lang="ts">
import {defineComponent} from 'vue';
import {IGenericKeyValueValue} from "@/Structs/IGenericKeyValueValue";

export default defineComponent({

  data() {
    return {
      monster: "",
      maxValue: this.GetMaxValue()
    }
  },
  computed: {},
  methods: {
    GetMaxValue(): number {
      let values = this.primaryStatus().filter(x => x.valueNumber);
      return Math.max.apply(0, values.map(x=>x.valueNumber));
    },
    GetPercent(actual: number): number{
      return (actual * 100) / this.maxValue;
    },
    primaryStatus(): IGenericKeyValueValue[] {
      return [
        {
          key: "STR",
          valueNumber: 100,
          valueString: "100"
        },
        {
          key: "AGI",
          valueNumber: 90,
          valueString: "90"
        },
        {
          key: "VIT",
          valueNumber: 80,
          valueString: "80"
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

.bar-wrapper {
  margin: 0 0 0 0;
  height: 93px;
  width: 430px;
  /*background-color: red;*/
}

.attribute-bar {
  /*padding: 10px 0 0 20px;*/
  padding: 0 0 0 20px;
  display: flex;
  position: relative;
  gap: 50px;
  background-color: deeppink;
  height: 100%;
  /*display: block;*/
}


.bar {
  background-color: cyan;
  position: absolute;
  /*display: block;*/
  border-radius: 5px 5px 0 0;
  width: 2rem;
  height: 30%;
  bottom: 0;
}

.bar-value {
}

.bar-name {
  white-space: nowrap;
}
</style>
