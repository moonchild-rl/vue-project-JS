import { createRouter, createWebHistory } from 'vue-router'
import OverView from '../views/OverView.vue'
import ClearView from '../views/ClearView.vue'
import HashView from '../views/HashView.vue'
import EmailView from '../views/EmailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'overview',
      component: OverView
    },
    /*
    {
      path: '/clear',
      name: 'clear',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ClearView.vue')
    },*/
    {
      path: '/clear',
      name: 'clear',
      component: ClearView
    },
    {
      path: '/hashed',
      name: 'hashed',
      component: HashView
    },
    {
      path: '/onlymails',
      name: 'onlymails',
      component: EmailView
    }
  ]
})

export default router
