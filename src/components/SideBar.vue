<template>
  <div id="sidebar">
    <nav>
      <div class="sidebar-header">
        <h3>RagnaLib</h3>
      </div>
      <ul>
        <li v-for="sideBarItem in SideBarItems" :key="sideBarItem.name" >
          <span @click="toggleDropDown(sideBarItem)">
              <router-link v-bind:to="sideBarItem.routerName">{{ sideBarItem.name }}
                <Icon v-if="sideBarItem.hasDropDown" icon-name="caret-down" class="dropdown-icon"/>
              </router-link>
          </span>
          <ul v-if="sideBarItem.subItems.length !== 0 && sideBarItem.dropdown">
            <li v-for="subItem in sideBarItem.subItems" :key="subItem.name">
              <router-link v-bind:to="subItem.routerName">{{ subItem.name }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {SideBarItems, SideBarSubItems} from "@/Structs/SideBarItems";
import Icon from "@/components/SideBar/Icon.vue";


export default defineComponent({
  components: {Icon},
  name: "SideBarV2",
  data() {
    return {
      SideBarItems: [
        {
          name: "Home",
          dropdown: false,
          routerName: "/",
          hasDropDown: false,
          subItems: [],
        } as SideBarItems,
        {
          name: "Database",
          dropdown: false,
          hasDropDown: true,
          routerName: "",
          subItems: [
            {
              name: "Monsters",
              routerName: "/database/Monster",
            } as SideBarSubItems,
            {
              name: "Items",
              routerName: "/database/Item",
            } as SideBarSubItems
          ]
        } as SideBarItems,
        {
          name: "Tool",
          dropdown: false,
          hasDropDown: true,
          routerName: "",
          subItems: [
            {
              name: "MVP Timer",
              routerName: "/tool/mvp-timer",
            } as SideBarSubItems,
            {
              name: "Skill Calc",
              routerName: "/tool/skill-calc",
            } as SideBarSubItems,

          ]
        } as SideBarItems,
        {
          name: "Contact",
          dropdown: false,
          routerName: "/contact",
          hasDropDown: false,
          subItems: [],
        } as SideBarItems,
      ] as SideBarItems[]
    }
  },
  methods: {
    toggleDropDown(option: SideBarItems): void {
      option.dropdown = !option.dropdown
    }
  },
})

</script>

<style scoped>

* {
  color: white;
}

li {
  list-style-type: none;
}


.dropdown-icon {
  padding-left: 4px;
}

.sidebar-header {
  font-family: sans-serif;
  align-content: center;
  padding-top: 4px;
  padding-left: 35px;
}

#sidebar {
  background: #1e1e1e;
  color: #fff;
  transition: all 0.3s;
  min-width: 220px;
  max-width: 220px;
  min-height: 100vh;
  position: sticky;
  top: 0;
}

a[data-toggle="collapse"] {
  position: relative;
}

#sidebar ul li a{
  padding: 5px;
  font-size: 1.1em;
  display: block;
  border-left: 3px solid transparent;

}

#sidebar ul li a:hover {
  border-left-color: cyan;
  border-left-width: 10px;

}

a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

@media (max-width: 768px) {
  #sidebar {
    margin-left: -250px;

  }

  #sidebar.active {
    margin-left: 0;
  }
}

</style>
