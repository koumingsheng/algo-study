// 阿拉伯数字转中文
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param n int整型 
 * @return string字符串
 */
function num2cn(n) {
  // write code here
  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const units = [100000000, 10000, 100, 10]
  const map = {
    0: '零',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
    7: '七',
    8: '八',
    9: '九',
    10: '十',
    100: '百',
    1000: '千',
    10000: '万',
    100000000: '亿',
  }

  for (let unit of units) {
    const stack = []
    while (n >= unit) {
      stack.unshift(map[unit])
      n /= unit
    }


  }


}

num2cn(1100000000)
// module.exports = {
//   num2cn: num2cn
// };