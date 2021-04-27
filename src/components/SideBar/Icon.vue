<template>
  <i :class="iconClass"> </i>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Icon",
  props:{
    iconName: {
      type: String,
      default: (): string => ""
    }
  },
  computed:{
    iconClass(): string {
      return "fas fa-" + this.iconName
    }
  }
})
</script>


<style scoped>

</style>
