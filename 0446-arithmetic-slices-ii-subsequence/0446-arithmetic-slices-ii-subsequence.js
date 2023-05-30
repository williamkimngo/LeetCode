/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    let ans = 0;
    let n = nums.length;
    const cnt = {};
    for (let i = 0; i < n; i++) {
        cnt[i] = new Map();
        for (let j = 0; j < i; j++) {
            let diff = nums[i] - nums[j];
            let sum = cnt[j].get(diff) || 0;
            let origin = cnt[i].get(diff) || 0;
            cnt[i].set(diff, origin + sum + 1);
            ans += sum;
        }
    }
    return ans;
};