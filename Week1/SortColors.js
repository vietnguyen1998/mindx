/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let zero = 0;
    let one = 0;
    let two = 0;

    nums.forEach((num) => {
        if (num == 0) {
            nums[two++] = 2;
            nums[one++] = 1;
            nums[zero++] = 0;
        } else if (num == 1) {
            nums[two++] = 2;
            nums[one++] = 1;
        } else {
            nums[two++] = 2;
        }
    });
};

let nums = [2,0,2,1,1,0,2,1,2];
sortColors(nums);