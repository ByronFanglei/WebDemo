const json = {
  a: { b: { c: 1 } },
  d: [1, 2]
}

const dfs = (root, path) => {
  console.log(root, path)
  Object.keys(root).forEach(item => {
    dfs(root[item], path.concat(item))
  })
}

dfs(json, [])
