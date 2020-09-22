// 1，加载http核心模块
var http=require('http');

// 2，使用httpcreateServer()方法创建一个服务器
var server=http.createServer();

// 3，注册require请求事件 当客户端请求过来，就会自动触发服务器的request请求事件
// ，然后执行第二个参数，回调处理
server.on('request',function(){
  console.log("收到客户端的请求")
});


//  4，绑定端口号，启动服务器
server.listen(3000,function(){
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3000/来进行访问')
})