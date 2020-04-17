/**
 * https://leetcode-cn.com/problems/perfect-squares/
 */

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = [0, 1]
  const perfectNums = [1]
  for (let num = 1; num <= n; num++) {
    if (Number.isInteger(Math.sqrt(num))) {
      perfectNums.push(num)
      dp[num] = 1
    } else {
      let min = Infinity
      for (let index = 0; index < perfectNums.length; index++) {
        const curPerfectNum = perfectNums[index]
        const cost = 1 + dp[num - curPerfectNum]
        if (cost <= min) {
          min = cost
        }
      }
      dp[num] = min
    }
  }
  console.log(dp)
  return dp[n]
}

console.log(numSquares(12) === 3)
console.log(numSquares(13) === 2)
