let arr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.mySlice = function(start, end) {
  if (!start) return new TypeError('not is start')
  var start = start >= 0 ? start : this.length + start
  var end
  if (end === 0) {
    end = 0
  }else if (end && end >= 0) {
    end = end
  } else if (end && end < 0) {
    end = this.length + end
  } else {
    end = this.length
  }
  if (start >= end) return []
  let result = []
  for (let i = start; i < end; i++) {
    result.push(this[i])
  }
  return result


}

console.log(arr.mySlice(-2, -7))
console.log(arr.slice(-2, -7))