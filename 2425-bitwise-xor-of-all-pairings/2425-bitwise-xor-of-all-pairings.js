/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function(nums1, nums2) {
    function getXor(arr) {
      let res = 0  
      
      for(let i = 0; i < arr.length; i++) {
          res ^= arr[i]
      }
      return res
    }
    
    let res = 0
    if(nums2.length % 2 === 1) {
       res ^= getXor(nums1) 
    }
    if(nums1.length % 2 === 1) {
        res ^= getXor(nums2)
    }
    
    return res
};