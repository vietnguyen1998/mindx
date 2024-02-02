/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort();
    console.log(nums)
    let current = 0;
    for(let i = 0;i<nums.length;i++){
        if(nums[i] != current){
            return current;
        }
        current++;
    }
    return null;
};

let nums = [9,6,4,2,3,5,7,0,1]
missingNumber(nums)