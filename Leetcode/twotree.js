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
  const stack = [root]
  while(stack.length) {
    const p = stack.pop()
    console.log(p.val)
    if(p.right) stack.push(p.right)
    if(p.left) stack.push(p.left)
  }
}
console.log('先序遍历')
preorder(bt)

// 中序遍历（非递归）
const inorder = (root) => {
  if(!root) return
  const stack = [root]
  while(stack.length) {
    const p = stack.pop()
    if(p.right) stack.push(p.right)
    console.log(p.val)
    if(p.left) stack.push(p.left)
  }
}
console.log('中序遍历')
inorder(bt)
