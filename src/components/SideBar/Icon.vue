<template>
  <i :class="iconClass"> </i>
</template>

<script lang="ts">
export default {
  name: "Icon",
  props:{
    iconName: String
  },
  computed:{
    iconClass(): string {
      return `fas fa-${this.iconName}`
    }
  }
}
</script>

<style scoped>

</style>
