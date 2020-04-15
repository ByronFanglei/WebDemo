// fs.readFile(path[, options], callback)
// fs.readFileSync(path[, options])
// path：要读取文件的路径
// options：读取的选项
// callback：回调函数，通过回调函数读取到内容返回

const fs = require('fs');
fs.readFile('hello2.txt', (err, data) => {
  if(!err){
    fs.writeFile('hello5.txt',data,(err) => {
      if(!err){
        console.log('文件写入成功');
      }
    }) 
  }
})