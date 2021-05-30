<template>

  <div class="mvp-tag">
        <span v-if="mvp">
            <img alt="" src="https://i.ibb.co/hgCJ27p/mvp-on.png">
        </span>
    <span v-else>
            <img alt="" src="https://i.ibb.co/CHKzsqm/mvp-off.png">
        </span>
  </div>
</template>
<script lang="ts">
export default {
  name: 'IsMvp',
  props: {
    mvp: Boolean
  }
}
</script>
<style scoped>

* {
  width: 460px;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 0 15px 15px;
}


.mvp-tag {
  height: 100%;
  width: 110px;
  /*background-color: red;*/

}

.mvp-tag span {
  margin: 0;
}

.mvp-tag > span > img {
  width: 110px;
  height: 100px;
  margin-left: 0;
}

</style>
