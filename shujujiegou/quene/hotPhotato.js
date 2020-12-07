/**
 * 通过队列实现击鼓传花功能
 *
 */
const Quene = require("./deque");
function hotPhoto(elementsList, num) {
  const quene = new Quene();
  // 传递的人数
  const elimitatedList = [];
  // 初始化队列人数
  for (let i = 0; i < elementsList.length; i++) {
    quene.addBack(elementsList[i]);
  }
  while (quene.size() > 1) {
    for (let i = 0; i < num; i++) {
      quene.addBack(quene.removeFront());
    }
    elimitatedList.push(quene.removeFront());
  }
  return {
    eliminated: elimitatedList,
    winner: quene.removeFront(),
  };
}

const names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
const result = hotPhoto(names, 7);
result.eliminated.forEach((name) => {
  console.log(`${name}在击鼓传花中被淘汰`);
});
console.log(`胜利者为：${result.winner}`);
