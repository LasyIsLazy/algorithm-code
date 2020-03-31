/**
 * https://leetcode-cn.com/problems/maximum-subarray/
 * 解答：https://leetcode-cn.com/problems/maximum-subarray/solution/zui-da-zi-xu-he-cshi-xian-si-chong-jie-fa-bao-li-f/
 *
 * dp[i] 表示以第 i 个元素结尾的序列的最大子序列和
 * dp[i] = Max{ dp[i-1]+nums[i], nums[i]}
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const maxs = []
  maxs[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    const curNum = nums[i]
    maxs[i] = Math.max(maxs[i - 1] + curNum, curNum)
  }
  // console.log(maxs)
  return Math.max(...maxs)
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6)
console.log('-----------------------')
console.log(maxSubArray([-2, -1]) === -1)
console.log('-----------------------')
console.log(maxSubArray([8, -19, 5, -4, 20]) === 21)
