// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

//import element-ui相关
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//字体图标
import '@/lib/css/font-awesome.css';

//sssssss
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { store } from './store/store'
Vue.use(VueAxios, axios)


Vue.config.productionTip = false

Vue.use(ElementUI);
router.beforeEach((to, from, next) => {
  store.state.token = sessionStorage.getItem('token');//获取浏览器存储的token 登陆了就有，没登录就没有
  store.state.userID = sessionStorage.getItem('userID');//获取浏览器存储的userID 登陆了就有，没登录就没有
  //判断该路由是否需要登录权限
  if (to.meta.requireAuth) {
    //通过vuex state获取当前的token是否有值
    if ( store.state.token == null) {
      next({
        path: '/login'
      })
    } else {
      next();
    }
  } else {
    //进入不需要登录权限的页面
    next();
  }
})


/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

axios.interceptors.request.use(requestConfig=>{
  if(!store.state.token){
   requestConfig.headers.Authorization=`${store.state.token}`
  }
  requestConfig.headers.Authorization='test'
  // console.log(requestConfig)
  return requestConfig
})

axios.interceptors.response.use(response=>{
  // console.log(response);
  return response;
})
