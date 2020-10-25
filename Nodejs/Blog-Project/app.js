const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

const getPostData = (request) => {
  return new Promise((resolve, reject) => {
    if (request.method !== 'POST') {
      resolve({})
      return
    }
    if (request.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }
    let postData = ''
    request.on('data', chunk => {
      postData += chunk.toString()
    })
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

  const url = request.url
  request.path = url.split('?')[0]
  request.query = querystring.parse(url.split('?')[1])

  getPostData(request).then(value => {
    request.body = value
    // 处理blog
    const blogData = handleBlogRouter(request, respond)
    if (blogData) {
      respond.end(JSON.stringify(blogData))
      return
    }
    // 处理user
    const userData = handleUserRouter(request, respond)
    if (userData) {
      respond.end(JSON.stringify(userData))
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