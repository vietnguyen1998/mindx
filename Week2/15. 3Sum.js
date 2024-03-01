/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = []
    nums.sort((a, b) => a - b)
    let map = new Map()
    nums.map((item, index) => map.set(item, index))
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let sum = 0 - (nums[i] + nums[j]);
            if (map.has(sum) && j < map.get(sum)) {
                res.push([nums[i], nums[j], sum])
            }
        }
    }

    console.log(res)
    let result = []
    if (res.length > 0) {
        for (let i = 0; i < res.length; i++) {
            let bAdd = true
            for (let j = 0; j < result.length; j++) {
                if (res[i][0] == result[j][0] && res[i][1] == result[j][1]) {
                    bAdd = false
                }
            }
            if (bAdd) result.push(res[i])
        }
    }

    return result
};