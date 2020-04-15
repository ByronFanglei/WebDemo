// 流式文件读取
// fs.createReadStream(path[, options])

const fs = require('fs');
// 创建一个可读流
const rs = fs.createReadStream('hello.txt');
// 创建一个可写流
const ws = fs.createWriteStream('hello6.txt');

rs.once('open', () =>{
  console.log('可读流开始');
})
rs.once('close', () =>{
  console.log('可读流结束');
})
ws.once('open', () =>{
  console.log('可写流开始');
})
ws.once('close', () =>{
  console.log('可写流结束');
})
// pipe()可以将可读流中的内容，直接输出到可写流
rs.pipe(ws);