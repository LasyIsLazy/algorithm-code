/**
 * 冒泡
 */
function bubbleSort(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // 每次冒泡最大的元素浮到最顶端
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

/** 选择排序 */
function selectionSort(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    // 每次选择最小的和 i 交换
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

/** 插入排序 */
function insertionSort(arr = []) {
  for (let i = 1; i < arr.length; i++) {
    const element = arr[i]
    for (let j = 0; j < i; j++) {
      // 把元素插入到正确的位置
      if (element < arr[j]) {
        arr.splice(j, 0, ...arr.splice(i, 1))
        break
      }
    }
  }
  return arr
}

/** 快速排序 */
function quickSort(arr = []) {
  if (arr.length <= 1) {
    return arr
  }
  const pivot = arr.splice(Math.round(arr.length / 2), 1)[0]
  const left = []
  const right = []
  arr.forEach((item) => {
    if (item < pivot) {
      left.push(item)
    } else {
      right.push(item)
    }
  })
  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(bubbleSort([2, 1, -4, 5, 3, 4]))
console.log(selectionSort([2, 1, -4, 5, 3, 4]))
console.log(insertionSort([2, 1, -4, 5, 3, 4]))
console.log(quickSort([2, 1, -4, 5, 3, 4]))
