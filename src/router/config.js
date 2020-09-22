// import { BasicLayout } from '@/layouts/index';

// // 路由懒加载
// // const Login = () => import(/* webpackChunkName: "homepages" */ '@/views/Login');
// const Home = () => import(/* webpackChunkName: "homepages" */ '@/views/home');
// // const printPage = () => import(/* webpackChunkName: "homepages" */ '@/views/financeCenter/fundsManagement/pages/printPage');

// import { userSettingRoutes } from './model/userSetting';
// import { contractRoutes } from './model/contract';
// import { projectCostRoutes } from './model/projectCost';
// import { systemManagRoutes } from './model/systemManag';
// import { clientManagRoutes } from './model/clientManag';
// import { financeCenterRoutes } from './model/financeCenter';
// import { homepagesRoutes } from './model/homepages';
// import { workbenchRoutes } from './model/workbench';
// import { showWordRoutes } from './model/showWordOrImg';
// import { projectTheLogRoutes } from './model/projectTheLog';
// import { toViewRecordRoutes } from './model/toViewRecord';
// import { projectCastMarkRoutes } from './model/projectCastMark';
// import { myAccountRoutes } from './model/myAccount';
// // import { testAllPage } from './testPage';
// import { userActivationRoutes } from './model/userActivation';
// import { projectCenterRoutes } from './model/projectCenter'; // 项目中心

export const routeMap = {
      home: () => import(/* webpackChunkName: "homepages" */ '@/views/home'),
      // ...contractRoutes,
      // ...systemManagRoutes,
      // ...userSettingRoutes,
      // ...projectCostRoutes,
      // ...financeCenterRoutes,
      // ...homepagesRoutes,
      // ...workbenchRoutes,
      // ...clientManagRoutes,
      // ...showWordRoutes,
      // ...projectTheLogRoutes,
      // ...toViewRecordRoutes,
      // ...projectCastMarkRoutes,
      // ...myAccountRoutes,
      // ...userActivationRoutes,
      // ...projectCenterRoutes
};
