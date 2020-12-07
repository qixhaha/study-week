/**
 * 归并排序
 */
const mergeArr = (left, right) => {
  let temp = [];
  // 当前左侧指针
  let leftIndex = 0;
  let rightIndex = 0;
  // 表示左侧数组到达最后一个字符或者右侧数组到达最后一个字符
  while (left.length > leftIndex && right.length > rightIndex) {
    if (left[leftIndex] <= right[rightIndex]) {
      temp.push(left[leftIndex]);
      leftIndex++;
    } else {
      temp.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // 合并剩余的左侧或者右侧  因为都是排好序的所以 最后剩余的肯定是最大的
  return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};
const mergeSort = (arr) => {
  // 当任意数组分解到只有一个时返回
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return mergeArr(mergeSort(left), mergeSort(right));
};
const testArr = [];
let i = 0;
while (i < 100) {
  testArr.push(Math.floor(Math.random() * 1000));
  i++;
}

const res = mergeSort(testArr);
console.log(res);
