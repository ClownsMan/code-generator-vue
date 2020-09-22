let requestConfig = {
  _terrace: '',
  _cost: '',
  _upload: '',
}

if (process.env.NODE_ENV === 'production') {
  //测试环境
  requestConfig._terrace = process.env.VUE_APP_TERRACEPATH;
  requestConfig._cost = process.env.VUE_APP_COSTPATH;
  requestConfig._upload = 'http://v0.api.upyun.com';
} else {
  requestConfig._terrace = '/terrace';
  requestConfig._cost = '/cost';
  requestConfig._upload = '/upload';
  requestConfig._task = '/task';
}

export default requestConfig;