/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let i = 1
    let prefix = strs[0]
    while (i < strs.length){
        if (!strs[i].startsWith(prefix)){
            prefix = prefix.slice(0, - 1)
        } else {
            i++
        }
    }
    return prefix
    
};