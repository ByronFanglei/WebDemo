/**
 * 二分搜素:前提是数组是有序的
 * 1、丛数组的中间元素开始，如果中间元素正好是目标值，则搜索结束
 * 2、如果目标值大于或者小于中间元素，则在大于或小于中间元素的那一半数组中搜索
 * 时间复杂度:O(logn)
 */
// let arr = [100, 2, 45, 85, 23, 54, 0, 99, 1]
let arr = [0,  1,  2,  23, 45, 54, 85, 99, 100]

function binarySearch(arr, item) {
  let low = 0
  let high = arr.length - 1
  while(low <= high) {
    const mid = Math.floor((low + high) / 2)
    const element = arr[mid]
    if (element < item) {
      low = mid + 1
    } else if (element > item) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

console.log(binarySearch(arr, 23))
