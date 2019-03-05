import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Item from './components/Item'
import Platform from './components/Platform'
import Me from './components/Me'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/item',
      component: Item
    },
    {
      path: '/platform',
      component: Platform
    },
    {
      path: '/me',
      component: Me
    }
  ],
  mode: 'history'
})

export default router
