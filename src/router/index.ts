import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/database/monster/',
    name: 'MonsterIndex',
    component: () => import(/* webpackChunkName: "Monster" */ '../components/MonsterIndex.vue')
  },
  {
    path: '/database/monster/:id',
    name: 'Monster',
    component: () => import(/* webpackChunkName: "Monster" */ '../components/Monster.vue')
  },
  {
    path: '/database/item',
    name: 'Item',
    component: () => import(/* webpackChunkName: "Item" */ '../components/Item.vue')
  },
  {
    path: '/tool/mvp-timer',
    name: 'MvpTimer',
    component: () => import(/* webpackChunkName: "MvpTimer" */ '../components/MvpTimer.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router
