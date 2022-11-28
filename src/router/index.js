import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FirstOneView from '../views/first/FirstOneView.vue'
import FirstTwoView from '../views/first/FirstTwoView.vue'
import FirstThreeView from '../views/first/FirstThreeView.vue'
import SecondOneView from '../views/second/SecondOneView.vue'
import SecondTwoView from '../views/second/SecondTwoView.vue'
import SecondThreeView from '../views/second/SecondThreeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/first/1',
    name: 'firstOne',
    component: FirstOneView
  },
  {
    path: '/first/2',
    name: 'firstTwo',
    component: FirstTwoView
  },
  {
    path: '/first/3',
    name: 'firstThree',
    component: FirstThreeView
  },
  {
    path: '/second/1',
    name: 'secondOne',
    component: SecondOneView
  },
  {
    path: '/second/2',
    name: 'secondTwo',
    component: SecondTwoView
  },
  {
    path: '/second/3',
    name: 'secondThree',
    component: SecondThreeView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
