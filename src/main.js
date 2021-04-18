import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin Bootstrap
Vue.use(IconsPlugin)

import header from './components/appheader.vue'
import Bodycomponent from './components/appbody.vue'
import home from './components/home.vue'

Vue.use(VueRouter)

// Declarar rutas

const routes=[
  {
    path: '/header', 
    name: 'header', 
    component: header
  },
  {
    path: '/body', 
    name: 'bodycomponent', 
    component: Bodycomponent
  },
  {
    path: '/',
    name: 'home',
    component: home
  }
]
const router = new VueRouter({routes, mode:'history'})

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

