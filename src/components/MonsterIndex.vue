<template>
  <label for="basic-url">Your vanity URL</label>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text outraclasse" id="basic-addon3">Monster ID: </span>
    </div>
    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="monster">
    <div class="input-group-append">
      <button class="btn btn-outline-secondary" type="button" @click="sendToMonster">Button</button>
    </div>
  </div>
</template>


<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({

  data() {
    return {
      monster: ""
    }
  },
  methods: {
    sendToMonster(): void {
      this.$router.push({ name: 'Monster', params: { id: this.monster } })
    }
  }
});
</script>

<style scoped>



</style>
