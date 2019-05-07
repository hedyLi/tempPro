import Vue from 'vue'
import Router from 'vue-router'
import ShaFa from '@/components/ShaFa'
import Login from '@/pages/login/Login'
import Register from '@/pages/register/Register'
import AppStore from '@/pages/appStore/appStore'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShaFa',
      component: ShaFa
    },{
      path:'/Login',
      name:'login',
      component:Login
    },{
      path:'/Register',
      name:'register',
      component:Register
    },{
      path:'/AppStore',
      name:'appStore',
      component:AppStore
    }
  ]
})
