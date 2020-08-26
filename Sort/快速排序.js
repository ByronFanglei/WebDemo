  /**
   * 快速排序：
   * 1、分区：从数组中任意选择一个‘基准’所有比基准小的元素放在基准前面，比基准大的元素放在基准的后面
   * 2、递归：递归地对基准前后的子数组进行分区
   * 事件复杂度：O(nlog2n)
   * 不稳定
   */

  let arr = [100, 2, 45, 85, 23, 54, 0, 99, 1]

  function quick(arr){
    if (arr.length <= 1) return arr
    // 获取中间值下标
    let middleIndex = Math.floor(arr.length / 2)
    // 获取中间值
    let middleValue = arr.splice(middleIndex, 1)[0]

    let arrLeft = []
    let arrRight = []
    for(let i = 0; i < arr.length; i++) {
      let item = arr[i]
      item > middleValue ? arrRight.push(item) : arrLeft.push(item)
    }
    // 递归,让左右两边都重复进行，最后左边+中间+右边
    // return quick(arrLeft).concat(middleValue, quick(arrRight))
    return [...quick(arrLeft),middleValue,...quick(arrRight)]
  }


  // function quick(arr){
  //   if (arr.length <= 1) return arr
  //   let mid = Math.floor(arr.length / 2)
  //   let midValue = arr.splice(mid, 1)[0]

  //   let left = []
  //   let right = []

  //   for (let i = 0; i < arr.length; i++) {
  //     let item = arr[i]
  //     if (item < midValue) {
  //       left.push(item)
  //     }else {
  //       right.push(item)
  //     }
  //   }
  //   return [...quick(left), midValue, ...quick(right)]
  // }

  console.log(quick(arr))
