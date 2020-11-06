/**
 * 冒泡，插入，选择排序
 */

// 冒泡排序

const bubbleSort = (arr) => {
  if (arr.length <= 1) {
    return
  }
  for (let i = 0; i < arr.length; i++) {
    let hasChange = false // 判断某一轮是否有改变过没有改变过说明都是正序排列
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
        hasChange = true
      }
    }
    if (!hasChange) {
      break
    }
  }
}

// 插入排序
/**
 *
 * 分为两个区间一个是排序过得一个未排序的
 * 倒着比较不改变相同元素的位置  稳定排序
 */
const insertionSort = (arr) => {
  if (arr.length <= 1) {
    return
  }
  // 默认第一个是排序好的 然后从第二个开始和前面排好序的相比较
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    let j = i - 1
    // 倒序比较
    for (j; j >= 0; --j) {
      // 如果前面的值大于当前遍历到的值,那么前面的值赋值给后面的值
      if (arr[j] > temp) {
        // 没有跳出循环 --j还执行
        arr[j + 1] = arr[j]
      } else {
        // 如果排好序的最后小于当前的值那么说明不需要向前比较了直接放在当前位置即可
        // 跳出循环的话  --j不执行
        break
      }
    }
    arr[j + 1] = temp
  }
}

// 选择排序

const selectionSort = (arr) => {
  if (arr.length <= 1) {
    return
  }
  // 注意最后一个必然是最大的 所以循环长度-1此
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    const temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  console.log('当前的值为', arr)
}

const test = [4, 5, 6, 3, 2, 1]
bubbleSort(test)
const testSort = [4, 1, 6, 3, 2, 1]
insertionSort(testSort)
const testSelect = [4, 8, 6, 3, 2, 1, 0, 12]
selectionSort(testSelect)
