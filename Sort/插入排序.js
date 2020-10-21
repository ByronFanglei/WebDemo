  /**
   * 插入排序：
   * 1、从第二个数开始往前比
   * 2、比它大就往后排
   * 3、以此类推进行到最后一个数
   * 时间复杂度：O(n^2)
   * 稳定
   */


  let arr = [100, 2, 45, 85, 23, 54, 0, 99]

  function insert(arr){
    let hand = []
    hand.push(arr[0])
    for(let i = 1; i < arr.length; i++) {
      let A = arr[i]
      for (let j = hand.length-1; j >= 0; j--) {
        let B = hand[j]
        if (A > B) {
          hand.splice(j+1, 0, A)
          break
        }
        if (j === 0) {
          hand.unshift(A)
        }
      }
    }
    return hand
  }


  function insert(arr) {
    for (let i = 1; i < arr.length; i++) {
      let A = arr[i]
      let j = i
      while (j > 0) {
        if (arr[j - 1] > A) {
          arr[j] = arr[j - 1]
        } else {
          break;
        }
        j -= 1
      }
      arr[j] = A
    }
    return arr
  }


  console.log(insert(arr))
