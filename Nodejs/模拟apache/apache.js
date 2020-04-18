//获取对应的核心模块
const http = require('http');
const template = require('art-template');
const fs = require('fs');
const time = new Date();
//建立服务
const server = http.createServer();
//请求服务
server.on('request', (request, response) => {
  // 读取文件
  fs.readFile('./template.html', (err, data) => {
    if(err){
      console.log('文件读取失败！！！')
    }
    // 读取目录
    fs.readdir('./dir', (err, files) => {
      if(err) {
        console.log('目录读取失败！！!')
      }
      var htmlStr = template.render(data.toString(), {
        title: 'byron',
        files,
        time
      })
      // 发送模板
      response.end(htmlStr)
    })
  })

})
//端口设置
server.listen('5000', () => {
  console.log('服务已开启，请访问：http://127.0.0.1:5000 来访问。。。')
})
