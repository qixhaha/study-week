/**
 * 归并排序
 */
// 合并数组
const mergeArr = (left, right) => {
  let temp = []
  // 左右元素指针(当前存放元素的指针)
  let leftIndex = 0
  let rightIndex = 0
  while (left.length > leftIndex && right.length > rightIndex) {}
}
const mergeSort = (arr) => {
  // 当任意数组分解到只有一个的时候返回
  if (arr.length <= 1) return arr
  // 找到中间位置
  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  mergeSort(left)
  mergeSort(right)
  mergeArr(left, right)
}
