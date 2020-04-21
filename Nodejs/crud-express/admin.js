const express = require('express');
//引入路由
const router = require('./router');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('html', require('express-art-template'))
app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))
//路由挂在到app上
app.use(router);
app.listen('5000', () => {
  console.log('服务已连接：http:127.0.0.1:5000');
})