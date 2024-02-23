/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let results = [];
    for (let i = 0; i < nums.length - 2; i++) {
        let sum = nums[i];
        let sub = []
        for (let j = i + 1; j < nums.length - 1; j++) {
            sum += nums[j];
            for (let k = j + 1; k < nums.length; k++) {
                sum += nums[k];
                if (sum == 0) {
                    sub[0] = nums[i];
                    sub[1] = nums[j];
                    sub[2] = nums[k];
                    results.push(sub);
                }
                sum -= nums[k];
            }
            sum -= nums[j];
        }
    }
    return results;
};

nums = [-1,0,1,2,-1,-4]

var a = threeSum(nums);
''