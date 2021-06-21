<template>
  <div class="drop-wrapper">
    <ul class="drops">
      <li v-for="item in getMonsterDrop" :key="item.itemId" class="drop">
          <div class="drop-name">
            <p>{{item.name}}</p>
          </div>
          <div class="drop-item">
            <img alt="" :src="item.imageUrl">
            <div class="infos">
              <div class="zenny">
                <p>Zen: {{item.price}}z</p>
              </div>
              <div class="drop-rate">
                <p>Drop: {{item.dropRate / 100}}%</p>
              </div>
              <div class="item-type">
                <p>{{item.itemType}}</p>
              </div>
            </div>
          </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {mapState} from "pinia";
import {useMonsterStore} from "@/stores/MonsterStore";
import {MonsterDrop} from "@/Structs/MonsterApi";

export default defineComponent({
  methods: {},
  computed: {
    getMonsterDrop(): MonsterDrop[] {
      return this.currentMonster?.monsterDrops || [] as MonsterDrop[]
    },
    ...mapState(useMonsterStore, ['currentMonster']),
  },

});
</script>

<style scoped>

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style: none;
  border-radius: 5px;

}

.drop-wrapper {
  height: 100%;
  width: 100%;
  background-color: var(--secondery-color);
  overflow: scroll;
  overflow-x: hidden;

}


/*padding: 20px 20px 0 15px; !* up | right | down | left *!*/


.drops {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.drop {
  padding: 0.7rem 20px 0 13px; /* up | right | down | left */
}

.drop-name {
  position: absolute;
  margin-left: .2rem;
  background-color: #AAC6DA;
  width: 9rem;
  height: 1.5rem;
  z-index: 1;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.drop-name p{
  padding-top: .3rem;
  font-size: .65em;
  font-weight: bold;
  white-space: nowrap;
  text-align: center;
}

.drop-item {
  display: flex;
  flex-direction: row;
  margin-top: .9rem;
  background-color: #6C6C95;
  width: 9.5rem;
  height: 6.2rem;
  z-index: 0;

}

.drop-item img {
  margin-top: 1.6rem;
  margin-left: .5rem;
  height: 4rem;
  width: 3rem;
}

.infos {
  margin-top: 1.2rem;
  margin-left: .5rem;
  width: 5rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: .6rem;
}

.infos p {
  text-align: left;
  white-space: nowrap;
  font-size: .7em;
  padding-top: .1em;
  font-weight: bold;
  padding-left: .4em;
}

.zenny {
  width: 100%;
  height: 1.5rem;
  background-color: var(--tertiary-color);
}

.drop-rate {
  width: 100%;
  height: 1.5rem;
  background-color: var(--tertiary-color);
}

.item-type {
  width: 100%;
  height: 1.5rem;
  background-color: var(--tertiary-color);
}
</style>
