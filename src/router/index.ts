import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/monster',
    name: 'Monster',
    component: () => import(/* webpackChunkName: "Monster" */ '../components/Monster.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
