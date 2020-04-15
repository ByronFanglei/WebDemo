// 异步文件操作
// fs.open(path[, flags[, mode]], callback)
  // 用来打开一个文件
  // 异步调用方法，结果都是通过回调函数的参数返回的
  // 回调函数有两个参数：
  //   err：错误对象，如果没有错误则为null
  //   fd：文件的描述符
// fs.write(fd, string[, position[, encoding]], callback)
  // 用来写入一个文件
// fs.close(fd, callback)
  // 关闭文件

const fs = require('fs');

fs.open('hello2.txt', 'w', function(err, fd){
  // 判断是否有错
  if(!err) {
    // 如果没错进行文件写入
    fs.write(fd, '这个是异步文件写入', function(err){
      if(!err){
        console.log('文件写入成功！');
      }
      //关闭文件
      fs.close(fd, function(err){
        if(!err){
          console.log('文件已关闭！');
        }
      })
    })
  }
})

