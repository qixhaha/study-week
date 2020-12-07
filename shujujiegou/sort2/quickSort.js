/**
 * 快速排序
 */
/**
 *
 * @param {} arr 当前排序的数组
 * @param {*} left 排序左边的索引
 * @param {*} right 排序右边的索引
 * 思路：
 * 每次找到比较当前值的正确位置 左侧是是小于当前值的数组 后侧是大于当前值的数组
 */
// 交换方法
const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
const partition = (arr, pivot, left, right) => {
  // 比较的值
  const pivotVal = arr[pivot];
  // 当前存放小于比较值的位置
  let startIndex = left;
  for (let i = left; i < right; i++) {
    // 遍历当前左索引到右索引如果当前的值小于比较的值
    // 那么交换当前的值 与当前应该存放小于比较的值的当前位置
    if (arr[i] < pivotVal) {
      swap(arr, i, startIndex);
      //当前存放小于比较值的位置+1
      startIndex++;
    }
  }
  //最后将比较的位置存放当前比较值的正确位置
  swap(arr, startIndex, pivot);
  // 返回当前比较值的正确位置
  return startIndex;
};
const quickSort = (arr, left, right) => {
  if (left < right) {
    let pivot = right;
    let partitionIndex = partition(arr, pivot, left, right);
    // 将左右两边的数组再一次进行递归排序 如果当前比较值正确位置是最左边那么 最左边的数组就是当前这个位置组成的数组
    quickSort(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1);
    quickSort(
      arr,
      partitionIndex + 1 > right ? right : partitionIndex + 1,
      right
    );
  }
};

const testArr = [];
let i = 0;
while (i < 10) {
  testArr.push(Math.floor(Math.random() * 1000));
  i++;
}
console.log("unsort", testArr);
quickSort(testArr, 0, testArr.length - 1);
console.log("sort", testArr);
