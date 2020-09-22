import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';

// 引入js
import './core/components'// 全局组件引入
import './core/use'// 第三方
import './core'// 自己封装的js

import "./permission"; // 路由权限
import "./utils/filters"; // 全局过滤器

// 引入第三方样式文件
import 'ant-design-vue/dist/antd.less';
import './utils/style/global.less';

Vue.config.productionTip = false

// 使用第三方
Vue.use(Antd);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
