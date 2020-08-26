// 最小堆
class MinHeap {
  constructor () {
    this.heap = []
  }
  
  // 子节点与父节点交换位置
  shiftUp(index) {
    // 如果到达顶部，不进行操作
    if (index == 0) {return;}
    // 获取父节点的下标
    const ParentIndex = this.getParentIndex(index)
    if (this.heap[ParentIndex] > this.heap[index]) {
      // 父子结点交换
      this.swap(ParentIndex, index)
      // 子节点可能会继续网上移动
      this.shiftUp(ParentIndex)
    }
  }
  // 获取父节点的下标
  getParentIndex(index) {
    // return Math.floor((index - 1) / 2)
    return (index - 1) >> 1;
  }
  // 交换操作
  swap(i1, i2) {
    const temp = this.heap[i1]
    this.heap[i1] = this.heap[i2]
    this.heap[i2] = temp
  }

  // 进行下移操作
  shiftDown(index) {
    const LeftIndex = this.getLeftIndex(index)
    const RightIndex = this.getRightIndex(index)
    console.log(index, LeftIndex, RightIndex)
    if (this.heap[LeftIndex] < this.heap[index]) {
      this.swap(LeftIndex, index)
      this.shiftDown(LeftIndex)
    }
    if (this.heap[RightIndex] < this.heap[index]) {
      this.swap(RightIndex, index)
      this.shiftDown(RightIndex)
    }
  }
  // 获取左子结点下标
  getLeftIndex(index) {
    return 2 * index + 1
  }
  // 获取右子结点下标
  getRightIndex(index) {
    return 2 * index + 2
  }
  // 插入操作
  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
    // console.log(this.heap)
  }
  // 删除头顶结点操作
  pop() {
    // 移除数组最后一个值并赋值给第一个
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
    console.log(this.heap)
  }
  // 获取堆顶
  peek() {
    return this.heap[0]
  }
  // 获取堆的大小
  size() {
    return this.heap.length
  }
}

const h = new MinHeap()
h.insert(3)
h.insert(2)
h.insert(1)
h.insert(4)
h.pop()
// console.log(h.peek());
// console.log(h.size());

/**
 * 堆的插入操作：
 * 1、将输出值插入数组最后(push)
 * 2、将插入值进行向上转换，通过插入值的下标也就是当前数组的长度-1获取到父结点的下标值（（index - 1）/ 2），判断子节点月父节点大小，当父节点大于子节点时，进行交换操作.
 * 3、交换完成后，当前子节点就是之前父节点，有可能比现在的父节点还小，那么继续第二步操作，知到当前结点小标为0时，不进行操作
 */

 /**
  * 堆的删除操作:
  * 1、移除数组的最后以为并将最后一位赋值给首位(pop)
  * 2、进行下移操作，如果大于左子结点(2 * index + 1)或右边子结点(2 * index + 2)则进行交换操作，交换完后可能还大与左/右子结点，则继续进行交换。
  */