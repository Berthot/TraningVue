<template>
  <ul class="element-items">
    <li v-for="element in elements" :key="element.key" class="element-list">
      <div class="element-value">
        <div class="element-tag">
          <p>{{ element.key }}</p>
        </div>
        <div class="element-bar">
          <div class="bar" :style="{
            backgroundColor: GetColorByValue(element.valueNumber),
            width: GetBarValueWeight(element.valueNumber) + '%'}">
          </div>
        </div>
        <div class="element-bar-value">
          <p>{{ element.valueString }}</p>
        </div>

      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {IGenericKeyValueValue} from "@/Structs/IGenericKeyValueValue";
import {mapState} from "pinia";
import {useMonsterStore} from "@/stores/MonsterStore";

export default defineComponent({
  methods: {
    GetColorByValue(actual: number): string {
      if (actual > 0)
        return "blue"
      else if (actual < 0)
        return "red"
      return "yellow"

    },
    GetBarValueWeight(actual: number): number {
      const x = 12.2;
      let y = Math.abs(actual) / 25
      let result =  x * y;
      if(result != 0)
        return result
      return 9

    },
  },
  computed: {
    elements(): IGenericKeyValueValue[] {
      return [
        {
          key: "Neutral",
          valueNumber: this.currentMonster?.element?.neutral || 0,
          valueString: this.currentMonster?.element?.neutral.toString() + '',
        },
        {
          key: "Water",
          valueNumber: this.currentMonster?.element?.water || 0,
          valueString: this.currentMonster?.element?.water.toString() + '',
        },
        {
          key: "Earth",
          valueNumber: this.currentMonster?.element?.earth || 0,
          valueString: this.currentMonster?.element?.earth.toString() + '',
        },
        {
          key: "Fire",
          valueNumber: this.currentMonster?.element?.fire || 0,
          valueString: this.currentMonster?.element?.fire.toString() + '',
        },
        {
          key: "Wind",
          valueNumber: this.currentMonster?.element?.wind || 0,
          valueString: this.currentMonster?.element?.wind.toString() + '',
        },
        {
          key: "Poison",
          valueNumber: this.currentMonster?.element?.poison || 0,
          valueString: this.currentMonster?.element?.poison.toString() + '',
        },
        {
          key: "Holy",
          valueNumber: this.currentMonster?.element?.holy || 0,
          valueString: this.currentMonster?.element?.holy.toString() + '',
        },
        {
          key: "Dark",
          valueNumber: this.currentMonster?.element?.dark || 0,
          valueString: this.currentMonster?.element?.dark.toString() + '',
        },
        {
          key: "Ghost",
          valueNumber: this.currentMonster?.element?.ghost || 0,
          valueString: this.currentMonster?.element?.ghost.toString() + '',
        },
        {
          key: "Undead",
          valueNumber: this.currentMonster?.element?.undead || 0,
          valueString: this.currentMonster?.element?.undead.toString() + '',
        },

      ];
    },
    ...mapState(useMonsterStore, ['currentMonster'])
  },

});
</script>
<style scoped>
* {
  list-style: none;
  /*box-sizing: border-box;*/
}

.element-list p {
  font-size: 0.9em;
}

.element-items {
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
  padding: 0;
}

.element-list {
  /*padding-left: 30px;*/
  /*padding-top: 10px;*/
  padding: 10px 0 0 10px;
}


.element-value {
  display: flex;
  flex-direction: row;

}

.element-tag {
  font-weight: bold;
  font-size: .98em;
  height: 100%;
  width: 3.5rem;
}

.element-bar-value {
  display: flex;
  height: 100%;
  justify-content: center;
  width: 2.2rem;
  font-weight: bold;
  border-radius: 5px;
  background-color: var(--secondery-color);
  padding-left: .2rem;
  padding-right: .2rem;
  white-space: nowrap;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);


}

.element-bar {
  display: flex;
  width: 59%;
  height: revert;
  justify-content: left;

}

.bar {
  border-radius: 5px;
  width: 10%;
  /*padding-right: 50%;*/
  height: 0.7rem;
  /*margin-top: .3rem;*/
  /*margin-left: 45%;*/
  margin: .3rem 0 0 0; /*top, right, bottom, left */
  background-color: yellow;
  transition: width 1s;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);

}


</style>
