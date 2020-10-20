class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

/**
 * 单链表反转
 * 链表中环得检测
 * 两个有序链表合并
 * 删除链表倒数第n个节点
 * 求链表的中间节点
 */
class LinkedList {
  constructor() {
    // 头结点
    this.head = new Node('head')
  }

  // 根据value查找节点
  findByValue(item) {
    let currentNode = this.head
    while (currentNode != null && currentNode.element != item) {
      currentNode = currentNode.next
    }
    return currentNode === null ? -1 : currentNode
  }

  // 根据index查找节点
  findByIndex(index) {
    let currentNode = this.head
    let pos = 0
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next
      pos++
    }
    return currentNode === null ? -1 : currentNode
  }
  // 在指定元素向后插入
  insert(newElement, element) {
    // 查找要插入的元素
    const currentNode = this.findByValue(element)
    if (currentNode === -1) {
      console.log('未找到插入的位置')
      return
    }
    const newNode = new Node(newElement)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }
  // 查找前一个
  findPrev(item) {
    let currentNode = this.head
    if (currentNode.next != null && currentNode.next.element !== item) {
      currentNode = currentNode.next
    }

    if (currentNode.next === null) {
      return -1
    }
    return currentNode
  }

  // 根据值删除
  remove(item) {
    // 找到当前的节点
    const descNode = this.findByValue(item)
    if (descNode === -1) {
      console.log('未找到元素')
      return
    }
    // 查找之前的节点
    const prevNode = this.findPrev(item)
    prevNode.next = descNode.next
  }
  // 遍历显示所有的节点
  display() {}

  // 环检测
  checkCircle() {
    let fast = this.head.next
    let slow = this.head
    while (fast != null && fast.next !== null) {
      // 总有一个点两个指针相遇 快的走两步  慢的走一步
      fast = fast.next.next
    }
  }
}
