/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let w1l = word1.length, w2l = word2.length;
    
    const dp = new Array(w1l).fill(0).map(() => new Array(w2l).fill(-1));
    
    const lcs = (i = 0, j = 0) => {
        if(i == w1l || j == w2l) return 0;
        
        if(dp[i][j] != -1) return dp[i][j];
        
        if(word1[i] == word2[j]) {
            return dp[i][j] = lcs(i + 1, j + 1) + 1;
        }
        
        return dp[i][j] = Math.max(lcs(i + 1, j), lcs(i, j + 1));
    }
    
    return (w1l + w2l - 2 * lcs());
};