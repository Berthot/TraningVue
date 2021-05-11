<template>
    <MonsterId :identify="Id" :monsterName="Name"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MonsterId from "@/components/MonsterId.vue";

export default defineComponent({
  components: {MonsterId},
  data() {
    return {
      Name: "KIEL-D-01",
      Id: 1734
    }
  },

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#monster-id{
  width: 300px;
  height: 350px;
}

</style>
