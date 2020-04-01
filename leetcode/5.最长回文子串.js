/**
 * https://leetcode-cn.com/problems/longest-palindromic-substring/
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let longestStr = ''
  for (let i = 0; i < s.length; i++) {
    for (
      let startIndex = i, endIndex = i;
      endIndex <= s.length - 1 && startIndex >= 0;
      startIndex--, endIndex++
    ) {
      if (s[startIndex] !== s[endIndex]) {
        break
      } else {
        const substr = s.substring(startIndex, endIndex + 1)
        if (substr.length > longestStr.length) {
          longestStr = substr
        }
      }
    }
  }
  for (let i = 0; i < s.length; i++) {
    for (
      let startIndex = i, endIndex = i + 1;
      endIndex <= s.length - 1 && startIndex >= 0;
      startIndex--, endIndex++
    ) {
      if (s[startIndex] !== s[endIndex]) {
        break
      } else {
        const substr = s.substring(startIndex, endIndex + 1)
        if (substr.length > longestStr.length) {
          longestStr = substr
        }
      }
    }
  }
  return longestStr
}

// console.log(longestPalindrome('babad'))
// console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('ccc'))
// console.log(longestPalindrome('abcda'))
