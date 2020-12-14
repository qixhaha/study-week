class Heap {
  constructor(size, heapType) {
    this.dataArr = []
    this.count = []
    // 堆的大小0表示不限制大小自动扩容
    this.size = size
    // 1表示大顶堆 0 表示小顶堆
    this.heapType = heapType
  }
  // 插入并且堆化
  insert(data) {
    if (this.isFull()) {
      return false
    }
    this.dataArr[this.count + 1] = data
    this.count++
    if (this.heapType) {
      this.bigHeapLast()
    } else {
      this.smallHeapLast()
    }
  }
  // 判断堆是否满了
  isFull() {
    if (this.size === 0) {
      return false
    }
    if (this.count >= this.size) {
      return true
    }
    return false
  }
  //大顶堆
  bigHeapLast() {
    let i = this.count
    let parentIndex = Math.floor(i / 2)
    while (
      Math.floor(i / 2) > 0 &&
      this.dataArr[i] > this.dataArr[parentIndex]
    ) {
      let tmp = this.dataArr[i]
      this.dataArr[i] = this.dataArr[Math.floor(i / 2)]
      this.dataArr[Math.floor(i / 2)] = tmp
      i = i / 2
    }
  }
  // 小顶堆
  /**
   * 小顶堆 堆话
   *  插入时
   * 堆话最后一个元素
   */
  smallHeapLast() {
    let i = this.count
    while (true) {
      // 存放最小值的位置
      let smallPos = i
      // 父节点的位置
      let parentIndex = Math.floor(i / 2)
      if (parentIndex >= 1) {
        if (this.dataArr[smallPos] < this.dataArr[parentIndex]) {
          smallPos = parentIndex
        }
      }
      if (smallPos === i) {
        break
      }
      let tmp = this.dataArr[smallPos]
      this.dataArr[smallPos] = this.dataArr[i]
      this.dataArr[i] = tmp
      i = smallPos
    }
  }
  /**
   * 删除堆顶元素
   * 把最后 一个元素插入到对顶然后从堆顶开始堆话
   * 返回堆话后的堆顶元素
   */
  deleteFirst() {
    // 取出第一个元素
    let first = this.dataArr[1]
    // 删除数组最后一个元素
    let last = this.dataArr.pop()
    if (this.isEmpty()) {
      return null
    }
    this.count--
    let i = 1
    // 将最后一个元素赋值给第一个元素
    this.dataArr[i] = last
    // 大顶堆
    if (this.heapType) {
      this.bigHeapFirst()
    } else {
      this.smallHeapFirst()
    }
    return first
  }
  /**
   * 大根堆
   * 堆化根部元素
   */
  bigHeapFirst() {
    let i = 1
    while (true) {
      let maxPos = i
      let left = 2 * i
      if (left <= this.count) {
        if (this.dataArr[maxPos] < this.dataArr[left]) {
          maxPos = left
        }
      }
      right = left + 1
      if (right <= this.count) {
        if (this.dataArr[maxPos] < this.dataArr[right]) {
          maxPos = right
        }
      }
      if (maxPos == i) {
        break
      }
      let tmp = this.dataArr[maxPos]
      this.dataArr[maxPos] = this.dataArr[i]
      this.dataArr[i] = tmp
      i = maxPos
    }
  }
  smallHeapFirst() {
    let i = 1
    while (true) {
      let smallPos = i
      let left = 2 * i
      if (left <= this.count) {
        if (this.dataArr[smallPos] > this.dataArr[left]) {
          smallPos = left
        }
      }
      right = left + 1
      if (right <= this.count) {
        if (this.dataArr[smallPos] > this.dataArr[right]) {
          smallPos = right
        }
      }
      if (smallPos == i) {
        break
      }
      let tmp = this.dataArr[smallPos]
      this.dataArr[smallPos] = this.dataArr[i]
      this.dataArr[i] = tmp
      i = smallPos
    }
  }
  // 判断堆是否为空
  isEmpty() {
    return !this.count ? true : false
  }
}
