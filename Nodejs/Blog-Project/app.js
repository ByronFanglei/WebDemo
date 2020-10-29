const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const { set, get } = require('./src/db/redis')


// session数据
// const SESSION_DATA = {}

// 设置cookie过期时间
const CookieExpires = () => {
  let d = new Date()
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
  return d.toGMTString()
}

// 实用promise封装post接收数据
const getPostData = (request) => {
  return new Promise((resolve, reject) => {
    // 判断当前是否为post，如果不是直接resolve
    if (request.method !== 'POST') {
      resolve({})
      return
    }
    // 判断当前格式类型是否为json，如果不是直接resolve
    if (request.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }
    let postData = ''
    // 接收数据
    request.on('data', chunk => {
      postData += chunk.toString()
    })
    // 接收完成
    request.on('end', () => {
      if (!postData) {
        resolve({})
        return
      }
      resolve(JSON.parse(postData))
    })
  })
}

const serveHandle = ((request, respond) => {

  // 设置返回格式
  respond.setHeader('Content-type', 'application/json')

  const url = request.url // 获取url地址
  request.path = url.split('?')[0] // /api/blog/list
  request.query = querystring.parse(url.split('?')[1]) // author=雷军
  
  // 解析cookie
  request.cookie = {}
  const cookieStr = request.headers.cookie || '' // k1=1;k2=2
  cookieStr.split(';').forEach(item => {
    if (!item) {
      return
    }
    const arr = item.split('=')
    const key = arr[0].trim()
    const value = arr[1].trim()
    request.cookie[key] = value
  })

  // 解析session
  // let needSetsesson = false // 判断是否需要设置cookie
  // let userId = request.cookie.userId
  // if (userId) {
  //   if (!SESSION_DATA[userId]) {
  //     SESSION_DATA[userId] = {}
  //   }
  // } else {
  //   needSetsesson = true
  //   userId = Math.random().toString(36).slice(-8)
  //   SESSION_DATA[userId] = {}
  // }

  // request.session = SESSION_DATA[userId]

  // 解析session => redis
  let needSetsesson = false
  let userId = request.cookie.userId
  if (!userId) {
    needSetsesson = true
    userId = Math.random().toString(36).slice(-8)
    // 初始化redis中session值
    set(userId, {})
  }
  // 获取session
  request.sessionId = userId
  get(request.sessionId)
  .then(value => {
    if (value == null) {
      // 初始化redis中session值
      set(request.sessionId, {})
      // 设置session
      request.session = {}
    } else {
      // 设置session
      request.session = value
    }
    return getPostData(request)
  })
  .then(value => {
    // 获取post传递的数据，如果是get肯定是空的
    request.body = value
    // 处理blog
    const Blogresult = handleBlogRouter(request, respond)
    if (needSetsesson) {
      // 操作cookie, httpOnly 前端无法通过document.cookie获取
      respond.setHeader('Set-Cookie', `userId=${userId}; path=/; httpOnly; expires=${CookieExpires()}`)
    }
    if (Blogresult) {
      Blogresult.then(value => {
        respond.end(JSON.stringify(value))
      })
      return
    }

    // 处理user
    const UserData = handleUserRouter(request, respond)
    if (needSetsesson) {
      respond.setHeader('Set-Cookie', `userId=${userId}; path=/; httpOnly; expires=${CookieExpires()}`)
    }
    if (UserData) {
      UserData.then(value => {
        respond.end(JSON.stringify(value))
      })
      return
    }
    
    // 404
    respond.writeHeader(404, {
      "Content-type": "text/plain"
    })
    respond.write("404 not found")
    respond.end()
  })
})

module.exports = serveHandle
// process.env.NODE_ENV