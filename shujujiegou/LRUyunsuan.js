/**
 * 1) 单链表反转
 * 2) 链表中环的检测
 * 3) 两个有序的链表合并
 * 4) 删除链表倒数第n个结点
 * 5) 求链表的中间结点
 *
 */
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node("head");
  }
  // 根据value查找节点
  findByValue(item) {
    let currentNode = this.head;
    while (currentNode !== null && currentNode.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode === null ? -1 : currentNode;
  }
  // 根据index查找节点
  findByIndex(index) {
    let currentNode = this.head;
    let pos = 0;
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next;
      pos++;
    }
    return currentNode === null ? -1 : currentNode;
  }
  // 指定元素向后插入 // 如果传入head就是头插法
  insert(newElement, element) {
    const currentNode = this.findByValue(element);
    if (currentNode === -1) {
      console.log("未找到插入位置");
      return;
    }
    const newNode = new Node(newElement);
    console.log("current", currentNode);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }
  // 查找前一个
  findPrev(item) {
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next;
    }
    if (currentNode.next === null) {
      return -1;
    }
    return currentNode;
  }
  // 根据值删除
  remove(item) {
    const desNode = this.findByValue(item);
    if (desNode === -1) {
      console.log("未找到元素");
      return;
    }
    const prevNode = this.findPrev(item);
    prevNode.next = desNode.next;
  }
  // 遍历显示所有节点
  display() {
    //先检查是否为环
    if (this.checkCircle()) return false;

    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  }
  // 环验证
  checkCircle() {
    let fast = this.head.next;
    let slow = this.head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if (slow === fast) return true;
    }
    return false;
  }
  // 增强法尾插法可读性，便于初学者理解
  reverseList() {
    let currentNode = this.head.next;
    // 个人理解这是新链表的尾结点  遍历整个链表  然后使用逆向头插法
    // 追加到previosNode前面
    let previousNode = null;
    while (currentNode != null) {
      // 现将下一个节点保存上
      let nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }

    // 最后将反转好的链表  加上头结点
    this.head.next = previousNode;
  }
  // 删除倒数第k个节点
  removeByIndexFromEnd(index) {
    // 检测是否是环链表
    if (this.checkCircle()) return false;
    let pos = 1;
    this.reverseList();

    let currentNode = this.head.next;
    if (currentNode != null && pos < index) {
      currentNode = currentNode.next;
      pos++;
    }

    if (currentNode === null) {
      console.log("无法删除最后一个节点或者该节点不存在");
      return;
    }
    this.remove(currentNode.element);
    this.reverseList();
  }
  // 求中间的节点
  findMiddleNode() {
    let fast = this.head;
    let slow = this.head;
    while (fast.next !== null && fast.next.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    console.log(slow);
    return slow;
  }
}

const mergeSortedLists = (listA, listB) => {
  if (!listA) {
    return listB;
  }
  if (!listB) {
    return listA;
  }

  let a = listA;
  let b = listB;
  let resultList = undefined;
  if (a.element < b.element) {
    resultList = a;
    a = a.next;
  } else {
    resultList = b;
    b = b.next;
  }
  let currentNode = resultList;
  while (a !== null && b !== null) {
    if (a.element < b.element) {
      currentNode.next = a;
      a = a.next;
    } else {
      currentNode.next = b;
      b = b.next;
    }
    currentNode = currentNode.next;
  }

  if (a != null) {
    currentNode.next = a;
  } else {
    currentNode.next = b;
  }
  return resultList;
};

// Test
// const LList = new LinkedList();
// LList.insert("chen", "head");
// LList.insert("curry", "chen");
// LList.insert("sang", "head");
// LList.insert("zhao", "head");
// console.log("-------------start reverse------------");
// LList.reverseList();
// LList.display();
// console.log("-------------check circle------------");
// console.log(LList.checkCircle());
// console.log("-------------remove the one before last ------------");
// LList.removeByIndexFromEnd(2);
// LList.display();

const sortedList1 = new LinkedList();
sortedList1.insert(9, "head");
sortedList1.insert(8, "head");
sortedList1.insert(7, "head");
sortedList1.insert(6, "head");
// sortedList1.display();
// const sortedList2 = new LinkedList();
// sortedList2.insert(21, "head");
// sortedList2.insert(20, "head");
// sortedList2.insert(19, "head");
// sortedList2.insert(18, "head");
// sortedList2.display();
// console.log("-------------sort two list ------------");
// let sortedList = mergeSortedLists(sortedList1.head.next, sortedList2.head.next);
// while (sortedList !== null) {
//   console.log(sortedList.element);
//   sortedList = sortedList.next;
// }
