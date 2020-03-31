/**
 *
 * https://leetcode-cn.com/problems/range-sum-query-immutable/
 */

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.arr = nums
  this.sums = []
  nums.forEach((val, index) => {
    if (index === 0) {
      this.sums[index] = val
      return
    }
    this.sums[index] = val + this.sums[index - 1]
  })
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if (i === 0) {
    return this.sums[j]
  }
  return this.sums[j] - this.sums[i - 1]
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

var obj = new NumArray([-2, 0, 3, -5, 2, -1])
console.log(obj.sumRange(2, 5) === -1)
