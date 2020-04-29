const md5 = require('md5-node')
const express = require('express')
const User = require('../models/user')
const Topic = require('../models/topic')
const router = express.Router()

//渲染首页
router.get('/', (req, res) => {
  Topic.find().then((value) => {
    res.render('index.html', {
      user: req.session.user,
      topic: value
    })
  }).catch((reason) => {
    console.log(reason)
  })
});
//渲染登录页面以及提交数据
router.get('/login', (req, res) => {
  res.render('login.html')
});
router.post('/login', (req, res) => {
  const body = req.body
  User.findOne({ nickname: body.nickname }).then((value) => {
    if (!value) {
      //数据库为查到数据，用户名未注册
      return res.status(200).json({
        code: 2
      })
    }

    if (md5(md5(body.password)) === value.password) {
      if(body.realme === 'on'){
        req.session.cookie.maxAge = 10*60*60*1000
      }
      // 密码正确,登陆成功，保存session
      req.session.user = value
      return res.status(200).json({
        code: 0
      })
    } else {
      //密码错误
      return res.status(200).json({
        code: 1
      })
    }
  }).catch((reason) => {
    console.log(`findOneLoginError:${reason}`)
    return res.status(500).json({
      code: 500
    })
  })
});
//渲染注册页面以及提交数据
router.get('/register', (req, res) => {
  res.render('register.html')
});
router.post('/register', (req, res) => {
  /**
   * code:
   * 0：数据存储成功
   * 1：数据已存在
   * 2：数据存储失败
   * 3：查询错误，服务端错误
   */
  //判断用户是否存在，存在不能注册，否则注册新用户
  const body = req.body
  User.findOne({
    $or: [
      { email: body.email },
      { nickname: body.nickname }
    ]
  }).then((value) => {
    //value为查到的数据
    if (value) {
      //邮箱或者昵称已存在
      console.log('数据已存在')
      return res.status(200).json({
        code: 1
      })
    }
    //邮箱或者昵称不存在
    body.password = md5(md5(body.password))
    new User(body).save().then((value) => {
      //用户信息添加到session
      req.session.user = value
      return res.status(200).json({
        code: 0
      })
    }).catch((reason) => {
      return res.status(200).json({
        code: 2
      })
    })

  }).catch((reason) => {
    console.log(`findOneRegisterError:${reason}`)
    return res.status(500).json({
      code: 500
    })
  })
});

//退出操作
router.get('/logout', (req, res) => {
  //清除登录状态
  req.session.user = null
  //重定向到登陆页面
  res.redirect('/login')
})

//个人主页渲染
router.get('/settings/admin', (req, res) => {
  res.render('settings/admin.html',{
    user: req.session.user
  })
})
router.post('/settings/admin', (req, res) => {
  /**
   * code
   * 0：修改成功
   * 1：新密码与旧密码相同
   * 2：两个新密码不一样
   * 3：输入密码不正确
   */
  //获取session中的密码
  const password = req.session.user.password
  const id = req.session.user._id
  if(!(req.body.newpass === req.body.newpasstwo)){
    return res.status(200).json({
      code: 2
    })
  }
  if(password === md5(md5(req.body.newpass))){
    return res.status(200).json({
      code: 1
    })
  }
  if(md5(md5(req.body.oldpass)) === password){
    User.findByIdAndUpdate(id, {
      password: md5(md5(req.body.newpass))
    }).then((value) => {
      delete req.session.user
      return res.status(200).json({
        code: 0
      })
    }).catch((reason) => {
      console.log(reason)
    })
  }else{
    return res.status(200).json({
      code: 3
    })
  }
})
//基本信息渲染
router.get('/settings/profile', (req, res) => {
  res.render('settings/profile.html',{
    user: req.session.user
  })
})



//导出路由
module.exports = router