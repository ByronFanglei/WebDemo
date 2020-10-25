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

const handleBlogRouter = (request, respond) => {

  const method = request.method // GET POST
  const url = request.url
  request.path = url.split('?')[0]
  const id = request.query.id

  // 获取博客接口
  if (method === 'GET' && request.path === '/api/blog/list') {
    const author = request.query.author || ''
    const keyword = request.query.keyword || ''
    const listData = getList(author, keyword)
    return new SuccessModel(listData)
  }
  // 获取一篇博客接口
  if (method === 'GET' && request.path === '/api/blog/detail') {
    if (id) {
      const detailData = getDetail(id)
      return new SuccessModel(detailData)
    }
    return new ErrorModel('not id')
  }
  // 新增一篇博客
  if (method === 'POST' && request.path === '/api/blog/new') {
    const blogData = newBlog(request.body)
    return new SuccessModel(blogData)
  }
  // 更新一篇博客
  if (method === 'POST' && request.path === '/api/blog/update') {
    const blogData = updateBlog(id, request.body)
    if (blogData) {
      return new SuccessModel()
    } else {
      return new ErrorModel('更新blog失败')
    }
  }
  // 删除一篇博客
  if (method === 'POST' && request.path === '/api/blog/del') {
    const blogData = deleteBlog(id)
    if (blogData) {
      return new SuccessModel()
    } else {
      return new ErrorModel('删除blog失败')
    }
    
  }

}

module.exports = handleBlogRouter