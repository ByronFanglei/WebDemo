const http = require('http');
const fs = require('fs');
const server =  http.createServer();
server.on('request',(request, response) => {
  if(request.url === '/plain'){
    response.setHeader('Content-Type', 'text/plain; charset=utf-8');
    response.end('测试服务')
  }else if(request.url === '/html'){
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.end('<h1>hello 拜伦</h1>')
  }else if(request.url === '/img'){
    response.setHeader('Content-Type', 'image/jpeg; charset=utf-8')
    fs.readFile('../Images/iPhone11.jpg', (err, data) => {
      if(!err) {
        response.end(data);
      }else{
        console.log(`请求失败：${err}`)
      }
    })
  }
  
})
server.listen('3333',() => {
  console.log('服务已开启。。。,http://127.0.0.1:3333/ 来访问')
})