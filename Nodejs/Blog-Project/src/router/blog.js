const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
} = require('../controller/blog')
const {
  SuccessModel,
  ErrorModel
} = require('../model/resModel.js')


// 统一登陆验证函数
const loginCheck = (request) => {
  if (!request.session.username) {
    return Promise.resolve(
      new ErrorModel('尚未登录')
    )
  }
}


const handleBlogRouter = (request, respond) => {

  const method = request.method // GET POST
  const url = request.url
  request.path = url.split('?')[0]
  const id = request.query.id

  // 获取博客接口
  if (method === 'GET' && request.path === '/api/blog/list') {
    const author = request.query.author || ''
    const keyword = request.query.keyword || ''
    const result = getList(author, keyword)
    return result.then(value => {
      return new SuccessModel(value)
    })
  }

  // 获取一篇博客接口
  if (method === 'GET' && request.path === '/api/blog/detail') {
    if (id) {
      const result = getDetail(id)
      return result.then(value => {
        return new SuccessModel(value)
      })
    }
    return new ErrorModel('请选择一篇博客')
  }

  // 新增一篇博客
  if (method === 'POST' && request.path === '/api/blog/new') {
    // 登录验证
    const loginCheckResult = loginCheck(request)
    if (loginCheckResult) {
      // 未登录
      return loginCheck
    }

    const author = request.session.username
    request.body.author = author

    const blogData = newBlog(request.body)
    return blogData.then(value => {
      return new SuccessModel(value)
    })
  }

  // 更新一篇博客
  if (method === 'POST' && request.path === '/api/blog/update') {

    const loginCheckResult = loginCheck(request)
    if (loginCheckResult) {
      // 未登录
      return loginCheck
    }

    const blogData = updateBlog(id, request.body)
    return blogData.then(value => {
      if (value) {
        return new SuccessModel()
      } else {
        return new ErrorModel('跟新博客失败！！！')
      }
    })
  }
  
  // 删除一篇博客
  if (method === 'POST' && request.path === '/api/blog/del') {

    const loginCheckResult = loginCheck(request)
    if (loginCheckResult) {
      // 未登录
      return loginCheck
    }

    const author = request.session.username

    const blogData = deleteBlog(id, author)
    return blogData.then(value => {
      if (value) {
        return new SuccessModel()
      } else {
        return new ErrorModel('删除blog失败')
      }
    })
  }

}

module.exports = handleBlogRouter