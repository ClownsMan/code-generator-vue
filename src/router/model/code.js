// 路由懒加载
const code_table = () => import(/* webpackChunkName: "manage" */ '@/views/code/table');
const code_add = () => import(/* webpackChunkName: "manage" */ '@/views/code/add');

export const codeRoutes = [
  {
    path: '/code/table',
    component: code_table,
    name: 'table页',
    meta: {
      title: 'table页'
    },
  },
  {
    path: '/code/add',
    component: code_add,
    name: '新增页',
    meta: {
      title: '新增页'
    },
  },
];
