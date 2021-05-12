<template>
  <div class="monster-attribute">
    <h1>ATTRIBUTES</h1>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      "atqMin": 1111,
      "atqMax": 2222,
      "atqmMin": 1111,
      "atqmMax": 2222,
      "def": 123,
      "mdef": 123,
      "health": 2502000,
      "aspd": "1.75",
      "flee": 574,
      "hit": 512,
    }
  },
  computed: {
    atqPhysic(): string{
      return `${this.atqMin}-${this.atqMax}`;
    },
    atqMagic(): string{
      return `${this.atqmMin}-${this.atqmMax}`;
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

.monster-attribute {
  border-radius: 10px;
  position: relative;
  background-color: red;
  height: 185px;

}

</style>
