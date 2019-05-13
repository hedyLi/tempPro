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

Vue.config.productionTip = false

Vue.use(ElementUI);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
