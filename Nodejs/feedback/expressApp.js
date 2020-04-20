//使用express框架构建feedback
const express = require('express');
// const fs = require('fs');
// const template = require('art-template');
const app = express();
//配置express-art-template模板
app.engine('html', require('express-art-template'));
//配置默认目录
// app.set('views', 新目录)
const comments = [{
  name: '张三',
  message: '123',
  dateTime: '222'
}]
//开放文件
app.use('/public/' ,express.static('./public/'))
app.get('/', (req, res) => {
  //render默认选在views下的文件
  res.render('index.html', {
    title: 'Express',
    comments
  })
})
app.get('/post', (req, res) => {
  res.render('post.html')
})
app.get('/pinglun', (req, res) => {
  const data = req.query;
  data.dateTime = Date();
  comments.unshift(data);
  //重定向
  res.redirect('/')
  // res.statusCode = 302;
  // res.setHeader('Location', '/')
})
app.listen('5000', () => {
  console.log('服务已开启。。。http:127.0.0.1:5000/')
})

// 模块操作路径
//去磁盘根目录的data中查找index
// require('/data/index.js')
// require('data/index.js')
// //相对于当前文件的data中查找index
// require('./data/index.js')

