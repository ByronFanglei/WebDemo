// function fun1(a, b, c) {
//   console.log(this)
//   console.log(a, b, c)
//   return 'this fun1'
// }
// const fn2 = fun1.bind({x:1}, 10, 20, 30)
// const res = fn2()
// console.log(res)

Function.prototype.mybind = function() {
  // 将参数解析伪数组
  let arg = Array.from(arguments)
  // let arg = Array.prototype.slice.call(arguments)
  // 获取this指向
  const t = arg.shift()
  // 获取当前函数
  const self = this
  // 返回一个函数
  return function() {
    return self.apply(t, arg)
  }

}
function fun1(a, b, c) {
  console.log(this)
  console.log(a, b, c)
  return 'this fun1'
}
const fn2 = fun1.mybind({x:1}, 10, 20, 30)
const res = fn2()
console.log(res) // { x: 1} 10 20 30 this fun1