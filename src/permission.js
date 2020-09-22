import Vue from "vue";
import router from './router';
import store from './store';

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const whiteList = ['login'];  // 免登陆路由集合
const defaultRoutePath = '/home';  // 默认展示页面

// 全局前置守卫
router.beforeEach((to, from, next) => {
  NProgress.start();
  const token = localStorage.getItem('token');
  if(token) { // 如果有token，验证当前人的身份，获取有权限的菜单
    if (to.path === '/user/login') {
      next({ path: defaultRoutePath })
    }else {
      next()
    }
  }
  else {   // 如果没有token
    // 如果是去免登录路由跳转
    if(whiteList.includes(to.name)) {
      next()
    }
    // 前往需要验证的页面，跳转登录页面
    else {
      next({ path: '/user/login' })
    }
  }
})

router.afterEach((to, from) => {
  NProgress.done();
})