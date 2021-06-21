<template>
  <div class="drop-wrapper">
    <ul class="drops">
      <li v-for="locationDrop in getLocationDrop" :key="locationDrop.locationName" class="drop">
        <div class="location-name">
          <p>{{ locationDrop.locationName }}</p>
        </div>
        <div class="location-map">
          <img alt="" :src="locationDrop.mapUrl">
          <div class="infos">
            <div class="location-item">
              <p>{{ locationDrop.name }}</p>
            </div>
            <div class="location-item">
              <p>Qty: {{ locationDrop.quantity }}</p>
            </div>
            <div class="location-item">
              <p>Minute: {{ ConvertMsToHour(locationDrop.respawnTime) }}</p>
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
import {Location} from "@/Structs/MonsterApi";

export default defineComponent({
  methods: {
    ConvertMsToHour(ms: number) : string{
      if(ms === 0)
        return '---'
      let minute = ms /1000 / 60
      if(minute.toString().includes("."))
        return (minute * 60).toString() + 's'
      if(minute >= 61)
        return  minute / 60 + 'h'
      return minute.toString() + 'm'
    }
  },
  computed: {
    getLocationDrop(): Location[] {
      return this.currentMonster?.locations || [] as Location[]
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
  box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.3);


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

.location-name {
  position: absolute;
  margin-left: .2rem;
  background-color: #AAC6DA;
  width: 9rem;
  height: 1.5rem;
  z-index: 1;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.location-name p {
  padding-top: .3rem;
  font-size: .65em;
  font-weight: bold;
  white-space: nowrap;
  text-align: center;
}

.location-map {
  display: flex;
  flex-direction: row;
  margin-top: .9rem;
  background-color: #6C6C95;
  width: 9.5rem;
  height: 6.2rem;
  z-index: 0;
  box-shadow: 0 5px 12px 0 rgba(31, 35, 54, 0.2);


}

.location-map img {
  margin-top: 1.6rem;
  margin-left: .5rem;
  height: 4rem;
  width: 3rem;
  box-shadow: 0 5px 12px 0 rgba(31, 35, 54, 0.3);

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


.location-item {
  width: 100%;
  height: 1.5rem;
  background-color: var(--tertiary-color);
  box-shadow: 0 5px 12px 0 rgba(31, 35, 54, 0.3);

}

</style>
