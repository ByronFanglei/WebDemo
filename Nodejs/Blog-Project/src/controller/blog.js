const {
  exec
} = require('../db/mysql')

// 获取博客列表
const getList = (author, keyword) => {
  let sql = 'select * from blogs where 1=1 '
  if (author) {
    sql += `and author='${author}' `
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `and state=1 order by createtime desc;`
  // 返回promise
  return exec(sql)
}

// 获取博客内容
const getDetail = (id) => {
  let sql = `select * from blogs where id=${id}`
  return exec(sql).then(value => {
    return value[0]
  })
}

// 新增博客
const newBlog = (blogData = {}) => {
  const {
    title,
    content,
    author
  } = blogData
  let state = 1
  let sql = `
    insert into blogs (title, content, createTime, author, state) 
    values 
    ('${title}', '${content}',${Date.now()},'${author}','${state}');
  `
  return exec(sql).then(value => {
    return {
      id: value.insertId
    }
  })
}

// 更新博客
const updateBlog = (id, blogData = {}) => {
  const { title, content } = blogData
  let sql = `
    update blogs set 
    title='${title}', content='${content}' where 
    id=${id};
  `
  return exec(sql).then(value => {
    if (value.affectedRows > 0) {
      return true
    }
    return false
  })
}

// 删除博客
const deleteBlog = (id, author) => {
  let sql = `
    update blogs set 
    state=0 where 
    id=${id} and author='${author}';
  `
  return exec(sql).then(value => {
    if (value.affectedRows > 0) {
      return true
    }
    return false
  })
  
}




module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
}