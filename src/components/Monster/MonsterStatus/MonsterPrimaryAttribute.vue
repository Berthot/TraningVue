<template>
  <div class="primary-attribute-wrapper">

  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {PrimaryStats} from "@/Structs/MonsterApi";

export default defineComponent({
  data() {
    return {
      attributes: {
        type: Object as PropType<PrimaryStats>,
        required: true
      }
    }
  },

});
</script>

<style scoped>
* {
  box-sizing: border-box;
  width: 470px;
  border-radius: 10px;
}

.primary-attribute-wrapper {
  height: 100%;
  margin: 0 0 0 12px;
  background-color: #1e1e1e;

}
</style>
