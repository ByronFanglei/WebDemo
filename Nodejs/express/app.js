//引入模块
const express = require('express');
//创建服务
const app = express();
//开放文件
app.use('/public/', express.static('/public/'));
//创建路径
app.get('/', (req, res) => {
  res.send('hello express')
})




//监听服务
app.listen('5000', () => {
  console.log('服务已开启，访问： http:127.0.0.1:5000')
})