// 使用object构建二叉树
const bt = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}

// // 先序遍历（递归）
// const preorder = (root) => {
//   if (!root) return
//   console.log(root.val)
//   preorder(root.left)
//   preorder(root.right)
// }
// console.log('先序遍历')
// preorder(bt)

// // 中序遍历（递归）
// const inorder = (root) => {
//   if (!root) return
//   inorder(root.left)
//   console.log(root.val)
//   inorder(root.right)
// }
// console.log('中序遍历')
// inorder(bt)

// // 后序遍历（递归）
// const postorder = (root) => {
//   if (!root) return
//   postorder(root.left)
//   postorder(root.right)
//   console.log(root.val)
// }
// console.log('后序遍历')
// postorder(bt)


// 先序遍历（非递归）
const preorder = (root) => {
  if (!root) return
  // 获取当前的树
  const stack = [root]
  // 当树中还有值时进入循环
  while(stack.length) {
    // 抛出最后一个值
    let p = stack.pop()
    // console.log(p)
    // 抛出改对象的val
    console.log(p.val)
    // 若该对象右子树有值，添加值
    if (p.right) stack.push(p.right)
    // 若该对象左子树有值，添加值
    if (p.left) stack.push(p.left)
  }
}
console.log('先序遍历')
preorder(bt)

// 中序遍历（非递归）
const inorder = (root) => {
  if(!root) return
  // 创建一个空数组，用来存储当前数据
  const stack = []
  let p = root
  // 当stack或p有值则进入循环
  while(stack.length || p) {
    // 当p有值进入循环
    while(p) {
      // stack存储p值，整个循环先存储整个对象的根节点与left节点的值
      stack.push(p)
      // p等于p.left
      p = p.left
    }
    // 抛出数组最后一个
    const n = stack.pop()
    // 获取数组最后一个的val值
    console.log(n.val)
    // 获取抛出数组的right的值
    p = n.right
  }
}
console.log('中序遍历')
inorder(bt)


// 后序遍历（非递归）
const postorder = (root) => {
  if (!root) return
  // 获取当前的树
  const stack = [root]
  // 设置空数组 存储遍历数据
  const outPostorder = []
  // 当stack有值 进入循环
  while(stack.length) {
    // 抛出数组最后一个元素
    let p = stack.pop()
    // 将数组最后一个元素的val进行存储
    outPostorder.push(p.val)
    // 当抛出数组有left存储left
    if (p.left) stack.push(p.left)
    // 当抛出数组有right存储right
    if (p.right) stack.push(p.right)
  }
  //倒叙输出outPostorder的值
  while(outPostorder.length) {
    const n = outPostorder.pop()
    console.log(n)
  }
}
console.log('后序遍历')
postorder(bt)
