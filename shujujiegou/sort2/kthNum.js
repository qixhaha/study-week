/**
 * 时间复杂度为n的查找第k大个值
 */

function ktnNum(arr, k) {
  const len = arr.length;
  if (k > len) {
    return -1;
  }
  let p = partition(arr, 0, len - 1);
  while (p + 1 != k) {
    if (p + 1 > k) {
      p = partition(arr, 0, p - 1);
    } else {
      p = partition(arr, p + 1, len - 1);
    }
  }
  return arr[p];
}

function partition(arr, start, end) {
  let i = start;
  let pivot = arr[end];
  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i += 1;
    }
  }
  swap(arr, i, end);
  return i;
}

function swap(arr, i, j) {
  if (i === j) return;
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

// const testArr = [];
// let i = 0;
// while (i < 10) {
//   testArr.push(Math.floor(Math.random() * 1000));
//   i++;
// }
// console.log("unsort", testArr);
let testArr = [10, 4, 5, 6, 7, 87, 89, 34, 1, 2];
// quickSort(testArr, 0, testArr.length - 1);
// console.log("sort", testArr);
console.log(ktnNum(testArr, 5));
