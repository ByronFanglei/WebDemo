const MyPromise = require('./简易promise')

let p = new MyPromise((resolve, reject) => {
  // resolve('success')
  // reject('error')
  // throw new Error('Exception Error')
  setTimeout(() => {resolve('set')}, 1000)
})

p.then((value) => {
  console.log(`value1:${value}`)
}, (reason) => {
  console.log(`reason1:${reason}`)
})

p.then((value) => {
  console.log(`value2:${value}`)
}, (reason) => {
  console.log(`reason2:${reason}`)
})