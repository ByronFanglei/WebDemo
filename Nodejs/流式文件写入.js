// 流式文件写入

// fs.createWriteStream(path[, options]):创建一个可写流
  // path：文件路径
  // options：配置的参数

const fs = require('fs');
const ws = fs.createWriteStream('hello4.txt');
// on(事件字符串，回调函数)
//   可以为对象绑定一个事件，类似jq
// once(事件字符串，回调函数)
//   可以为对象绑定一次性事件，该事件将会在触发一次以后自动失效
ws.once('open',function(){
  console.log('流式文件打开了！')
})
ws.once('close',function(){
  console.log('流式文件关闭了！')
})
ws.write('通过流式文件写入');
ws.write('锄禾日当午');
ws.write('汗滴禾下土');
// 关闭流
ws.close();