// 剑指 Offer 11. 旋转数组的最小数字


/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    let i = 0, j = numbers.length - 1
    while (i <= j) {
        const mid = (i + j) >>> 1
        if (numbers[mid] > numbers[j]) {
            i = mid + 1
        } else if (numbers[mid] < numbers[j]) {
            j = mid
        } else {
            j -= 1
        }
    }
    return numbers[i]
};