/**
 * https://leetcode-cn.com/problems/house-robber/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums.length) {
    return 0
  }
  if (nums.length === 1) {
    return nums[0]
  }
  const dp = []
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < nums.length; i++) {
    const curNum = nums[i]
    dp[i] = Math.max(dp[i - 2] + curNum, dp[i - 1])
  }
  return dp[dp.length - 1]
}

console.log(rob([1, 2, 3, 1]))
console.log(rob([2, 7, 9, 3, 1]))
console.log(rob([2, 10000, 9, 3, 10000000]))
