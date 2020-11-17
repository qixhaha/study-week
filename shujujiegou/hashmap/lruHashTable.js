/**
 * LRU缓存机制
 */
// 双向链表
class DLinkedNode {
  constructor(key = null, value = null) {
    this.key = key
    this.value = value
    // 前驱节点
    this.prev = null
    // 后继节点
    this.next = null
  }
}
// 默认的链表的容量
const DEFAULT_CAPACITY = 10
// Lru缓存
class LRUCache {
  /**
   * 在头结点插入一个新节点
   * @param {DLinkedNode} node 双向节点
   */
  constructor(capacity) {
    this.cache = new Map()
    // 链表的长度
    this.length = 0
    // 链表的容量
    this.capacity = capacity
    // 初始化双向列表的头结点  尾节点
    this.head = new DLinkedNode()
    this.tail = new DLinkedNode()
    this.head.next = this.tail
    this.tail.prev = this.head
    // 散列表存储key
    this.table = new Map()
  }
  /**
   * 新增节点
   * @param {*} key
   * @param {*} value
   * 先从散列表中查找key对应的链表
   */
  add(key, value) {
    let node = this.table.get(key)
    if (node == null) {
      let newNode = new DLinkedNode(key, value)
      this.table.set(key, newNode)
    }
  }
  /**
   * 在头结点后插入节点(记住方向先搞定新节点的方向在改定旧的节点的方向以防覆盖旧的节点的方向)
   * @param {*} node
   */
  addNode(node) {
    // 确定新节点的前后方向
    node.prev = this.head
    node.next = this.head.next
    // 然后解决新节点后面的节点的前驱节点指向新节点
    this.head.next.prev = node
    // 解决新节点的前面的节点的后面方向指向新节点
    this.head.next = node
  }
  /**
   * 弹出尾部节点
   */
  popTail() {
    let node = this.tail.prev
  }
  // 移出节点
  removeNode() {}
}
