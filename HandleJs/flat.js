let arr = [1, [2, [3, [4, [5]]]]]

function myFlat(arr) {
  const res = arr.some(item => item instanceof Array)
  if (!res) {
    return arr
  }
  const result = Array.prototype.concat.apply([], arr)
  return myFlat(result)
}

console.log(myFlat(arr))