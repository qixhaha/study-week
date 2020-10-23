/**
 * 循环队列
 */
class Quene {
  constructor(maxSize) {
    //最大长度
    this.maxSize = maxSize;
    this.dataStore = [];
    this.front = 0;
    this.rear = 0;
  }
  // 清除队列
  clear() {}
  // 判断队列是否为空
  empty() {}
  // 获取队列的头元素
  head() {}
  // 插入队列中
  enquene(data) {
    // 如果队列已满
    if ((this.rear + 1) % this.maxSize === this.front) {
      console.log("队列已满");
      //   return;
    }
    this.dataStore[this.rear] = data;
    this.rear = (this.rear + 1) % this.maxSize;
  }
  // 删除队列的对头元素
  dequene() {
    if (this.rear === this.front) {
      console.log("队列是空的");
    }
    let e = this.dataStore[this.front];
    this.front = (this.front + 1) % this.maxSize;
  }
  // 队列的长度
  queneLength() {
    console.log(this.rear, this.front);
    return (this.rear - this.front + this.maxSize) % this.maxSize;
  }
  print() {
    console.log("打印", this.dataStore);
  }
}
let quene = new Quene(5);

quene.enquene(2);
quene.enquene(2);
quene.enquene(2);
quene.enquene(2);
quene.enquene(2);
console.log(quene.queneLength());
/**
 * 链式存储队列
 */
