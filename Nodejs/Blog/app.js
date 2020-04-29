const express = require('express')
const path = require('path')
const routerSession = require('./router/session')
const routerTopic = require('./router/topic')
const bodyParser = require('body-parser');
const session = require('express-session')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session)
mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('useFindAndModify', false)
const app = express()

app.use(session({
  // 配置加密字符串，它会在原有加密基础之上和这个字符串拼起来去加密
  // 目的是为了增加安全性，防止客户端恶意伪造
  secret: 'blog',
  resave: false,
  // 无论你是否使用 Session ，我都默认直接给你分配一把钥匙
  saveUninitialized: false,
  cookie: { maxAge: 60 * 60 * 1000 },
  store: new MongoStore({   //将session存进数据库  用来解决负载均衡的问题
    url: 'mongodb://127.0.0.1/session', //将缓存数据放入数据库中
    touchAfter: 24 * 3600 //通过这样做，设置touchAfter:24*3600，您在24小时内
    //只更新一次会话，不管有多少请求(除了在会话数据上更改某些内容的除外)
  })
}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))
app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/'))

app.use(routerSession)
app.use(routerTopic)

app.listen('5000', () => {
  console.log('running...')
  console.log('http:127.0.0.1:5000')
})