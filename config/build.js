const UpyunUpload = require('upyun-uploadfile');
const path = require('path');

// let fileSort = [ '/js', '/css' ];
// let uploadFile = function (sort) {
//   new UpyunUpload({
//     /**
//      * 上传的服务名
//     */
//     serviceName: 'zc-upai',
//     /**
//      * 操作员账号
//     */
//     operatorName: 'file',
//     /**
//      * 操作员密码
//     */
//     password: 'piPUkjK24KmzstGBg74ixsNuD7x31oXD',
//     /**
//      * 上传服务器路径
//     */
//     remoteFilePath: VUE_APP_UPLOAD + sort,
//     /**
//      * 本地文件夹路径
//     */
//     filePath: path.resolve(__dirname, './dist/js'),
//     /**
//      * 是否打开上传前的提示 默认打开
//     */
//     openConfirm: false,
//     /**
//      * 上传成功回调
//      * @param {array} files [成功文件列表]
//     */
//     success: function(files) {
//       console.log('success',files)
//     },
//     /**
//      * 上传失败回调
//      * @param {array} files [失败文件列表]
//     */
//     error: function(files){
//       console.log('error',files)
//     }
//   });
// }

// fileSort.forEach(item => {
//   uploadFile(item)
// })

new UpyunUpload({
  filePath: './config',
  upyunName: 'yunupload',
  upyunPath: '/test',
  operatorName: 'file',
  operatorPassword: 'k9xvwjThkxqxXDziZ1uZremWOETTYIbt'
});