let arr = [1, 2, 3]

function instanceof_b(l, type) {
  const no_object = ['number', 'string', 'boolean', 'symbol', 'bigint', 'undefined']
  const res = typeof l
  if(no_object.includes(res)) {
    return false
  }
  let ll = l !== null ? l.__proto__ : null
  let tt = type.prototype

  while(true) {
    if (ll === null) {
      return false
    }
    if (ll === tt) {
      return true
    }
    ll = ll.__proto__
  }
}



console.log(instanceof_b(null, Array))
