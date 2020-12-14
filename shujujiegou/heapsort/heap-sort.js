/**
 * 堆排序
 */
class HeapSort {
  constructor(originArray) {
    // 原数组
    this.originArray = originArray
    console.log(this.originArray)
  }
  // 构建堆
  buildHeap() {
    const arr = this.originArray
    // 最后的非叶子节点的位置 从最后一个非叶子节点开始将所有的二叉树最大值放在父节点上面
    const startIndex = Math.floor((arr.length - 1) / 2) //
    for (let i = startIndex; i >= 0; i--) {
      this.heapify(arr, arr.length, i)
    }
    return arr
  }
  // 堆化
  heapify(arr, len, i) {
    while (true) {
      // 最大值的位置
      let maxPos = i
      // 如果存在左节点并且左节点的值大于当前的值 那么最大值的位置等于 左节点
      if (i * 2 + 1 <= len && arr[i] < arr[2 * i] + 1) {
        maxPos = 2 * i
      } else if (i * 2 + 2 <= len && arr[maxPos] < arr[2 * i + 2]) {
        maxPos = i * 2 + 2
      }
      if (maxPos === i) {
        break
      }
      this.swap(arr, i, maxPos)
      i = maxPos
    }
  }
  //第二部排序
  sort() {
    // 先建堆
    const arr = this.buildHeap()
    console.log('arr', arr)
    let len = arr.length - 1
    while (len > 1) {
      // 交换顶元素和最后一位 顶元素永远最大
      this.swap(arr, 0, len)
      len--
      // 堆话剩下的元素
      this.heapify(arr, len, 0)
      console.log('arr', arr)
    }
  }
  // 交换数组中的两个值
  swap(arr, i, max) {
    let temp = arr[i]
    arr[i] = arr[max]
    arr[max] = temp
  }
}

const arr = []
let i = 0
while (i <= 9) {
  const num = Math.floor(Math.random() * 100)
  arr.push(num)
  i++
}
const testHeap = new HeapSort(arr)
testHeap.sort()
console.log(testHeap.originArray)
