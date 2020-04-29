/**
 * https://leetcode-cn.com/problems/continuous-subarray-sum/
 *
 * 给定一个包含非负数的数组和一个目标整数 k，编写一个函数来判断该数组是否含有连续的子数组，其大小至少为 2，总和为 k 的倍数，即总和为 n*k，其中 n 也是一个整数。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/continuous-subarray-sum
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  if (k === 0) {
    return (
      nums.findIndex(
        (val, index) => index !== 0 && val + nums[index - 1] === 0
      ) !== -1
    )
  }
  for (let start = 0; start < nums.length - 1; start++) {
    /** start 开始累加 i 个数的和 */
    const accs = [nums[start]]
    for (let end = start + 1; end < nums.length; end++) {
      /** start 开始到当前下标累加的数量 */
      const accAcount = end - start
      const acc = accs[accAcount - 1] + nums[end]
      if (acc % k === 0) {
        return true
      }
      accs[accAcount] = acc
    }
  }
  return false
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  if (k === 0) {
    return (
      nums.findIndex(
        (val, index) => index !== 0 && val + nums[index - 1] === 0
      ) !== -1
    )
  }
  const map = new Map()
  map.set(0, -1)
  let sum = 0
  for (let index = 0; index < nums.length; index++) {
    const curNum = nums[index]
    sum = (sum + curNum) % k
    if (map.has(sum)) {
      if (index - map.get(sum) >= 2) {
        return true
      }
    } else {
      map.set(sum, index)
    }
  }
  return false
}

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6))
console.log(checkSubarraySum([23, 2, 6, 4, 7], 6))
console.log(checkSubarraySum([0, 0], 0))
console.log(!checkSubarraySum([0, 1, 0], 0))
console.log(checkSubarraySum([0, 0], -1))
console.log(checkSubarraySum([1, 2, 3], 5))
console.log(!checkSubarraySum([1, 0, 1, 0, 1], 4))
