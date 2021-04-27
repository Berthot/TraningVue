<template>
  <nav id="sidebar">
    <div class="sidebar-content">
      <div class="sidebar-header">
        <h3>RagnaLib</h3>
      </div>

      <ul class="list-unstyled components">
        <li>
          <router-link :to="{ name: 'Home'}">Home</router-link>
        </li>
        <li>
          <a @click="toggleMenu('database')" href="#" class="database-dropdown">Database
            <Icon icon-name="caret-down"></Icon>
          </a>
          <ul v-if="menu.database">
            <li>
              <router-link :to="{ name: 'Monster'}">Monster</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Item'}">Item</router-link>
            </li>
          </ul>
        </li>
        <li>
          <a @click="toggleMenu('tool')" href="#" class="database-dropdown">Tool
            <Icon icon-name="caret-down"></Icon>
          </a>
          <ul v-if="menu.tool">
            <li>
              <router-link :to="{ name: 'MvpTimer'}">Mvp-Timer</router-link>
            </li>
          </ul>
        </li>
        <li>
        </li>
      </ul>
    </div>

  </nav>
</template>


<script lang="ts">
import {defineComponent} from 'vue';
import Icon from "@/components/SideBar/Icon.vue";

export default defineComponent({
  components: {Icon},
  data() {
    return {
      toolOpen: false,
      databaseOpen: false,
      menu: {
        "tool": false,
        "database": false
      } as Record<string, boolean>
    }
  },
  methods: {
    toggleMenu(option: string): void {
      this.menu[option] = !this.menu[option]
    },
    openTool(): void {
      this.toolOpen = !this.toolOpen

    },
    openDatabase(): void {
      this.databaseOpen = !this.databaseOpen

    }
  },
  props: {},
});
</script>


<style scoped>
#sidebar {
  min-width: 250px;
  max-width: 250px;
  min-height: 100vh;
}

#sidebar.active {
  margin-left: -250px;
}

.sidebar-content {
  position: sticky;
  top: 0;
}

a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

#sidebar {
  background: #7386d5;
  color: #fff;
  transition: all 0.3s;
}

#sidebar .sidebar-header {
  padding: 20px;
  background: #6d7fcc;
}

#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #47748b;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}

#sidebar ul li a:hover {
  color: #7386d5;
  background: #fff;
}

#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  background: #6d7fcc;
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #6d7fcc;
}

p {
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
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
