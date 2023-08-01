function buildArray(nums: number[]): number[] {
    let answer = [];
    for(let i = 0; i < nums.length; i++) {
        answer[i] = nums[nums[i]];
    }

    return answer;
};