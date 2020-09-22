import Vue from 'vue';
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

// 日期过滤器
Vue.filter('dateFormat', function(value, pattern = 'YYYY-MM-DD HH:mm:ss') {
  if(!value) return ''
  return moment(value).format(pattern)
})

// 数字三位数加逗号格式化数字
Vue.filter('thousandFormat', function(value) {
  if(!value) return 0
  return value.toString().replace(/\B(?=(?:\d{3})+$)/g, ',')
})