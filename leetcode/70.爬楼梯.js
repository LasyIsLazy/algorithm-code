/**
 * https://leetcode-cn.com/problems/climbing-stairs/
 *
 *
 */

/**
 * @param {number} n
 * @return {number}
 * dp[i] = dp[i-1] + dp[i-2]*2
 */
var climbStairs = function(n) {
  const counts = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    counts[i] = counts[i - 1] + counts[i - 2]
  }
  return counts[n]
}

console.log(climbStairs(1) === 1)
console.log(climbStairs(2) === 2)
console.log(climbStairs(3) === 3) 
console.log(climbStairs(4) === 5)
