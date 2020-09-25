function instance_of(L, R) {
  // 如果为基本数据类型直接返回false
  const arr = ['string', 'number', 'boolean', 'symbol', 'bigint', 'undefined']
  if (arr.includes(typeof L)) {
    return false
  }
  // 获取隐式原型
  L = L.__proto__
  // 获取显示原型
  const RR = R.prototype

  while(true) {
    // 当隐式原型为null 查找结束且没有找到
    if (L === null) {
      return false
    }
    // 当显示原型全等于隐式原型则返回true
    if (L === RR) {
      return true
    }
    // 没有找到继续向上一层原型查找
    L = L.__proto__
  }

}

console.log(instance_of([], Object))