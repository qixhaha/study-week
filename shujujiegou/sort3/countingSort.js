const countingSort = (array) => {
  if (array.length <= 1) return
  let max = findMaxValue(array)
  // 查找最大值  定义counts数组   数组下标存的就是当前的值 数组存的是当前值有几个
  const counts = new Array(max + 1)
  array.forEach((element) => {
    if (!counts[element]) {
      // 如果没有的话最开始是0
      counts[element] = 0
    }
    counts[element]++
  })
  // counts下标是元素，值是元素个数
  // 例如： array: [6, 4, 3, 1], counts: [empty, 1, empty, 1, 1, empty, 1]
  // i是元素, count是元素个数
  // 要排序的索引
  let sortedIndex = 0
  counts.forEach((count, i) => {
    while (count > 0) {
      // i 为当前的值 sortedIndex为排序的位置
      array[sortedIndex] = i
      sortedIndex++
      count--
    }
  })
  return array
}

// 查找最大值
function findMaxValue(array) {
  let max = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }
  return max
}
let array = [22, 5, 11, 41, 45, 26, 29, 10, 7, 8, 30, 27, 42, 43, 40]
console.log(countingSort(array))
