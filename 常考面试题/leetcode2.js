function prints() {
  let result = []
  for (let i = 0; i < 10000; i++) {
    if (findnum(i)) {
      result.push(i)
    }
  }
  return result
}

function findnum(num) {
  if (num < 10) return false
  let snum = num.toString()
  if (snum.length % 2 === 0) {
    let left = snum.slice(0, Math.floor(snum.length / 2))
    let right = snum.slice(Math.floor(snum.length / 2)).split('').reverse().join('')
    return left === right
  } else {
    let left = snum.slice(0, Math.floor(snum.length / 2))
    let right = snum.slice(Math.floor(snum.length / 2) + 1).split('').reverse().join('')
    return left === right
  }
  
}
console.log(prints())
// findnum(1001)
