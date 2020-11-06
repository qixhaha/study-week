/**
 * 二分查找某一个具体的数值
 */
/**
 *
 * @param {Array} sortedArr 排好序的数组
 * @param {Number} target 要查找的数值
 */
const binaryFind = (sortedArr, target) => {
  if (sortedArr.length === 0) {
    return -1
  }
  // 查找的左索引
  let low = 0
  let high = sortedArr.length - 1
  let count = 0
  while (low <= high) {
    count++
    // console.log('count', count)
    // 中间位置
    const mid = Math.floor((low + high) / 2)
    // 如果中间的值等于比较的值
    if (target === sortedArr[mid]) {
      return mid
      // 如果查找的值小于中间的值 说明在查找值的左边
    } else if (target < sortedArr[mid]) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1
}
const arr = [1, 4, 5, 6, 7, 8, 10, 11, 23, 42, 44, 54, 56, 77, 102]
console.log(binaryFind(arr, 44))
console.log(binaryFind(arr, 1))
console.log(binaryFind(arr, 102))
console.log(binaryFind(arr, 1111))
console.log(binaryFind(arr, 11))
