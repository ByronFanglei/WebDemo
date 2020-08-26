/**
 * 归并排序:
 * 1、分：把数组劈成两半，再递归地对子数组进行 分 操作，直到分成一个个单独的数
 * 2、合：把两个数合并为有序数组，再对有序数组进行合并，直到全部子数组合并为一个完整数组
 *  3、合并：新建一个空数组，用于存放最终排序后的数组。比较两个有序的数组的头部，较小者出队推入空数组中。如果两个数组还有值，重复第二步
 * 时间复杂度：O(nlog2n)
 * 稳定
 */

let arr = [100, 2, 45, 85, 23, 54, 0, 99]

function mergeSort(arr) {
    if (arr.length === 1) {return arr;}
    const mid = Math.floor(arr.length / 2)
    const arrLeft = arr.slice(0, mid)
    const arrRight = arr.slice(mid, arr.length)
    const orderLeft =  mergeSort(arrLeft)
    const orderRight =  mergeSort(arrRight)
    let res = []
    while(orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
      } else if (orderLeft.length) {
        res.push(orderLeft.shift())
      } else if (orderRight.length) {
        res.push(orderRight.shift())
      }
    }
    return res
}

console.log(mergeSort(arr))