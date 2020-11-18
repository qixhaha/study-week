class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
/**
 * 搜索二叉树
 * 允许重复值的添加
 * 对于重复数据的二叉查找树  插入之前的查找如果遇到了某个节点值相同的话，将这个值作为比当前值大于的值，结果就是放在右边的子树最小叶子的左侧
 */
class SearchTree {
  constructor() {
    // 根节点
    this.root = null
  }
  // 插入操作
  insert(num) {
    let node = new Node(num)
    if (this.root === null) {
      this.root = node
      return
    }
    // 获取要插入节点的父节点
    let parent = this.getPrev(num)
    if (num < parent.value) {
      parent.left = node
    } else {
      parent.right = node
    }
  }
  // 查找操作
  find(num) {
    let node = new Node(num)
    if (this.root === null) {
      this.root = node
      return
    }
    // 查找所有等于该值得节点
    return this.getPrev(num, true)
  }
  // 删除节点
  /**
   * 删除节点
   * 分为三种情况：
   * ①第一种：当前节点没有直接点，直接将根节点指向的节点指向其父节点
   * ②第二种：当前节点只有一个节点，将根节点指向的节点指向其叶子节点
   * ③第三种:当前节点有左右叶子节点，将该节点的右节点遍历其中最小的节点（最小的叶子点），替换到改节点上面
   * @param {Number}} num
   */
  remove(data) {
    let p = this.root // p指向要删除的节点 初始化指向根节点
    let pp = null // pp 指向的是p的父节点
    while (p != null && p.value != data) {
      pp = p
      if (data > p.data) {
        p = p.right
      } else {
        p = p.left
      }
    }
    if (p == null) {
      // 没有找到
      return
    }
    this.delMethod(p, pp)
  }
  // 删除节点的方法
  /**
   * 删除节点的方法
   * @param {Node} delNode 被删除的节点
   * @param {Node} parent 被删除的父亲节点
   */
  delMethod(delNode, parent) {
    let p = delNode // p指向要删除的节点
    let pp = parent // pp指向的p的父节点

    // 要删除的节点有两个子节点
    if (p.left != null && p.right != null) {
      // 获取当前节点右子树中最小的节点
      let minP = p.right
      let minPP = p // minPP 表示右子树最小的节点的父节点
      while (minP.left != null) {
        minP = minP.left
        minPP = minp
      }
      p.value = minP.value
      p = minP
      // 这块的作用 保存pp就是做到了最左子节点  如果存在右子树的话 那么执行
      // else if (pp.left == p) {
      //   //  删除是左侧子节点
      //   pp.left = child
      // }
      // 这块代码  存放改替换节点的右子树放在 替换节点的父节点的左侧节点
      pp = minPP
    }
    let child
    // 如果有左孩子
    if (p.left != null) {
      child = p.left
    } else if (p.right != null) {
      child = p.right
    } else {
      // 这块也要考虑到如果替换的节点没有孩子了
      // else if (pp.left == p) {
      //   //  删除是左侧子节点
      //   pp.left = child
      // }
      // pp的左侧就为空了
      child = null
    }
    // 删除的父节点是空的 (说明删除的是根节点Σ(⊙▽⊙"a)
    if (pp == null) {
      // 将孩子节点放在根节点上面
      this.root = child
    } else if (pp.left == p) {
      //  删除是左侧子节点
      pp.left = child
    } else {
      // 删除的是右侧子节点
      pp.right = child
    }
  }
  // 插入或者查找某个节点
  getPrev(num, find = false) {
    let point = this.root
    // 存放查找的值
    let res = []
    while (true) {
      if (point.left) {
        if (num < point.left.value || num < point.value) {
          point = point.left
          continue
        }
      }
      if (point.right) {
        if (num >= point.right.value || num >= point.value) {
          if (find && num === point.value) {
            res.push(point.value)
          }
          point = point.right
          continue
        }
      }
      // 如果是搜索的话
      if (find) {
        // 如果当前的节点等于找到节点
        if (point.value === num) {
          res.push(point.value)
        }
        // 没有找到
        if (res.length === 0) {
          return null
        }
        // 如果只有一个
        if (res.length === 1) {
          return res[0]
        }
        // 返回所有
        return res
      }
      // 遍历到叶子节点了
      return point
    }
  }
  // 中序遍历
  print() {
    let point = this.root
    if (point) {
      printAll(point.left)
      console.log(point.value)
      printAll(point.right)
    }
    function printAll(point) {
      if (point == null) {
        return
      }
      printAll(point.left)
      console.log(point.value)
      printAll(point.right)
    }
  }
}

function baseTest() {
  let searchTree = new SearchTree()
  console.log('step 1:')
  searchTree.insert(4)
  searchTree.insert(1)
  searchTree.insert(2)
  searchTree.insert(5)

  searchTree.print() //1 2 4 5
  console.log('step 2:')
  console.log('5', searchTree.find(5)) //5
  console.log('null:', searchTree.find(6)) //null
  searchTree.insert(5)
  searchTree.insert(5)
  console.log('5,5,5:', searchTree.find(5))
}
//删除测试
function delTest() {
  let searchTree = new SearchTree()
  console.log('add: 4 1 2 5 ')
  searchTree.insert(4)
  searchTree.insert(1)
  searchTree.insert(2)
  searchTree.insert(5)
  searchTree.print() //1 2 4 5
  //console.log('del 3 null:', searchTree.remove(3));
  console.log('del 1 true:', searchTree.remove(1))
  // console.log('print 2 4 5:')
  // searchTree.print();
  // console.log('del 4 root true:', searchTree.remove(4));
  // console.log('print 2 5:')
  // searchTree.print();
  // console.log('add: 3 7 1 5 5 5 ')
  // searchTree.insert(3);
  // searchTree.insert(7);
  // searchTree.insert(1);
  // searchTree.insert(5);
  // searchTree.insert(5);
  // searchTree.insert(5);
  // console.log('print: 1 2 3 5 5 5 5 7 ')
  // searchTree.print();
  // console.log('del 5 true:', searchTree.remove(5));
  // console.log('print: 1 2 3 7 ')
  // searchTree.print();
}

delTest()
