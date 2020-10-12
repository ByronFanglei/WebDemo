function niuniu() {
  let nums = arguments[0]
  let p = arguments[1]
  let arr = []
  for (let i = 2; i < arguments.length; i++) {
    arr.push(arguments[i])
  }
  let max = 0
  let qw = 0
  let result = 0

  function deep(arr) {
    // result = 0
    max = 0
    let x = 0
    let y = 0
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        qw = (p * Math.max(arr[i], arr[j])) + ((100 - p) * Math.min(arr[i], arr[j]))
        // qw > max ? max = qw : max = max
        if (qw > max) {
          max = qw
          x = i
          y = arr[j]
        } else {
        }
      }
    }
    result += max

    arr.splice(x, 1)
    let iy = arr.findIndex(key => key === y)
    arr.splice(iy, 1)
    console.log(arr)
    if (arr.length) {
      deep(arr)
    }
  }
  deep(arr)

  console.log(result)
}
niuniu(1, 20, 1, 2) // 120 求期望
niuniu(3,0,1,3,3,2,2,3) // 600


// var line = readline();
// print();
