/**
 * https://segmentfault.com/a/1190000004498566
给定一个数字三角形，找到从顶部到底部的最小路径和。每一步可以移动到下面一行的相邻数字上。

[2],
[3,4],
[6,5,7],
[4,1,8,3]

从顶到底部的最小路径和为11 ( 2 + 3 + 5 + 1 = 11)。
 */
const input = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]
const f = []
for (let x = 0; x < input.length; x++) {
  const line = input[x]
  f[x] = Math.min(...line)
}
console.log(f)
console.log(`最小路径和：${f.reduce((pre, cur) => pre + cur)} = ${f.join(' + ')}`)
