<template>
  <div class="bar-wrapper">
<!--    <ul class="attribute-bar">-->

<!--      <li class="values" v-for="bar in GetAttributes()" :key="bar.key">-->
<!--        <div class="bar" :style="{height: `${this.GetPercent(bar.valueNumber)}%`}">-->
<!--        </div>-->
<!--        &lt;!&ndash;        <p class="bar-value">{{ bar.valueString }}</p>&ndash;&gt;-->
<!--        &lt;!&ndash;        <p class="bar-name">{{ bar.key }}</p>&ndash;&gt;-->
<!--      </li>-->

<!--    </ul>-->
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
  computed:{

  },
  methods: {
    // GetMaxValue(): number {
    //   let values = this.batata().filter(x => x.valueNumber);
    //   return Math.max.apply(0, values.values());
    // },
    // GetPercent(actual: number): number{
    //   return (actual * 100) / this.maxValue;
    // },
    batata(): IGenericKeyValueValue[] {
      return [
        {
          key: "STR",
          valueNumber: 100,
          valueString: "String(this.attributes.str)"
        },
        {
          key: "AGI",
          valueNumber: 90,
          valueString: "String(this.attributes.agi)"
        },
        // {
        //   key: "VIT",
        //   valueNumber: 80,
        //   valueString: "String(this.attributes.vit)"
        // },
        // {
        //   key: "INT",
        //   valueNumber: 70,
        //   valueString: "String(this.attributes.int)"
        // },
        // {
        //   key: "DEX",
        //   valueNumber: 0,
        //   valueString: "String(this.attributes.dex)"
        // },
        // {
        //   key: "LUK",
        //   valueNumber: 30,
        //   valueString: "String(this.attributes.luk)"
        // }
      ] as IGenericKeyValueValue[]
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
