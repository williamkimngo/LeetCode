/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let sorted = intervals.sort((a, b) => a[0] - b[0]);
    let res = [sorted[0]]
    
    for (let i = 1; i < sorted.length; i++) {
      let currStart = sorted[i][0]
      let currEnd = sorted[i][1];
      let lastEnd = res[res.length - 1][1];
      
      if (currStart <= lastEnd) {
        res[res.length - 1][1] = Math.max(lastEnd, currEnd);
      }
      else {
        res.push(sorted[i])
      }
    }
    
    return res;
};