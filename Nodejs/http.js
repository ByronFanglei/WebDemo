// 加载核心模块
const http = require('http');
// 使用http.createServer()方法创建web服务器，返回Sever实例
const server = http.createServer();
// request请求事件，当客户端访问时，调用回调函数
  // request回调函数有两个参数
  //   request：请求对象，获取客户端的一些请求信息，
  //   response：响应对象
server.on('request', (request, response) => {
  console.log(`当前请求地址为：${request.url}`);
  console.log(`当前请求端口号为：${request.socket.remotePort}`);
  console.log(`当前请求ip为：${request.socket.remoteAddress}`);
  // response对象可以使用write向客户端发送数据，但最后一定要使用end结束响应
  switch(request.url){
    case '/':
    response.write('hello');break;
    case '/index':
    response.write('index');break;
    case '/login':
    response.write('login');break;
  }
  response.end();
})
//绑定端口号，启动服务器
server.listen(5000, () => {
  console.log('服务器启动成功，通过 http://127.0.0.1:5000/ 来访问！');
})