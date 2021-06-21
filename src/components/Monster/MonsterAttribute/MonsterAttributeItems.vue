<template>
  <div class="attributes">
    <div class="attribute-name"><h1 class="value-center">{{ name }}</h1></div>
    <div class="attribute-value"><h1 class="value-center">{{ value }}</h1></div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
// import { GenericKeyValue } from "@/Structs/GenericKeyValue"; //import struct


export default defineComponent({
  props:{
    name: String,
    value: String,
  }
})
</script>

<style scoped>


* {
  width: 460px;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style: none;

}


.attributes {
  display: flex;
  position: relative;
  flex-direction: column;
  width: 90px;
  height: 50px;
}


.attribute-name {
  position: absolute;
  align-self: center;
  background-color: #AAC6DA;
  width: 60px;
  height: 22px;
  border-bottom: 10px;
  z-index: 1;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

}

.attribute-value {
  margin-top: .9rem;
  align-self: end;
  background-color: #6C6C95;
  width: 90px;
  height: 32px;
  z-index: 0;
  box-shadow: 0 5px 12px 0 rgba(31, 35, 54, .4);

}

.attribute-name .value-center {
  padding-top: 0.1rem;
}

.attribute-value .value-center {
  padding-top: 0.5rem;
}


.value-center {
  position: relative;
  font-size: 1em;
  font-weight: bold;
  width: 100%;
  text-align: center;
}

</style>
