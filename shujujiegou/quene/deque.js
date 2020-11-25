/**
 * 实现双端队列
 */
class Deque {
  constructor() {
    // 队列默认索引+1
    this.count = 0
    // 对头索引
    this.lowestIndex = 0
    // 存储队列的对象
    this.items = {}
  }
  // 像队列添加元素
  addBack(element) {
    this.items[this.count] = element
    this.count++
  }
  // 向双端队列头部添加元素
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowestIndex > 0) {
      // 如果对头索引不为0
      this.lowestIndex--
      this.items[this.lowestIndex] = element
    } else {
      // 如果对头元素是空的 将队列中的多有元素向后一定一个位置 倒着放
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.lowestIndex = 0
      this.items[0] = element
    }
  }
  // 出队
  removeFront() {
    if (this.isEmpty()) {
      return undefined
    }
    // 对头的元素
    const result = this.items[this.lowestIndex]
    delete this.items[this.lowestIndex]
    // this.count--
    this.lowestIndex++
    return result
  }
  // 删除队尾元素
  removeBack() {
    if (this.isEmpty()) {
      return undefined
    }
    // 队尾的元素
    const result = this.items[this.count - 1]
    delete this.items[this.count - 1]
    this.count--
    return result
  }
  // 判断队列是否为空
  isEmpty() {
    return this.size() === 0
  }
  // 队列的大小
  size() {
    return this.count - this.lowestIndex
  }
  // 获取队列头元素
  peek() {
    // 空队列
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestIndex]
  }
  // 清空队列
  clear() {
    this.items = {}
    this.count = 0
    this.lowestIndex = 0
  }
  // 创建toString方法
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestIndex]}`
    for (let i = this.lowestIndex + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}

const deque = new Deque()
console.log(deque.isEmpty())
deque.addBack('John')
deque.addBack('Jack')
console.log(deque.toString())
