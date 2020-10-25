// 获取博客列表
const getList = (author, keyword) => {
  
  return [{
    id: 1,
    title: '标题1',
    content: '内容1',
    createTime: 123,
    author: 'A',
  }, {
    id: 2,
    title: '标题2',
    content: '内容2',
    createTime: 123123,
    author: 'B',
  }]
}

// 获取博客内容
const getDetail = (id) => {
  return {
    id: 1,
    title: '标题1',
    content: '内容1',
    createTime: 123,
    author: 'A',
  }
}

// 新增博客
const newBlog = (blogData = {}) => {
  return {
    id: 5
  }
}

// 更新博客
const updateBlog = (id, blogData = {}) => {
  return true
}

// 删除博客
const deleteBlog = (id) => {
  return true
}





module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
}