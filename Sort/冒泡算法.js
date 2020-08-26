  /**
   * 冒泡排序：
   * 1、比较相邻的元素，如果第一个比第二个大，则交换他们
   * 2、一轮下来，保证最后一个数是最大的
   * 3、执行 n - 1轮，就可以完成排序
   * 时间复杂度：O(n^2)
   * 稳定
   */

  let arr = [100, 2, 45, 85, 23, 54, 0, 99]

  function bubble(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        arr[j] > arr[j + 1] ? [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] : [arr[j], arr[j + 1]] = [arr[j], arr[j + 1]];
      }
    }
    return arr
  }

  // function bubble(arr) {
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     for (let j = 0; j < arr.length - i - 1; j++) {
  //       arr[j] > arr[j + 1] ? [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] : [arr[j], arr[j + 1]] = [arr[j], arr[j + 1]]
  //     }
  //   }
  //   return arr
  // }

  console.log(bubble(arr))