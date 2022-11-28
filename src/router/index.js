import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FirstOneView from '../views/first/FirstOneView.vue'
import FirstTwoView from '../views/first/FirstTwoView.vue'

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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
