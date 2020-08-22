// 构建图
const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
}

// 深度遍历
// const visited = new Set()
// const dfs = (n) => {
//   console.log(n)
//   visited.add(n)
//   graph[n].forEach(item => {
//     if (!visited.has(item)) {
//       dfs(item)
//     }
//   })
// }
// dfs(2) // 2 0 1 3


// 广度遍历
// const visited = new Set()
// const bfs = (n) => {
//   visited.add(n)
//   const q = [n]
//   while(q.length) {
//     const s = q.shift()
//     console.log(s)
//     graph[s].forEach(item => {
//       if (!visited.has(item)) {
//         q.push(item)
//         visited.add(item)
//       }
//     })

//   }
// }

// bfs(2) // 2 0 3 1

const set = new Set()
const dfs = (n) => {
  console.log(n)
  set.add(n)
  graph[n].forEach(item => {
    if(!set.has(item)) {
      dfs(item)
    }
  })

}
dfs(2)