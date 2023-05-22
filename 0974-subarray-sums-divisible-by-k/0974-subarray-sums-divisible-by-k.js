/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let map ={}
    map[0] = 1;
    let count = 0;
    let total = 0;

    for(let num of nums){
        count = (count+num) %k;
        if(count<0) count +=k;
        if(map[count]) total += map[count]
        map[count] = map[count] ? map[count] + 1 : 1
    }
    return total;
};