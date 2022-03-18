import Vue from 'vue'
import VueRouter from 'vue-router'
import SortedName from '../views/SortedName.vue'
import SortedCapital from '../views/SortedCapital.vue'
import SortedPopulation from '../views/SortedPopulation.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Name',
    component: SortedName
  },
  {
    path: '/sortedByCapital',
    name: 'Capital',
    component: SortedCapital
  },
  {
    path: '/sortedByPopulation',
    name: 'Population',
    component: SortedPopulation
  },
]

const router = new VueRouter({
  routes
})

export default router
