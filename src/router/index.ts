import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PraticaView from '../views/PraticaView.vue'
import PraticaBotaoView from '../views/PraticaBotaoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/pratica',
      name: 'pratica',
      component: PraticaView,
    },
    {
      path: '/pratica-botoes',
      name: 'pratica-botoes',
      component: PraticaBotaoView
    }
  ],
})

export default router
