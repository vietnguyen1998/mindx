/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
    let n = nums.length;

    for (let i = 0, j = 1; i < n; i += 2, j += 2) {
      while (i < n && nums[i] % 2 == 0)
        i += 2;
      while (j < n && nums[j] % 2 == 1)
        j += 2;
      if (i < n) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }

    return nums;
};

let nums = [4,2,5,7];
sortArrayByParityII(nums);