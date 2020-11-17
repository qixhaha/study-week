/**
 * 跳表 使用链表实现logn的时间复杂度的增删改查
 */
// 最大层级数
const MAX_LEVEL = 16

/**
 * data当前节点的值
 * maxLevel当前节点的层级
 * refer为一个长度为最大层级的一个数组 存储的是 每一层级同样位置的后一个节点的索引
 */
class Node {
  constructor({ data = -1, maxLevel = 0, refer = new Array(MAX_LEVEL) } = {}) {
    this.data = data
    this.maxLevel = maxLevel
    this.refer = refer
  }
}

class SkipList {
  constructor() {
    // 头结点
    this.head = new Node()
    // 链表的层级
    this.levelCount = 1
  }
  // 查找方法
  find(value) {
    if (!value) return null
    // 头结点
    let p = this.head
    //从最上面的层级开始
    for (let i = this.levelCount - 1; i >= 0; i--) {
      //当前节点的第i层的后一个节点不为空并且后一个节点比要查找的节点值小那么当前节点就为当前节点的第i层的后一个节点
      // 如果不满足这个条件的话 i 变为当前节点的下一个层级
      while (p.refer[i] !== undefined && p.refer[i].data < value) {
        p = p.refer[i]
      }
    }
    // 遍历到最后就是最后一个小于当前比较值的节点 如果后面节点是空的或者是后面的节点不等于当前的比较的值那么没有找到
    if (p.refer[0] !== undefined && p.refer[0] === value) {
      return p.refer[0]
    }
    return null
  }
  randomLevel() {
    let level = 1
    for (let i = 0; i < MAX_LEVEL; i++) {
      if (Math.random() < 0.5) {
        level++
      }
    }
    return level
  }
  // 插入方法
  insert(value) {
    // 随机层级
    const level = this.randomLevel()
    // 插入的新节点
    const newNode = new Node()
    newNode.data = value
    newNode.maxLevel = level
    // update存放当前节点包括level层级以及一下的所有层级的最后一个小于插入值的节点
    const update = new Array(level).fill(new Node())
    // 从头结点开始查找每一个层级最后一位小于当前值的节点
    let p = this.head
    for (let i = this.levelCount - 1; i >= 0; i--) {
      //当前节点的第i层的后一个节点不为空并且后一个节点比要查找的节点值小那么当前节点就为当前节点的第i层的后一个节点
      // 如果不满足这个条件的话 i 变为当前节点的下一个层级
      while (p.refer[i] !== undefined && p.refer[i].data < value) {
        p = p.refer[i]
        update[i] = p
      }
    }
    // 开始插入操作  将新插入的节点的索引指向最后一个小于插入节点的后一个节点 然后将最后一个小于插入值的节点指向当前新的节点
    for (let i = 0; i < level; i++) {
      // 新插入的节点的索引指向最后一个小于插入节点的后一个节点
      newNode.refer[i] = update[i].refer[i]
      update[i].refer = newNode
    }

    console.log('level', level)
    if (this.levelCount < level) {
      this.levelCount = level
    }
  }
  // 删除方法
  remove(value) {
    let _node
    let p = this.head
    // update存放当前节点包括level层级以及一下的所有层级的最后一个小于插入值的节点
    const update = new Array(new Node())
    for (let i = this.levelCount - 1; i >= 0; i--) {
      while (p.refer[i] !== undefined && p.refer[i].data < value) {
        p = p.refer[i]
      }
      update[i] = p
    }
    if (p.refer[0] !== undefined && p.refer[0].data === value) {
      _node = p.refer[0]
      for (let i = 0; i <= this.levelCount - 1; i++) {
        if (
          update[i].refer[i] !== undefined &&
          update[i].refer[i].data === value
        ) {
          update[i].refer[i] = update[i].refer[i].refer[i]
        }
      }
      return _node
    }
    return null
  }
  // 打印所有
  printAll() {
    let p = this.head
    while (p.refer[0] !== undefined) {
      console.log(p.refer[0].data)
      p = p.refer[0]
    }
  }
}
// 随机层级 一半大于8 一半小于8
// function randomLevel() {
//   let level = 1
//   for (let i = 0; i < MAX_LEVEL; i++) {
//     if (Math.random() < 0.5) {
//       level++
//     }
//   }
//   return level
// }
// console.log(randomLevel())
test()
function test() {
  let list = new SkipList()
  let length = 20000
  // 顺序插入
  for (let i = 0; i <= 10; i++) {
    list.insert(i)
  }
  // 输出一次
  list.printAll()
  console.time('create length-10')
  //插入剩下的
  for (let i = 11; i <= length - 10; i++) {
    list.insert(i)
  }
  console.timeEnd('create length-10')
  //搜索 10次
  for (let j = 0; j < 10; j++) {
    let key = Math.floor(Math.random() * length + 1)
    console.log(key, list.find(key))
  }
  //搜索不存在的值
  console.log('null:', list.find(length + 1))
  //搜索5000次统计时间
  console.time('search 5000')
  for (let j = 0; j < 5000; j++) {
    let key = Math.floor(Math.random() * length + 1)
  }
  console.timeEnd('search 5000')
}
