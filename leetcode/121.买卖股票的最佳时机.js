/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 *
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let dp = [0]
  let minPrice = prices[0]
  for (let i = 1; i < prices.length; i++) {
    const curPrice = prices[i]
    minPrice = Math.min(minPrice, curPrice)
    dp[i] = Math.max(dp[i - 1], curPrice - minPrice)
  }
  return dp[dp.length - 1]
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
