import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/postcss-nesting',
      name: 'postcss-nesting',
      component: () => import('../views/postcss-nesting.vue')
    }
  ]
})

export default router
