const user = require('../controller/user')
const {
  Login
} = require('../controller/user')
const {
  SuccessModel,
  ErrorModel
} = require('../model/resModel')
const { set } = require('../db/redis')

const handleUserRouter = (request, respond) => {

  const method = request.method
  const url = request.url
  request.path = url.split('?')[0]

  // 登录接口
  if (method === 'POST' && request.path === '/api/user/login') {
    const {
      username,
      password
    } = request.body
    console.log('----------')
    console.log(username, password)
    
    const loginDate = Login(username, password)
    return loginDate.then(value => {
      if (value.username) {
        request.session.username = value.username
        request.session.realname = value.realname
        // 同步到redis
        set(request.sessionId, request.session)
        return new SuccessModel({
          message: '登录成功',
          name: value.realname
        })
      }
      return new ErrorModel('账户名或密码错误')
    })
  }

  // if (method === 'GET' && request.path === '/api/user/login-test') {
  //   if (request.session.username) {
  //     return Promise.resolve(
  //       new SuccessModel({
  //         Session: request.session
  //       })
  //     )
  //   }
  //   return Promise.resolve(
  //     new ErrorModel('登陆失败')
  //   )
  // }

}

module.exports = handleUserRouter