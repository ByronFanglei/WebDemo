const mysql = require('mysql')
const { MYSQL_CONF } = require('../conf/db')

// 配置数据库
const connent = mysql.createConnection(MYSQL_CONF)
// 连接数据库
connent.connect()
// 封装执行sql函数，返回promise
function exec(sql){
  return new Promise((resolve, reject) => {
    connent.query(sql, (err, data) => {
      if (err) {
        reject(err)
        return
      }
      resolve(data)
    })
  })
}

module.exports = {
  exec
}
