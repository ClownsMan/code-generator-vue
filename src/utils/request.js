import Vue from 'vue'
import axios from 'axios'
import router from '@/router'
import requestConfig from '@/config/request.config'

const service = axios.create({
  baseURL: requestConfig._cost,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charse=UTF-8'
  }
});

// 错误回调函数
const err = (error) => {
  if (error.response) {
    const data = error.response.data;
    //TODO 对于状态码的错误处理
    // 超时处理
    if (JSON.stringify(error).includes('timeout')) {
      Vue.prototype.$message.error('服务器响应超时，请刷新当前页');
    }
  }
  return Promise.reject(error)
}

//请求拦截器
service.interceptors.request.use(
  config => {
    //在发送请求之前携带token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['token'] = token;
    }
    return config;
  },
  err
);

//响应拦截器
service.interceptors.response.use(
  response => {
    //返回错误处理
    const data = response.data;
    //返回错误处理
    if (data.code === '000000') { // 接口返回报错
      Vue.prototype.$message.error(data.msg);
    } else if (data.code === '000003') { // 表示token过期
      localStorage.setItem('token', '');
      router.replace('/user/login')
    }else if(data) {

    }
    return response;
  },
  err
);

export default service;

/**
 * fetch get请求方法
 * @param {*} url
 * @param {*} params
 * */
export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    service
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
/**
 * post post请求方法
 * @param {*} url
 * @param {*} params
 * */
export function post(
  url,
  params = {},
  data = {},
  config = {
    transformRequest: [
      function (data, headers) {
        headers['Content-Type'] = 'application/json';
        return JSON.stringify(data); // 需要返回字符串的data
      },
    ],
  }
) {
  return new Promise((resolve, reject) => {
    service.post(url, params, data, config).then(
      response => {
        resolve(response.data);
        console.log('请求成功')
      },
      err => {
        reject(err);
      }
    );
  });
}
/**
 * patch patch请求方法
 * @param {*} url
 * @param {*} data
 */
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    service
      .patch(url, data, {
        transformRequest: [
          function (fData, headers) {
            headers['Content-Type'] = 'application/json';
            return JSON.stringify(fData);
          },
        ],
      })
      .then(
        response => {
          resolve(response.data);
        },
        err => {
          reject(err);
        }
      );
  });
}
/**
 * del delete请求方法
 * @param {*} url
 * @param {*} data
 */
export function del(url, data = {}) {
  return new Promise((resolve, reject) => {
    service.delete(url, {
      data
    }).then(
      response => {
        resolve(response.data);
      },
      err => {
        reject(err);
      }
    );
  });
}
/**
 * put请求方法
 * @param {*} url
 * @param {*} params
 * @param {*} data
 * */
export function put(
  url,
  params = {},
  data = {},
  config = {
    transformRequest: [
      function (data, headers) {
        headers['Content-Type'] = 'application/json';
        return JSON.stringify(data); // 需要返回字符串的data
      },
    ],
  }
) {
  return new Promise((resolve, reject) => {
    service.put(url, params, {
      params: data
    }, config).then(
      response => {
        resolve(response.data);
        console.log('请求成功')
      },
      err => {
        reject(err);
      }
    );
  });
}