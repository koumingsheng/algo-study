// 468. 验证IP地址
/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function (queryIP) {
  if (queryIP.indexOf('.') >= 0 && check4(queryIP)) return 'IPv4'
  if (queryIP.indexOf(':') >= 0 && check6(queryIP)) return 'IPv6'
  return 'Neither'
};

function check4(queryIP) {
  const list = queryIP.split('.')
  const len = list.length
  if (len !== 4) return false

  for (let i = 0; i < 4; i++) {
    const strNum = list[i]
    if (strNum.length > 1 && strNum[0] === '0') return false
    if (strNum.length > 3) return false
    if (strNum > '255' || strNum < '0') return false
  }

  return true
}

function check6(queryIP) {
  const list = queryIP.split(':')
  const len = list.length
  if (len !== 8) return false

  for (const numStr of list) {
    if (numStr.length > 4 || numStr.length === 0) return false
    for (const c of numStr) {
      if ((c >= 'A' && c <= 'F') || (c >= 'a' && c <= 'f') || (c >= '0' && c <= '9')) {
        continue
      }
      return false
    }
  }

  return true
}