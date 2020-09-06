var obj = {
  id: 1,
  name: 'obay',
  msg: {
    age: 24
  },
  color: ['red','pink','skyblue']
}
// let newObj = {}
// 方法一
// function deepClone(oldData, newObj) {
//   for (let i in oldData) {
//     if (oldData.hasOwnProperty(i)) {
//       if(oldData[i] instanceof Array){
//         newObj[i] = []
//         deepClone(oldData[i], newObj[i])
//       } else if (oldData[i] instanceof Object) {
//         newObj[i] = {}
//         deepClone(oldData[i], newObj[i])
//       } else {
//         newObj[i] = oldData[i]
//       }
//     }
//   }
//   return newObj
// }
// deepClone(obj, newObj)

// 方法二
// function deepClone(oldData) {
//   // 克隆实例
//   let newObj = new oldData.constructor;
//   // 判断特殊情况
//   if (oldData === null) return null
//   if (typeof oldData !== 'object') return oldData
//   if (oldData instanceof RegExp) {
//     return new RegExp(oldData)
//   }
//   if (oldData instanceof Date) {
//     return new Date(oldData)
//   }
//   if (oldData instanceof Function) {
//     return new Function(oldData)
//   }
//   for (let i in oldData) {
//     if (oldData.hasOwnProperty(i)) {
//       newObj[i] = deepClone(oldData[i])
//     }
//   }
//   return newObj
// }
// let d1 = deepClone(obj)
// obj.msg.age = 21
// console.log(d1)
// console.log(obj)

// 方法三
// let obj2 = JSON.parse(JSON.stringify(obj))
// obj.msg.age = 21
// console.log(obj2)
// console.log(obj)


function deep(obj) {
  let newobj = new obj.constructor
  // 特殊情况
  if(typeof obj !== 'object') return obj
  if (obj == null) return obj
  // 判断函数
  if (obj instanceof Function) {
    return new Function(obj)
  }
  if (obj instanceof Date) {
    return new Date(obj)
  }
  // 判断正则
  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }

  for(let i in obj) {
    if (obj.hasOwnProperty(i)) {
      newobj[i] = deep(obj[i])
    }
  }
  return newobj
}

console.log(obj)
let obj2 = deep(obj)
obj2.id = 12
console.log(obj2)