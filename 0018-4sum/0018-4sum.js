/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let res = []
    nums.sort((a,b)=>a-b)

    for(let i =0; i< nums.length-3;i++){
        for(let j =i+1; j<nums.length-2;j++){
            let f = nums[i];
            let s = nums[j];
            let left = j+1;
            let right = nums.length-1;
            while(left<right){
                let sum = f + s + nums[left] + nums[right];
                if(sum < target) left++
                else if(sum > target) right--
                else {
                    res.push([f,s,nums[left],nums[right]]);
                    while(nums[left] == nums[left+1])left++
                    while(nums[right] == nums[right-1]) right--
                    left++
                    right--
                }
            }
            while(nums[j] == nums[j+1]) j++
        }
        while(nums[i] == nums[i+1]) i++
    }
    return res
};