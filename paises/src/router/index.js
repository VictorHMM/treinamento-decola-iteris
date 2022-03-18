import Vue from 'vue'
import VueRouter from 'vue-router'
import CountriesView from '../views/CountriesView.vue'
import CountryInfoView from '../views/CountryInfoView'


Vue.use(VueRouter)

const routes = [
  {
    path: '/countriesList',
    name: 'Countries',
    component: CountriesView
  },
  {
    path: '/countryInfo',
    name: 'Info',
    component: CountryInfoView
  },
]

const router = new VueRouter({
  routes
})

export default router
