const http = require('http');
const fs = require('fs');
const url = require('url');
const template = require('art-template');
const comments = [{
  name: '张三',
  message: '123',
  dateTime: '222'
}]
http.createServer((request, respones) => {
  // 使用url模块的parse方法将路径解析为对象，第二个参数true表示直接将字符串转为对象，通过query访问
  const parseObj = url.parse(request.url, true);
  // 单独获取不包含查询字符串的路径部分，也就是不包含？之后的内容
  const pathName = parseObj.pathname;
  //判定首页
  if(pathName === '/'){
    fs.readFile('./views/index.html', (err, data) => {
      if(err){
        return respones.end('404')
      }
      const htmlStr =  template.render(data.toString(), {
        comments
      })
      respones.end(htmlStr);
    })
    //判定发表页面
  }else if(pathName === '/post'){
    fs.readFile('./views/post.html', (err, data) => {
      if(err){
        return respones.end('404')
      }
      respones.end(data)
    })
    //判定public文件
  }else if(pathName.indexOf('/public/') === 0){
    // console.log(url)
    //判断public的url请求，如果为public的请求直接跳转到本地静态资源public的文件下
    fs.readFile('.'+pathName, (err, data) => {
      if(err){
        return respones.end('404')
      }
      respones.end(data)
    })
    //判断留言提交
  }else if(pathName === '/pinglun'){
    //获取get提交数据？之后的值
    const comment = parseObj.query
    comment.dateTime = Date();
    comments.unshift(comment)
    //设置临时重定向code 302,301是永久重定向
    respones.statusCode = 302
    //设置响应头的Location，Location会告诉重定向去哪里
    respones.setHeader('Location', '/')
    respones.end();
  }else{
    //判定404页面
    fs.readFile('./views/404.html', (err, data) => {
      if(err){
        return respones.end('404')
      }
      respones.end(data)
    })
  }
}).listen(5000,() => {
  console.log('服务已开启。。。http:127.0.0.1:5000/')
})

// 基本步骤
// 1. / index.html
// 2. 开放 public 目录中的静态资源
//    当请求 /public/xxx 的时候，读取响应 public 目录中的具体资源
// 3. /post post.html
// 4. /pinglun
//    4.1 接收表单提交数据
//    4.2 存储表单提交的数据
//    4.3 让表单重定向到 /
//        statusCode
//        setHeader