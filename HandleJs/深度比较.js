let obj1 = {
  a: 100,
  b: {
    c: 200,
    d: 300
  }
}
let obj2 = {
  a: 100,
  b: {
    c: 200,
    d: 3000
  }
}


function isObj(obj) {
  return typeof obj === 'object' && obj !== null;
}

function isEquery(obj, obj1) {
  if (!isObj(obj) && !isObj(obj1)) {
    return obj === obj1
  }
  if (obj === obj1) {
    return true
  }

  let objKeys = Object.keys(obj)
  let obj1Keys = Object.keys(obj1)

  if (objKeys.length !== obj1Keys.length) {
    return false
  }

  for(let key in obj) {
    const res = isEquery(obj[key], obj1[key])
    if (!res) {
      return false
    }
  }
  return true

}

console.log(isEquery(obj1, obj2))
