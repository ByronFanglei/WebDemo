let arr = [1, 2, 3, 1, 2, 3, 5]

function find(nums) {
  let len = nums.length
  let l = []
  for (let i = 0; i < len; i++) {
    if (nums.indexOf(nums[i]) !== i) {
      l.push(nums[i])
      continue
    }
  }
  return l
}
console.log(find(arr))