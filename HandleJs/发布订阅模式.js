// 发布 -> 中间代理 <- 订阅
class Events {
  constructor() {
    // 存储回调函数
    this.callback = [],
    // 存储回调后的数据
    this.result = []
  }
  // 订阅
  on(callback) {
    this.callback.push(callback)
  }
  // 发布
  emit(data) {
    this.result.push(data)
    this.callback.forEach(item => item(this.result))
  }
}
// 开始测试
let eve = new Events()
eve.on(function(arr) {
  if(arr.length === 3) {
    console.log(arr)
  }
})

let p1 = new Promise(resolve => resolve(1))
let p2 = new Promise(resolve => setTimeout(resolve, 1000, 2))
let p3 = new Promise(resolve => setTimeout(resolve, 5000, 3))
p1.then(value => eve.emit(value))
p2.then(value => eve.emit(value))
p3.then(value => eve.emit(value))
