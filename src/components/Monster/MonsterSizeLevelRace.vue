<template>
  <div class="size-level-race-wrapper">
    <div class="slr-header">
      <h1>{{ stat.key }}</h1>
    </div>
    <div class="slr-value">
      <img :src="stat.icon" alt="">
      <h1>{{ stat.value }}</h1>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    stat: {}
  }
}
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
  height: 70px;
  width: 120px;
  background-color: #6C6C95;
  margin: 0;
  padding: 0 10px;
  flex-direction: column;
}

.slr-header h1 {
  margin-top: 2px;
  font-weight: bold;

}

.slr-value {
  display: flex;
  flex-direction: row;
}

.slr-value img{
  height: 20px;
  width: 20px;
}

.slr-value h1{
  color: greenyellow;
  font-size: 0.9em;
  white-space: nowrap;
  padding-left: 0.2em;
  margin-top: 10px;
}


</style>
