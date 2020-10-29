const redis = require('redis')
const {
  REDIS_CONF
} = require('../conf/db')

const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
redisClient.on('error', err => {
  console.log(err)
})

function set(key, value) {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  //redis.print传入后，当set完后打印是否正确
  redisClient.set(key, value, redis.print)
}

function get(key) {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err)
        return
      }
      // 当获取的值为null时
      if (val == null) {
        resolve(null)
        return
      }
      // 当val有值时，如果可以进行JSON.parse，则进行JSON.parse转换，反之不转换直接resolve
      try{
        resolve(
          JSON.parse(val)
        )
      }catch(e) {
        resolve(val)
      }
    })
  })
}

module.exports = {
  set,
  get
}