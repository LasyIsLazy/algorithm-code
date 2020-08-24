/**
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) {
    return 0
  }
  let curStr = ''
  let maxLen = 0
  for (let index = 0; index < s.length; index++) {
    const char = s[index]
    let foundIndex = curStr.indexOf(char)
    if (foundIndex === -1) {
      curStr += char
    } else {
      // 有重复的字符，重置为从重复字符之后开始
      curStr = curStr.slice(foundIndex + 1)
      curStr += char
    }
    if (curStr.length > maxLen) {
      maxLen = curStr.length
    }
  }
  return maxLen
}

/**
 * 滑动窗口
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) {
    return 0
  }
  let maxLen = 0

  let left = 0
  let right = 0

  while (left < s.length && right < s.length) {
    const subStr = s.slice(left, right + 1)
    if (new Set(subStr).size !== subStr.length) {
      // 有重复的，下一个字符
      left++
      right = right > left ? right : left
    } else {
      // 没有重复的
      if (subStr.length > maxLen) {
        maxLen = subStr.length
      }
      // 增大范围
      right++
    }
  }

  return maxLen
}

console.log(lengthOfLongestSubstring('pwwkew') === 3)
console.log(lengthOfLongestSubstring(' ') === 1)
