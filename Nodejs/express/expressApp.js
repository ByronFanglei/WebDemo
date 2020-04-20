//使用express框架构建feedback
const express = require('express');
// const fs = require('fs');
// const template = require('art-template');
const app = express();
//配置express-art-template模板
app.engine('html', require('express-art-template'));
//配置默认目录
// app.set('views', 新目录)
//添加body-parser模块
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

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
app.post('/post', (req, res) => {
  //通过req.body获取post信息
  const data = req.body;
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


