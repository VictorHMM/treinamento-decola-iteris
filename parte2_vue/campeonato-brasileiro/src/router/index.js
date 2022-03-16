import Vue from 'vue'
import VueRouter from 'vue-router'
import TelaInicio from '../views/TelaInicio'
import ListaClubes from '../views/ListaClubes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TelaInicio',
    component: TelaInicio
  },
  {
    path: '/classificacao',
    name: 'Classificação',
    component: ListaClubes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
