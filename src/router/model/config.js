import { BasicLayout } from '@/layouts' // 基础页面
import {codeRoutes} from './code'
// 路由懒加载
const Home = () => import(/* webpackChunkName: "homepages" */ '@/views/home');


export const localRouteMap = [
  {
    path: '/',
    component: BasicLayout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home,
        name: 'home',
        meta: { title: '首页' },
      },
      ...codeRoutes
    ],
  },
];
