/** 重量 */
const w = [1, 2, 5, 6, 7]
/** 价值 */
const v = [1, 6, 18, 22, 28]
/** 容量 */
const C = 11

function dp(index, capacity) {
  if (capacity === 0) {
    return 0
  }
  const weight = w[index]
  const value = v[index]
  if (index === 0) {
    return weight > capacity ? 0 : weight
  }
  const notPutMax = dp(index - 1, capacity)
  if (capacity - weight >= 0) {
    // 放入当前物品
    const putMax = dp(index - 1, capacity - weight) + value
    return Math.max(notPutMax, putMax)
  }
  return notPutMax
}

console.log(dp(4, C))
