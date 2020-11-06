/**
 * 桶排序
 * 将数组中的数据，按照桶进行划分，将相邻的数据划分在一个桶中
 * 每个桶采用插入排序算法进行排序
 * 最后整合每一个桶中的数据
 */
function bucketSort(array, bucketSize = 5) {
  if (array.length < 2) {
    return array
  }
  const buckets = createBucket(array, bucketSize)
  return sortBuckets(buckets)
  // return array
}
// 创建桶 0 - 5 5 - 10 这种的
function createBucket(array, bucketSize) {
  let minValue = array[0]
  let maxValue = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i]
    } else if (array[i] > maxValue) {
      maxValue = array[i]
    }
  }

  // 根据最小值，最大值，桶的大小，计算的到桶的个数
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
  const buckets = []
  // 创建一个二维数组，将桶放在buckets中
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = []
  }
  // 计算每一个值应该放在哪个桶里面
  for (let i = 0; i < array.length; i++) {
    const bucketIndex = Math.floor((array[i] - minValue) / bucketSize)
    buckets[bucketIndex].push(array[i])
  }
  return buckets
}

function sortBuckets(buckets) {
  console.log('buckets', buckets)
  const sortedArray = []
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] != null) {
      insertionSort(buckets[i])
      sortedArray.push(...buckets[i])
    }
  }
  return sortedArray
}
// 插入排序
function insertionSort(array) {
  const { length } = array
  if (length <= 1) {
    return
  }
  for (let i = 0; i < length; i++) {
    // 当前的值
    let value = array[i]
    // 已经排序好的值
    let j = i - 1
    while (j >= 0) {
      if (array[j] > value) {
        // 将当前的值向后移动一位
        array[j + 1] = array[j]
        j--
      } else {
        break
      }
    }
    array[j + 1] = value
  }
  console.log('array', array)
  return array
}
let array = [22, 5, 11, 41, 45, 26, 29, 10, 7, 8, 30, 27, 42, 43, 40]
console.log(bucketSort(array))
