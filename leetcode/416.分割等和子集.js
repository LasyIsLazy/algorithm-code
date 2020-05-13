/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((pre, cur) => pre + cur) / 2
  if (!Number.isInteger(sum)) {
    return false
  }
  /** dp[i][j] 是否能用 [0, i] 区间的数组成 j */
  const dp = []
  // 第一个数能否组成 j
  dp[0] = new Array(sum + 1).fill(false).map((val, j) => nums[0] === j)
  for (let i = 1; i < nums.length; i++) {
    dp[i] = []
    const curNum = nums[i]
    // 只要不放入就可以组成 0
    dp[i][0] = true
    for (let j = 1; j <= sum; j++) {
      // j - curNum > 0 当前数字已经大于需要数字的，因此不能装入
      dp[i][j] = dp[i - 1][j] || (j - curNum > 0 && dp[i - 1][j - curNum])
    }
  }
  console.log(dp)
  return dp[nums.length-1][sum]
}

console.log(canPartition([1,2,5]))
// console.log(canPartition([1, 5, 11, 5]))
// console.log(!canPartition([1, 2, 3, 5]))
