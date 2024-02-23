/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    let len = nums1.length;
    let map = new Map();
    nums4.map(e => {
        map.set(e, map.has(e) ? map.get(e) + 1 : 1);
    })
    let count = 0;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            for (let k = 0; k < len; k++) {
                let num = -(nums1[i] + nums2[j] + nums3[k]);
                if (map.has(num)){
                    count = count + map.get(num)
                }
            }
        }
    }
    return count;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    let map = new Map();
    nums1.forEach(e1 =>{
        nums2.forEach(e2 => {
            let sum = e1 + e2;
            map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1)
        })
    })
    let count = 0;
    nums3.forEach(e3 =>{
        nums4.forEach(e4 => {
            let sum = e3 + e4;
            if(map.has(-sum)) count += map.get(-sum)
        })
    })
    return count;
};