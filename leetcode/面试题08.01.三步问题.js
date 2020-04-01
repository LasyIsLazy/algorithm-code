/**
 * https://leetcode-cn.com/problems/three-steps-problem-lcci/
 */

/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function(n) {
  const dp = []
  dp[1] = 1
  dp[2] = 2
  dp[3] = 4

  for (let i = 4; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000007
  }
  return dp[n]
}

console.log(waysToStep(5))
