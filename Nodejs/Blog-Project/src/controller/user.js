const { Model } = require("mongoose")

const LoginCheck = (username, password) => {
  if (username === 123 && password === 321) {
    return true
  } else {
    return false
  }
}

module.exports = {
  LoginCheck
}
