import Vue from 'vue'
import Router from 'vue-router'
import ShaFa from '@/components/ShaFa'
import Login from '@/pages/login/Login'
import Register from '@/pages/register/Register'
import AppStore from '@/pages/appStore/appStore'
import Product from '@/pages/product/product'
import Tv from '@/pages/product/tv'
import Box from '@/pages/product/box'
import Projector from '@/pages/product/projector'
import About from '@/pages/About/about'

import TVGames from "@/pages/TVGames/tvGames";

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
    },{
    	path:'/product',
    	name:'product',
    	component:Product
//  	children:[
//  	  {path:'box',component:Box}
//  	]
    },{
      path:'/product/tv',
      name:'tv',
      component:Tv    	
    },{
      path:'/product/box',
      name:'box',
      component:Box    	
    },{
      path:'/product/projector',
      name:'projector',
      component:Projector 
    },{
    	path:'/about',
    	name:'about',
    	component:About
    }
  ]
})
