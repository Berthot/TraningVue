<template>
  <button>
    <Icon icon-name="bars"></Icon>
  </button>
</template>
<script lang="ts">
import Icon from "@/components/SideBar/Icon.vue"

export default {
  name: 'ToggleSideBar',
  components: {Icon},
  props: {
  }
}
</script>

<style scoped>

</style>
