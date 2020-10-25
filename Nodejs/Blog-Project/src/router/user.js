const { LoginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = (request, respond) => {

  const method = request.method
  const url = request.url
  request.path = url.split('?')[0]

  // 登录接口
  if (method === 'POST' && request.path === '/api/user/login') {
    const { username, password } = request.body
    const loginDate = LoginCheck(username, password)
    if (loginDate) {
      return new SuccessModel('登陆成功')
    } else {
      return new ErrorModel('账户名或密码错误')
    }
  }
}

module.exports = handleUserRouter
