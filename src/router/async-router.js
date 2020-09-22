import { getMenu } from '@/api/user'
import { routeMap } from '@/router/config' // 多个路由模块
import { localRouteMap } from '@/router/model/config' // 本地路由模块
import { BasicLayout } from '@/layouts' // 基础页面
import $store from '@/store';
// import { delete } from 'vue/types/umd';

let rootRouter = [
  {
    key: '',
    name: 'index',
    path: '/',
    component: BasicLayout,
    redirect: '/home',
    meta: {
      title: '首页'
    },
    children: []
  }
]

const notFoundRouter = {
  path: '*', redirect: '/404', hidden: true
}

let menuList = [
  {
    display: "00",
    href: "/home",
    menuAttribute: "public",
    menuIcon: "home",
    menuName: "首页",
    menuType: "menu",
    menuWeight: 1,
    operate: "00",
    parentUuid: "",
    remark: null,
    showHref: "home",
    state: "10",
    subObj: [],
    uuid: "ad14cbf261764efbb5a28feb9c785532"
  }
]

const generatorDynamicRouter = () => {
  return new Promise((resolve, reject) => {
    getMenu().then(res => {
      let routers, currentmenuList;
      if($store.getters.asyncRouter) { // 通过接口获取动态加载路由
        routers = generator(menuList);
        routers.push(notFoundRouter)
        currentmenuList = getCurrentMenu(menuList);
        rootRouter[0].children = routers;
      }else {    // 从写死的路由表获取
        currentmenuList = getCurrentMenu(res.data);
        localRouteMap.push(notFoundRouter);
        rootRouter = localRouteMap;
      }
      resolve({
        addRouters: rootRouter,
        menuList: currentmenuList,
        originalRouter: res.data
      })
    }).catch(err => {
      reject(err)
    })
  })
}

// 处理菜单
const getCurrentMenu = function(data) {
  let routers = JSON.parse(JSON.stringify(data));
  return routers.map(route => {
    let { menuIcon, menuName, uuid } = route;
    if(route.menuType !== 'menu') return
    let currentRouter = {
      name: route.showHref,
      menuDisplay: route.display === '00' ? true : false,
      path: route.href,
      component: routeMap[route.showHref] || (() => import(`@/views/${route.showHref}`)),
      meta: {
        title: menuName,
        icon: menuIcon || undefined,
        key: uuid, // 当前菜单的uuid
        // exhibition: exhibition,  // 用于控制是否展示数量
        // hiddenHeaderContent: hiddenHeaderContent, // 用于控制页面是否展示头部的面包屑
        // permission: item.display
      },
    }
    let isLoop = route.subObj.some(item => item.menuType === 'menu');
    // 是否有子菜单，并递归处理
    if (route.subObj && route.subObj.length > 0 && isLoop) {
      currentRouter.children = getCurrentMenu(route.subObj)
    }
    return currentRouter
  })
};

// 处理路由
const generator = function(data) {
  let routers = JSON.parse(JSON.stringify(data));
  let arr = [];
  routers.forEach(route => {
    let { menuIcon, menuName, uuid } = route;
    let currentRouter = {
      name: route.showHref,
      path: route.href,
      component: routeMap[route.showHref] || (() => import(`@/views/${route.showHref}`)),
      meta: {
        title: menuName,
        icon: menuIcon || undefined,
        key: uuid,
      },
    }
    arr.push(currentRouter)
    if(route.subObj && route.subObj.length > 0) {
      let menuChild = generator(route.subObj);
      arr = [...arr, ...menuChild]
    }
  })
  return arr
};
// 处理按钮
const getBtnByPage = function(data) {

};

export default generatorDynamicRouter;