<template>
  <div class="element-wrapper">
    <div class="element">
      <div class="element-name-tier">
        <p>{{getElementName}}</p>
      </div>
    </div>
    <div class="element-status">
      <Elements/>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {mapState} from "pinia";
import {useMonsterStore} from "@/stores/MonsterStore";
import Elements from "@/components/Monster/Element/Elements.vue";

export default defineComponent({
  components: {Elements},
  computed: {
    getElementName():string{
      return this.currentMonster?.element?.name + ' ' + this.currentMonster?.element?.tier
    },
    ...mapState(useMonsterStore, ['currentMonster'])
  },
});
</script>

<style scoped>
* {
  list-style: none;
}

.element-wrapper {
  flex-direction: column;
  display: flex;
  background-color: var(--secondery-color);
  border-radius: 10px;
  height: 400px;
  width: 275px;
}


.element-status {
  border-radius: 5px;
  margin: auto;
  background-color: var(--primary-color);
  height: 80%;
  width: 90%;
}

.element {
  white-space: nowrap;
  margin: 15px auto 0 auto;
  padding-top: 8px;
  border-radius: 10px;
  background-color: var(--primary-color);
  height: 40px;
  width: 110px;
  align-content: center;
}


.element-name-tier {
  margin: auto auto 4px;
  padding-left: 4px;
  height: 24px;
  width: 80%;
  font-size: 1.1em;
  font-weight: bold;
  align-self: center;
  position: center;

}

.element-name-tier p{
  margin: auto;
}

</style>
