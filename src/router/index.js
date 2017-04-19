import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home'
import Form from 'views/Form'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/form',
      name: 'Home',
      component: Form
    }
  ]
})
