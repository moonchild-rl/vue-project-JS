import { createRouter, createWebHistory } from 'vue-router'
import OverView from '../views/OverView.vue'
import ClearView from '../views/ClearView.vue'
import HashView from '../views/HashView.vue'
import EmailView from '../views/EmailView.vue'
import IntroView from '../views/IntroView.vue'
import SourceView from '../views/SourceView.vue'
import RecommendView from '../views/RecommendView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'intro',
      component: IntroView
    },
    {
      path: '/overview',
      name: 'overview',
      component: OverView
    },
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
      path: '/email',
      name: 'email',
      component: EmailView
    },
    {
      path: '/sources',
      name: 'sources',
      component: SourceView
    },
    {
      path: '/recommendation',
      name: 'recommendation',
      component: RecommendView
    }
    /*
    ,{
      path: '/clear',
      name: 'clear',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ClearView.vue')
    }*/
  ]
})

export default router
