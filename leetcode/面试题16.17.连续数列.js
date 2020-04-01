/**
 * https://leetcode-cn.com/problems/contiguous-sequence-lcci/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const dp = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    const curNum = nums[i]
    dp[i] = Math.max(dp[i - 1] + curNum, curNum)
  }
  // console.log(dp)
  return Math.max(...dp)
}

maxSubArray = function(nums) {
  let max = 0
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i]
    sum += curNum
    if (sum > max) {
      max = sum
    }
    if (sum < 0) {
      sum = 0
      continue
    }
    // console.log(max, sum)
  }
  // console.log(dp)
  return max > 0 ? max : Math.max(...nums)
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
