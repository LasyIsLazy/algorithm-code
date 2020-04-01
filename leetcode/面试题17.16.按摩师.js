/**
 * https://leetcode-cn.com/problems/the-masseuse-lcci/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
  const dp = []
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  if (nums.length === 0) {
    return 0
  }
  if (nums.length === 1) {
    return nums[0]
  }
  for (let i = 2; i < nums.length; i++) {
    const curNum = nums[i]
    dp[i] = Math.max(dp[i - 2] + curNum, dp[i - 1])
  }
  return Math.max(dp[nums.length - 1], dp[nums.length - 2])
}

console.log(massage([2, 7, 9, 3, 1]) === 12)
console.log(massage([2, 1, 4, 5, 3, 1, 1, 3]) === 12)
