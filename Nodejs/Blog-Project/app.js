const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

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
  // 初始化cookie
  request.cookie = {}
  const cookieStr = request.headers.cookie || '' // k1:1;k2:2
  cookieStr.split(';').forEach(item => {
    if (!item) {
      return
    }
    const arr = item.split('=')
    const key = arr[0]
    const value = arr[1]
    request.cookie[key] = value
  })


  getPostData(request).then(value => {
    // 获取post传递的数据，如果是get肯定是空的
    request.body = value
    // 处理blog
    const Blogresult = handleBlogRouter(request, respond)
    if (Blogresult) {
      Blogresult.then(value => {
        respond.end(JSON.stringify(value))
      })
      return
    }

    // 处理user
    const UserData = handleUserRouter(request, respond)
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