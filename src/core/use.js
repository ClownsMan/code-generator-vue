import Vue from 'vue';
import echarts from 'echarts'; // 引入echarts
// import X2JS from 'x2js';  // 引入x2js
import VueClipboard from 'vue-clipboard2' // 复制剪贴板

Vue.prototype.echarts = echarts;
// Vue.prototype.$x2js  = new X2JS();
Vue.use(VueClipboard);