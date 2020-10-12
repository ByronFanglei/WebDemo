function Tentodouble(num) {
  let arr = []
  while(num) {
    arr.push(num % 2)
    num = Math.floor(num / 2)
  }
  while(arr.length) {
    console.log(arr.pop())
  }
}
Tentodouble(35)