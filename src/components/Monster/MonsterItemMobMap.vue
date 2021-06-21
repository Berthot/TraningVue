<template>
  <div class="drop-location-wrapper">
    <DropLocationNavBar/>
    <Drop v-if="IsDrop"/>
    <DropMvp v-if="IsMvpDrop"/>
    <DropLocation v-if="IsLocation"/>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {mapState, mapStores} from "pinia";
import {useMonsterStore} from "@/stores/MonsterStore";
import DropLocationNavBar from "@/components/Monster/MonsterItemMobMap/DropLocationNavBar.vue";
import {useDropLocationStore} from "@/stores/DropLocationStore";
import Drop from "@/components/Monster/MonsterItemMobMap/Items/Drop.vue";
import DropMvp from "@/components/Monster/MonsterItemMobMap/Items/DropMvp.vue";
import DropLocation from "@/components/Monster/MonsterItemMobMap/Items/DropLocation.vue";

export default defineComponent({
  components: {DropLocationNavBar, Drop, DropMvp, DropLocation},
  methods: {},
  computed: {

    ...mapState(useMonsterStore, ['currentMonster']),
    ...mapState(useDropLocationStore, ['actualValue']),
    ...mapStores(useDropLocationStore),
    IsDrop(): boolean {
      return this.dropLocationStore.actualValue === 'Drop';
    },
    IsLocation(): boolean {
      return this.dropLocationStore.actualValue === 'Location';
    },
    IsMvpDrop(): boolean {
      return this.dropLocationStore.actualValue === 'MvpDrop';
    },
  },

});
</script>
<style scoped>

.drop-location-wrapper {
  background-color: #8D95D7;
  border-radius: 10px;
  height: 11.5rem;
}


.drop-location-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
}


</style>
