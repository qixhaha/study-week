/**
 * 冒泡，插入，选择排序
 */

// 冒泡排序

const bubbleSort = (arr) => {
  if (arr.length <= 1) {
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    let hasChange = false; // 判断某一轮是否有改变过没有改变过说明都是正序排列
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        hasChange = true;
      }
    }
    if (!hasChange) {
      break;
    }
  }
};

// 插入排序
/**
 *
 * 分为两个区间一个是排序过得一个未排序的
 * 倒着比较不改变相同元素的位置  稳定排序
 */
const insertionSort = (arr) => {
  if (arr.length <= 1) {
    return;
  }
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    for (j; j >= 0; --j) {
      if (arr[j] > temp) {
        // 没有跳出循环 --j还执行
        arr[j + 1] = arr[j];
      } else {
        // 如果排好序的最后小于当前的值那么说明不需要向前比较了直接放在当前位置即可
        // 跳出循环的话  --j不执行
        break;
      }
    }
    arr[j + 1] = temp;
  }
};

// 选择排序

const selectionSort = (arr) => {
  if (arr.length <= 1) {
    return;
  }
};
