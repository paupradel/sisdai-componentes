import Vue from 'vue'
import VueRouter from 'vue-router'
import PaginaInicio from '../views/PaginaInicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: PaginaInicio
  },


  {
    path: '/herramientas',
    name: 'Herramientas',
    component: () => import('../views/PaginaHerramientas.vue')
  },
  {
    path: '/narrativa-scroll',
    name: 'NarrativaScroll',
    component: () => import('../views/VistaNarrativaScroll.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0, behavior: 'smooth' };
  },
})

export default router
