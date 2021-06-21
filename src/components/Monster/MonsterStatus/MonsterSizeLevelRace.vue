<template>
  <div class="size-level-race-wrapper">
    <div class="slr-header">
      <p>{{ keyValueIcon.key }}</p>
    </div>
    <div class="slr-value">
      <img :src="keyValueIcon.icon" alt="">
      <div class="value-position">
        <p :style="{ fontSize: fontSizeValue, paddingTop: paddingTopValue}">{{ keyValueIcon.value }}</p>
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
      fontSizeValue: `${this.getFontSizeValue()}em`,
      paddingTopValue: `${this.getPaddingTopValue()}px`,
    }
  },
  props: {
    keyValueIcon: {
      type: Object as PropType<KeyValueIcon>,
      required: true
    }
  },
  methods: {
    getFontSizeValue(): number {
      return this.keyValueIcon.value == null || this.keyValueIcon.value.toString()?.length < 9 ? 0.93 : 0.81;
    },
    getPaddingTopValue(): number {
      return this.keyValueIcon.value == null || this.keyValueIcon.value.toString()?.length < 9 ? 0 : 2;

    }
  }
})
</script>
<style scoped>

* {
  font-size: 25px;
  box-sizing: border-box;
}


.size-level-race-wrapper {
  display: flex;
  margin: 0;
  padding: 0 10px;
  flex-direction: column;
  box-shadow: 0 5px 12px .1rem rgba(31, 35, 54, 0.3);

}

.slr-header p {
  margin-top: 0;
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
  display: flex;
  font-size: 0.93em;
  white-space: nowrap;
  padding-left: 0.15em;

}

.value-position p {
  font-weight: bold;

  color: greenyellow;
  position: absolute;
  margin-top: -5px;
  margin-bottom: 0;


}
</style>
