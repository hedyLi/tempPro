import Vue from 'vue'
import Router from 'vue-router'
import ShaFa from '@/components/ShaFa'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShaFa',
      component: ShaFa
    }
  ]
})
