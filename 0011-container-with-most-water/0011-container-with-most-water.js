/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0
    let left = 0
    let right = height.length - 1
    // loop array until left pointer meets right pointer
    while (left <= right) {
        // calculate the current area by left, right
        const area = Math.min(height[left], height[right]) * (right - left)
        //check and store the maxArea
        maxArea = Math.max(maxArea, area)
        //check value, if bigger than other, move pointer
        if(height[left] > height[right]){
            right--
        } else {
            left++
        }
    }
    return maxArea
};