/**
 * 基于链表实现的栈
 */
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}
// 基于链表实现的栈
class StackBasedLinkedList {
  constructor() {
    this.top = null
  }
  // 添加节点
  push(value) {
    const node = new Node(value)
    if (this.top === null) {
      this.top = node
    } else {
      node.next = this.top
      this.top = node
    }
  }
  // 删除栈顶节点
  pop() {
    if (this.top === null) {
      return -1
    }
    const value = this.top.element
    this.top = this.top.next
    return value
  }

  // 清空栈
  clear() {
    this.top = null
  }
  // 打印栈
  display() {
    if (this.top !== null) {
      let temp = this.top
      while (temp !== null) {
        console.log(temp.element)
        temp = temp.next
      }
    }
  }
}

// const newStack = new StackBasedLinkedList()
// newStack.push(1)
// newStack.push(2)
// newStack.push(3)

// newStack.display()

exports.CreatedStack = StackBasedLinkedList
