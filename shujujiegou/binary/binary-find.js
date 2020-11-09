/**
 * 二分查找
 */
// 查找第一个等于给定值的索引
const binaryFindFirst = (sortedArr, target) => {
  if (sortedArr.length === 0) return -1
  let low = 0
  let high = sortedArr.length - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)

    if (target < sortedArr[mid]) {
      // console.log('mid', mid, high, low)
      high = mid - 1
    } else if (target > sortedArr[mid]) {
      console.log('大于中间值mid', mid, high, low, target, sortedArr[mid])
      low = mid + 1
    } else {
      // 如果目标等于中间的值  如果目前位于0位置或者前面的位置不等与target那么当前mid位置是第一个等于给定的值
      console.log('等于中间值mid', mid, high, low, target, sortedArr[mid])
      if (mid === 0 || sortedArr[mid - 1] < target) {
        return mid
      }
      high = mid - 1
    }
  }
  return -1
}

// 查找最后一个相等的数
const binaryFindLast = (sortedArr, target) => {
  if (sortedArr.length === 0) return -1
  let low = 0
  let high = sortedArr.length - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (target < sortedArr[mid]) {
      console.log(
        '小于中间值mid',
        '中间:' + mid,
        '高位置:' + high,
        '低位置:' + low,
        '目标值:' + target,
        '中间值:' + sortedArr[mid]
      )
      high = mid - 1
    } else if (target > sortedArr[mid]) {
      console.log(
        '大于中间值mid',
        '中间:' + mid,
        '高位置:' + high,
        '低位置:' + low,
        '目标值:' + target,
        '中间值:' + sortedArr[mid]
      )
      low = mid + 1
    } else {
      // 如果目标等于中间的值  如果目前位于0位置或者前面的位置不等与target那么当前mid位置是第一个等于给定的值
      console.log(
        '等于中间值mid',
        '中间:' + mid,
        '高位置:' + high,
        '低位置:' + low,
        '目标值:' + target,
        '中间值:' + sortedArr[mid]
      )
      if (mid === 0 || sortedArr[mid + 1] > target) {
        return mid
      }
      low = mid + 1
      console.log('高位置:' + high, '低位置:' + low)
    }
  }
  return -1
}
const arr = [1, 2, 3, 4, 4, 4, 4, 4, 6, 7, 8, 8, 9]
// const first = binaryFindFirst(arr, 4)
const last = binaryFindLast(arr, 4)
// console.log(`FindFirst: ${first}`)
console.log(`binaryFindLast: ${last}`)

//查找第一个大于等于给定值的元素
const binaryFindFirstBig = (sortedArr, target) => {
  if (sortedArr.length === 0) return -1
  let low = 0
  let high = sortedArr.length - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (target <= sortedArr[mid]) {
      if (mid === 0 || sortedArr[mid - 1] < target) return mid
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1
}
// 查找最后一个小于等于给定值的元素
const biaryFindLastSmall = (sortedArr, target) => {
  if (sortedArr.length === 0) return -1
  let low = 0
  let high = sortedArr.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (target < sortedArr[mid]) {
      high = mid - 1
    } else {
      if (mid === sortedArr.length - 1 || sortedArr[mid + 1] >= target)
        return mid
      low = mid + 1
    }
  }
  return -1
}
