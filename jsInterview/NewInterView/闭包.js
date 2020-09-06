// 函数作为返回值
// function create() {
//   let a = 100
//   return function() {
//     console.log(a) // 100
//   }
// }
// let fun = create()
// const a = 200
// fun()

// 函数作为参数
function print(fu) {
  const a = 200
  fun()  
}
const a = 100
function fun() {
  console.log(a) // 100
}
print(fun)
// 闭包
