const updataView = () => {
  console.log('视图更新')
}
const arrpro = Array.prototype
// vue双向绑定
function defineReactive (target, key, value) {
  observer(target)
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

function observer(target) {
  if (typeof target !== 'Object' || typeof target === null) {
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
  nums: [10, 20, 30]
}
observer(data)

// data.name = 'byron'
data.info.address = '上海'