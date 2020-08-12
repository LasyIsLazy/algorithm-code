/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    let m = i
    let n = i
    while (m >= 0 && n <= s.length - 1 && s[m] === s[n]) {
      count++
      m--
      n++
    }
  }
  for (let i = 0; i < s.length; i++) {
    let m = i
    let n = i + 1
    while (m >= 0 && n <= s.length - 1 && s[m] === s[n]) {
      count++
      m--
      n++
    }
  }
  return count
}

console.log(countSubstrings('aaa'))
