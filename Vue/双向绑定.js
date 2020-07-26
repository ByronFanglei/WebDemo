// 触发更新视图
const updataView = () => {
  console.log('视图更新')
}
// const arrpro = Array.prototype
// 重新定义属性,监听起来
function defineReactive (target, key, value) {
  observer(value)
  // 核心api
  Object.defineProperty(target, key, {
    set (newValue) {
      if (newValue !== value) {
        observer(newValue)
        value = newValue
        updataView()
      }
    },
    get () {
      return value
    }
  })
}
// 监听对象属性
function observer(target) {
  if (typeof target !== 'object' || typeof target === null) {
    return target
  }
  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}

const data = {
  name: 'zhangsan',
  age: 20,
  info: {
      address: '北京' // 需要深度监听
  },
  // nums: [10, 20, 30]
}
observer(data)

// data.name = 'byron'
// data.info.address = '上海'
data.age = { num: 21 }
