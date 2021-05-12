<template>
  <div class="monster-status">
    <h1>STATUS</h1>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
    }
  },
  props: {
  },
})
</script>
<style scoped>

*{
  width: 460px;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 0 15px 15px;
}


.monster-status {
  border-radius: 10px;
  position: relative;
  background-color: blue;
  height: 200px;
  margin-bottom: 15px;

}

</style>
