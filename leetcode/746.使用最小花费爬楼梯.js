/**
 * https://leetcode-cn.com/problems/min-cost-climbing-stairs/
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const dp = []
  dp[0] = 0
  dp[1] = Math.min(cost[0], cost[1])
  if (!cost.length) {
    return 0
  }
  if (cost.length < 3) {
    return Math.min(...cost)
  }
  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 2] + cost[i - 1], dp[i - 1] + cost[i])
  }
  // console.log(dp)
  return dp[dp.length - 1]
}

console.log(minCostClimbingStairs([10, 15, 20]))

// 优化
minCostClimbingStairs = function(cost) {
  let prePre = 0
  let pre = Math.min(cost[0], cost[1])
  let cur = 0
  if (!cost.length) {
    return 0
  }
  if (cost.length < 3) {
    return Math.min(...cost)
  }
  for (let i = 2; i < cost.length; i++) {
    cur = Math.min(prePre + cost[i - 1], pre + cost[i])
    prePre = pre
    pre = cur
  }
  // console.log(dp)
  return cur
}
