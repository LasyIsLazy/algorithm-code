/**
 * https://leetcode-cn.com/problems/divisor-game/
 */

/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
  const dp = []
  dp[1] = 0
  dp[2] = 1
  for (let i = 3; i <= N; i++) {
    dp[i] = dp[i - 1] + 1
  }
  return dp[N] % 2 === 1
}

divisorGame = function(N) {
  return !(N&1)
}

console.log(divisorGame(1))
