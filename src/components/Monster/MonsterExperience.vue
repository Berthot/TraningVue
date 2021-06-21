<template>
  <div class="wrapper">
    <ul>
      <li v-for="ex in experienceInList" v-bind:key="ex.name" class="base-exp">
        <div class="exp-name">
          <h1>{{ ex.name }}</h1>
        </div>
        <div class="exp-value">
          <h1>{{ ex.value }}</h1>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {ExperienceItem} from "@/Structs/Exp";
import {mapState} from "pinia";
import {useMonsterStore} from "@/stores/MonsterStore";

export default defineComponent({
  methods: {
    convertToString(param: number | undefined): string {
      if (param == 0 || param == undefined) {
        return '-'
      }
      return param.toString()
    },
  },
  computed:{
    experienceInList(): ExperienceItem[] {
      return [
        {
          "name": "BASE",
          "value": this.convertToString(this.currentMonster.experience?.base)
        },
        {
          "name": "JOB",
          "value": this.convertToString(this.currentMonster.experience?.job)
        },
        {
          "name": "MVP",
          "value": this.convertToString(this.currentMonster.experience?.mvp),
        }
      ];
    },
    ...mapState(useMonsterStore, ['currentMonster'])
  }

})
</script>
<style scoped>

* {
  border-radius: 10px;
  font-size: 18px;
  font-style: normal;
}

.wrapper {
  display: flex;
  margin-right: 15px;

}

ul {
  padding: 0;
}

li {
  list-style: none;
}

.base-exp {
  display: flex;
  justify-content: space-between;
  background-color: #8D95D7;
  margin: 0 auto 15px auto; /*top right bottom left*/
  height: 40px;
  width: 300px;
  box-shadow: 0 5px 12px 0 rgba(31, 35, 54, 0.3);


}

.exp-name {
  align-self: center;
  text-align: center;
  padding-top: 0.14rem;
  width: 65px;
  height: 25px;
  background-color: #AAC6DA;
  margin-left: 10px;
  box-shadow: 0 5px 12px 0 rgba(31, 35, 54, 0.2);

}


.exp-value {
  margin-right: 10px;
  align-self: center;
  text-align: center;
  padding-top: 0.14rem;
  width: 100px;
  height: 25px;
  background-color: #6C6C95;
  box-shadow: 0 5px 12px 0 rgba(31, 35, 54, 0.2);

}


</style>
