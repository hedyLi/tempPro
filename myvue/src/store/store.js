import Vue from 'vue'
import Vuex from 'vuex' //引入vuex
import router from '../router/index'

Vue.use(Vuex) //全局引用vuex插件
export const store = new Vuex.Store({
    //存储想要共享的属性
    state: {
        //存储已登录用户的标识
        token: '',
        //已登录的用户账号
        userID: ''

    },
    //计算属性值并返回 有点类似组件中的computed
    getters: {


    },//getters
    // 方法的集合
    mutations: {
        getUserInfo(store, params) {
            //在浏览器存储中存放token值，避免刷新的时候数据丢失
            sessionStorage.setItem('token', params.token);
            sessionStorage.setItem('userID', params.userID);
            store.token = params.token;
            store.userID = params.userID;
        },
        logout(store, params) {
            sessionStorage.removeItem('token', params.token);
            sessionStorage.removeItem('userID', params.userID);
            store.token = null;
            store.userID =null;
            router.push('/')
        }
    },
    // 定义异步事件
    actions: {
    }
})