import Vue from 'vue'
import http from '@/utils/request'  // axios实例
import conversion from '@/utils/conversion';
import handlerTree from "@/utils/handlerTree";  // 处理组织树、人员
import requestConfig from '@/config/request.config.js'
import JsonViewer from 'vue-json-viewer'

// 全局变量
Vue.prototype.http = http;  //全局使用axios
Vue.prototype._upload = requestConfig._upload
Vue.use(handlerTree);
Vue.use(conversion);
Vue.use(JsonViewer);