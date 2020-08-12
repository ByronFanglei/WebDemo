// // 去重
// const arr = [1,2,1,3]
// const arr2 = [...new Set(arr)]

// // 判断元素是否在集合中
// const set = new Set(arr)
// const has = set.has(2)

// // 求交集
// const set2 = new Set([2,3,4])
// const set3 = new Set([...set].filter(item => set2.has(item)))

let myset = new Set()
myset.add(1)
myset.add(5)
let o = {
  a: 1,
  b: 2
}
myset.add(o)
for (const iterator of myset) {
  console.log(iterator)
}
console.log(myset.size)

for(const [key, value] of myset.entries()) {
  console.log(key, value)
}

// const myArr = [...myset]
const myArr = Array.from(myset)

const myset2 = new Set(myArr)
