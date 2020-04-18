// app application 应用程序
// 把当前模块所有的依赖项都声明再文件模块最上面
// 为了让目录结构保持统一清晰，所以我们约定，把所有的 HTML 文件都放到 views（视图） 目录中
// 我们为了方便的统一处理这些静态资源，所以我们约定把所有的静态资源都存放在 public 目录中
// 哪些资源能被用户访问，哪些资源不能被用户访问，我现在可以通过代码来进行非常灵活的控制
// / index.html
// /public 整个 public 目录中的资源都允许被访问
// 前后端融会贯通了，为所欲为

const http = require('http');
const fs = require('fs');

http.createServer((request, respones) => {
  const url = request.url;
  if(url === '/'){
    fs.readFile('./views/index.html', (err, data) => {
      if(err){
        return respones.end('404')
      }
      respones.end(data);
    })
  }else if(url.indexOf('/public/') === 0){
    console.log(url)
    //判断public的url请求，如果为upublic的请求直接跳转到本地静态资源public的文件下
    fs.readFile('.'+url, (err, data) => {
      if(err){
        return respones.end('404')
      }
      respones.end(data)
    })
  }
}).listen(5000,() => {
  console.log('服务已开启。。。http:127.0.0.1:5000/')
})