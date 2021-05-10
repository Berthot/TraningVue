<template>
  <div class="wrapper">

    <SideBar></SideBar>
    <main class="w-100">
      <div class="bg">

        <Card>
          <router-view></router-view>
        </Card>

      </div>
    </main>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import SideBar from './components/SideBarV2.vue';
import Card from './components/Card.vue';

export default defineComponent({
  components: {
    Card,
    SideBar,
  }
});
</script>

<style>
.wrapper {
  display: flex;
  width: 100%;
  align-items: stretch;
  /*background-color: #B6C4EE;*/

}

.bg{
  display: flex;
  flex-grow: 1;
  height: 100vh;
  /*background-color: red;*/

}

body{
  height: 100%;
  margin: 0;
}

main {
  height: 100%;
  width: 100%;
  border: 0;
  /*background-color: #B6C4EE;*/
  /*margin: 0.6rem 1.3rem;*/

}

</style>
