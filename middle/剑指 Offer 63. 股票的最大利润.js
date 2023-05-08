// 剑指 Offer 63. 股票的最大利润
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

  let minPrice = prices[0], max = 0
  for (const p of prices) {
    minPrice = Math.min(minPrice, p)
    max = Math.max(max, p - minPrice)
  }

  return max
};