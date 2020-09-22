import { BasicLayout, userActivation, UserSetting, UserLayout } from '@/layouts' // 基础页面
import { localRouteMap } from '@/router/model/config' // 多个路由模块
// 权限路由集合
// export const asyncRouterMap = baseRoutes;

// 基础路由集合
export const constantRouterMap = [
  ...localRouteMap,
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: UserLayout,
      }
    ]
  },
  // 404
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  },
];