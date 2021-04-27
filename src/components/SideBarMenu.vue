<template>
  <nav class="sidebar">
    <div class="text">RagnaLib</div>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a v-on:click="openDatabase" href="#" class="database-dropdown">Database
          <span>
          <ion-icon name="caret-down-outline"></ion-icon>
          </span>
        </a>
        <ul v-if="databaseOpen">
          <li>
            <a href="#">Monster</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
        </ul>
      </li>
      <li>
        <a v-on:click="openTool" href="#" class="tools-dropdown">Tools
          <span>
            <ion-icon name="caret-down-outline"></ion-icon>
          </span>
        </a>
        <ul v-if="toolOpen">
          <li>
            <a href="#">MVP Timer</a>
          </li>
          <li>
            <a href="#">Skill Calculator</a>
          </li>
          <li>
            <a href="#">Attribute Calculator</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {IonIcon} from "@ionic/vue";
import {defineComponent, ref} from 'vue';

export default defineComponent({
  data() {
    return{
      toolOpen: false,
      databaseOpen: false
    }
  },
  // setup() {
  //   var toolOpen = ref(false);
  //
  //   return {
  //     toolOpen
  //   }
  // },
  methods: {
    openTool (): void {
      this.toolOpen = !this.toolOpen

    },
    openDatabase (): void {
      this.databaseOpen = !this.databaseOpen

    }
  },
  components: {
    IonIcon
  },
  props: {},
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  user-select: none;
  /*list-style-type: none;*/
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

/*vars do css*/
/*:root {*/
/*  --sidebar-primary-color: orange;*/
/*  --sidebar-secondery-color: #FF4500;*/
/*  !*  background-color: var(--sidebar-primary-color);*!*/
/*}*/

.sidebar {
  position: relative;
  width: 15%;
  height: 100%;
  left: 0;
  top: 0;
  text-align: left;
  background-color: orange;
}

.sidebar .text {
  color: rebeccapurple;
  font-size: 25px;
  font-weight: 600;
  line-height: 65px;
  text-align: center;
  background-color: #1e1e1e;
  letter-spacing: 1px;
}

nav ul {
  background: #1e1e1e;
  height: 100%;
  width: 100%;
  list-style: none;
}

nav ul li {
  line-height: 60px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

nav ul li a {
  position: relative;
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding-left: 20%;
  font-weight: 500;
  display: block;
  width: 100%;
  border-left: 3px solid transparent;
}

nav ul li a:Hover {
  color: cyan;
  background: #1e1e1e;
  border-left-color: cyan;
}

nav ul ul {
  position: static;
  /*display: none; !*hide as li*!*/
}

nav ul ul li {
  line-height: 42px;
  border-bottom: none;
}

nav ul ul li a {
  font-size: 17px;
  color: #e6e6e6;
  padding-left: 80px;
}

nav ul ul li a span {
  position: absolute;
  top: 5%;
  right: 20px;
  transform: translateY(-50%);
  font-size: 24px;
  transition: transform 0.4s;
}

nav ul ul li a:hover span {
  transform: translateY(-50%) rotate(-180deg);
}


nav ul li a span {
  position: absolute;
  top: 5%;
  right: 20%;
  font-size: 24px;
}


</style>
