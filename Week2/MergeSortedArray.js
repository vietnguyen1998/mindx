/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for(let i = 0;i<n;i++){
        for(let j = 0;i <m;j++){
            if(nums1[j] >= nums2[i]){
                let temp = nums1[j];
                nums1[j] = nums2[i];
                j++;
                while(j < m){
                    nums1[j] = temp;
                    temp = nums1[j+1];
                    j++;
                }
                break;
            }
        }
    }
    let  a = nums1;
};

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
merge(nums1, m+n, nums2, n);