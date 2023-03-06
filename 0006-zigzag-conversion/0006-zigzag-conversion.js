/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    //base case
    if (numRows === 1) {
        return s
    }
    
    //set up array to store rows
    let res = new Array(numRows).fill("")
    let curr = 0
    let increasing = true
    for (let i = 0; i < s.length; i++) {
        res[curr] += s[i]
        if (increasing) {
            curr++
        } else {
            curr--
        }
        //if current row is at highest point, tell it to go down, else tell it go up. 
        if (curr === numRows - 1) {
            increasing = false
        } else if (curr === 0) {
            increasing = true
        }
    }
    return res.join('')
};