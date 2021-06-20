<template>
  <div class="drop-location-wrapper">
    <DropLocationNavBar/>
    <div class="items">
      {{  actualValue }}
    </div>
    <button ></button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {mapState} from "pinia";
import {useMonsterStore} from "@/stores/MonsterStore";
import DropLocationNavBar from "@/components/Monster/MonsterItemMobMap/DropLocationNavBar.vue";
import {useDropLocationStore} from "@/stores/DropLocationStore";

export default defineComponent({
  components: {DropLocationNavBar},
  data() {
    return {
      ActualNavBar: "Drop" as string,
    }
  },
  computed: {
    ...mapState(useMonsterStore, ['currentMonster']),
    ...mapState(useDropLocationStore, ['actualValue'])
  },

});
</script>
<style scoped>

.drop-location-wrapper {
  border-radius: 10px;
  width: 750px;
  height: 200px;
  background-color: blueviolet;
}

.items {
  background-color: red;
  height: 100%;
  width: 100%;
}

.drop-location-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
}


</style>
