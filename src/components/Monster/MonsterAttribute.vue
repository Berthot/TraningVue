<template>
  <div class="monster-status">
    <h1>STATUS</h1>
  </div>
  <div class="monster-attribute">
    <h1>ATTRIBUTES</h1>
  </div>
</template>
<script lang="ts">
export default {
  name: 'MonsterAttribute'
}
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

.monster-attribute {
  border-radius: 10px;
  position: relative;
  background-color: red;
  height: 185px;

}

</style>
