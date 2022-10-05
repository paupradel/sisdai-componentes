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
    path: '/creditos',
    name: 'Créditos',
    component: () => import('../views/PaginaCreditos.vue')
  },
  {
    path: '/creditos/:id',
    name: 'Créditos / Investigador',
    component: () => import('../views/PaginaCreditosDetalle.vue')
  },
  {
    path: '/preguntas-frecuentes',
    name: 'Preguntas Frecuentes',
    component: () => import('../views/PaginaPreguntasFrecuentes.vue')
  },
  {
    path: '/ayuda',
    name: 'Ayuda de Accesibilidad',
    component: () => import('../views/AccesibilidadAyuda.vue')
  },
  {
    path: '/herramientas',
    name: 'Herramientas',
    component: () => import('../views/PaginaHerramientas.vue')
  },
  {
    path: '**',
    name: 'pagina-no-encontrada',
    component: () => import('@/views/ErrorPaginaNoEncontrada.vue'),
  }
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
