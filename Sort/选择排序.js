/**
 * 选择排序：
 * 1、找到数组中的最小值，选中它并将其放置在第一位
 * 2、接着找到第二小值，选中它并将其放置在第二位
 * 3、以此类推，执行n - 1轮
 * 时间复杂度：O(n^2)
 * 不稳定
 */

let arr = [100, 2, 45, 85, 23, 54, 0, 99]

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i
    for (let j = i; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]]
    }
  }
  return arr
}
console.log(selectionSort(arr))