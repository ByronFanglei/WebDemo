const {
  exec
} = require('../db/mysql')

const Login = (username, password) => {
  let sql = `
    select username, realname from users 
    where username='${username}' and password='${password}';
  `
  return exec(sql).then(value => {
    return value[0] || {}
  })

}

module.exports = {
  Login
}