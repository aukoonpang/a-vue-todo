import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/todo'
    },
    {
      path: '/todo',
      component: () => import('./views/todo/index.vue')
    }
  ]
})
