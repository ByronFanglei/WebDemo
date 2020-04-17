const http = require('http');
const fs = require('fs');
const server = http.createServer();
const dir = 'dir/'
var content = '';
// 读取目录
fs.readdir(dir, (err, data) => {
  if (!err) {
    data.forEach((item) => {
      content += `
      <tr>
      <td valign="top"><img src="/icons/folder.gif" alt="[DIR]"></td>
      <td><a href="css/">${item}/</a> </td>
      <td align="right">2020-03-02 22:40 </td>
      <td align="right"> - </td>
      <td>&nbsp;</td>
      </tr>
      `
    })
  }
})
//发送响应
server.on('request', (request, response) => {
  const url = request.url;
  // var filePath = '/index.html';
  // if(url !== '/'){
  //   filePath = url;
  // }
  fs.readFile('./template.html', (err, data) => {
    if (!err) { 
      data = data.toString();
      data = data.replace('@@', content)
      return response.end(data);
    }
    response.end('404')
  })
})

server.listen('5000', () => {
  console.log('服务已开启。。。,http://127.0.0.1:5000/ 来访问')
});

