/**
 * @param {number[]} nums
 * @return {number}
 */
const xorBeauty = function(nums) {
    let result = 0
    for(let i=0;i<nums.length;i++) result ^= nums[i];
    return result
};