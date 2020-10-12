let arr = [3, 5, 7, 15]
let target = 10

function find(arr, target) {
  let result = []
  for(let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push(i, j)
        return result
      }
    }
  }
}

function twoSum(arr, target) {
  const map = new Map()
  for(let i = 0; i < arr.length; i++){
    let item = arr[i]
    let res = target - item
    if (map.has(res)) {
      return [map.get(res), i]
    } else {
      map.set(item, i)
    }
  }
}
console.log(twoSum(arr, target))