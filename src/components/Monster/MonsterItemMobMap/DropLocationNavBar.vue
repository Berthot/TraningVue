<template>
  <nav class="sidebar-nav">
    <ul v-for="itemBar in GetSideBarItems" :key="itemBar.name" class="sidebar-array">
      <li class="sidebar-item" >
        <button
            @click="SetActualNavBar(itemBar.name)"
            class="sidebar-button" v-if="itemBar.enable">
          {{ itemBar.name }}
        </button>
      </li>
    </ul>
  </nav>

</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {mapState, mapStores} from "pinia";
import {useDropLocationStore} from "@/stores/DropLocationStore";
import {IDropLocationNavBar} from "@/Structs/IDropLocationNavBar";
import {useMonsterStore} from "@/stores/MonsterStore";


export default defineComponent({
  props:{
    ActualNavBar: String
  },
  methods: {
    SetActualNavBar(newValue: string): void{
      this.dropLocationStore.addNewValue(newValue);
    }
  },
  computed: {
    GetSideBarItems(): IDropLocationNavBar[]{
      return [
        {
          name: "Drop",
          enable: true
        },
        {
          name: "Location",
          enable: this.currentMonster?.locations?.length !== 0 || false
        },
        {
          name: "MvpDrop",
          enable: this.currentMonster?.monsterMvpDrops?.length !== 0 || false
        }
      ] as IDropLocationNavBar[]
    },
    ...mapStores(useDropLocationStore),
    ...mapState(useMonsterStore, ['currentMonster'])
  },

});
</script>

<style scoped>

* {
  list-style: none;
}

.sidebar-item {
}

.sidebar-array {
  margin: 0;
  padding: 3px 10px 0 0;
}

.sidebar-array:nth-child(1) {
  padding-left: 10px;
}

.sidebar-button {
  background: var(--tertiary-color);
  border-radius: 5px;
  border: rgba(30, 30, 30, .3) 1px solid;

}

.sidebar-nav {
  border-radius: 4px 4px 0 0;
  background-color: var(--primary-color);
  height: 2.5rem;
  padding-bottom: 2px;
  width: 100%;
  display: flex;
  flex-direction: row;
}


</style>
