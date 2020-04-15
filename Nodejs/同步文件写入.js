// fs文件系统：通过node来操作系统中的文件
// 使用文件系统，需要先引入fs模块，fs是核心模块
// 同步文件
// fs.openSync(path, flage, [mode])：打开文件
//   path: 要打开文件的路径
//   flage：打开文件要操作的类型 r：只读 w：可写
//   mode 设置文件的操作权限，一般不传
//   返回一个文件描述符作为结果，我们可以通过该描述符对文件进行操作
// fs.writeSync(fd, string[, position[, encoding]])
  // fd：文件描述符，需要传递要写入的文件的描述符
  // string：要写入的内容
  // position：写入的起始位置
  // encoding：写入的编码，默认utf-8
  // fs.closeSync(fd);
    // fd：要关闭的文件的描述符





const fs = require('fs');
// 打开文件
const fd = fs.openSync('hello.txt', 'w');
// 对文件进行操作
fs.writeSync(fd, "hello byron!", 2);
// 关闭文件
fs.closeSync(fd);

// console.log(fd);