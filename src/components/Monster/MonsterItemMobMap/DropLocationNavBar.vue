<template>
  <nav class="sidebar-nav">
    <ul v-for="itemBar in SideBarItems" :key="itemBar.name" class="sidebar-array">
      <li class="sidebar-item" >
        <button @click="SetActualNavBar(itemBar.name)" class="sidebar-button" v-if="itemBar.enable"> {{ itemBar.name }}</button>
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
  data() {
    return {
      SideBarItems: [
        {
          name: "Drop",
          enable: true
        },
        {
          name: "Location",
          enable: true
        },
        {
          name: "MvpDrop",
          enable: true
        }
      ] as IDropLocationNavBar[]
    }
  },
  mounted() {
    return {}
  },
  methods: {
    SetActualNavBar(newValue: string): void{
      this.dropLocationStore.addNewValue(newValue);
    }
  },
  computed: {
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
  background-color: gray;
  height: 2.5rem;
  padding-bottom: 2px;
  width: 100%;
  display: flex;
  flex-direction: row;
}


</style>
