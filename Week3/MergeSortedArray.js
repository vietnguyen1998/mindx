/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//     for(let i = 0;i<n;i++){
//         for(let j = 0;i <m;j++){
//             if(nums1[j] >= nums2[i]){
//                 let temp = nums1[j];
//                 nums1[j] = nums2[i];
//                 j++;
//                 while(j < m){
//                     nums1[j] = temp;
//                     temp = nums1[j+1];
//                     j++;
//                 }
//                 break;
//             }
//         }
//     }
//     let  a = nums1;
// };

// let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
// merge(nums1, m+n, nums2, n);


// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  * time O(n)
//  * space O(n)
//  */
// var merge = function (nums1, m, nums2, n) {
//     let index1 = 0;
//     let index2 = 0;
//     let result = [];
//     while (index1 < m || index2 < n) {
//         if (index1 < m && nums1[index1] < nums2[index2]) {
//             result.push(nums1[index1++]);
//         } else {
//             result.push(nums2[index2++]);
//         }
//     }
//     nums1 = result;
// };

// let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// let a = merge(nums1, m, nums2, n);

var mergeSortedArray = function (left, right) {
    let i =0, j=0;
    var result = []

    while (i < left.length && j < right.length) {
        if (left[i] < right[j])
            result.push(left[i++])
        else
            result.push(right[j++])
    }
    while (i < left.length)
        result.push(left[i++])
    while (j < right.length)
        result.push(right[j++])
    return result;
}

var sortArray = function (nums) {
    if (nums.length < 2)
        return nums
    else {
        let middle = parseInt(nums.length / 2) // 2
        let left = sortArray(nums.slice(0, middle))
        let right = sortArray(nums.slice(middle, nums.length))
        return mergeSortedArray(left, right)
    }
};

let nums1 = [1,2,3], m = 3, nums2 = [2,5,6], n = 3;
let nums = [5,2,3,1]
// let a = mergeSortedArray(nums1,nums2);
let b = sortArray(nums)
''
