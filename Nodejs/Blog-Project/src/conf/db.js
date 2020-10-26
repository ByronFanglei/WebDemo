const evn = process.env.NODE_ENV // 环境变量

let MYSQL_CONF
// 开发环境
if (evn === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'myblog'
  }
}
// 生产环境
if (evn === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'myblog'
  }
}

module.exports = {
  MYSQL_CONF
}