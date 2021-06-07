<template>
  <div class="size-level-race-wrapper">
    <div class="slr-header">
      <p>{{ keyValueIcon.key }}</p>
    </div>
    <div class="slr-value">
      <img :src="keyValueIcon.icon" alt="">
      <div class="value-position">
        <p :style="{ fontSize: fontSizeValue}">{{ keyValueIcon.value }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import {KeyValueIcon} from "@/Structs/KeyValueIcon";
import {defineComponent, PropType} from "vue";

export default defineComponent({
  data() {
    return {
      fontSizeValue: `${this.fontSize2()}em`
    }
  },
  props: {
    keyValueIcon: {
      type: Object as PropType<KeyValueIcon>,
      required: true
    }
  },
  methods: {
    fontSize2(): number {
      let value = this.keyValueIcon.value;
      if (value == undefined)
        return 0.93
      if (value.length >= 7)
        return 0.83
      return 0.93
    }
  }
})
</script>
<style scoped>

* {
  font-size: 25px;
  box-sizing: border-box;
}


li img {
  width: 30px;
  height: 30px;
}

.size-level-race-wrapper {
  display: flex;
  margin: 0;
  padding: 0 10px;
  flex-direction: column;
}

.slr-header p {
  margin-top: 2px;
  margin-bottom: 0;
  font-weight: bold;

}

.slr-value {
  display: flex;
  flex-direction: row;
}

.slr-value img {
  height: 20px;
  width: 20px;
}

.value-position {
  height: 1.5rem;
  width: 5.2rem;
  font-size: 0.93em;
  white-space: nowrap;
  padding-left: 0.1em;
}

.value-position p {
  color: greenyellow;
  margin: 0;

}
</style>
