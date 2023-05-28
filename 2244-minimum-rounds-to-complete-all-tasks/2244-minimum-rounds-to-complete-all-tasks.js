/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    
    function solve(x, cnt) {   
        if (x == 0) {
            return 0;
        }
        
        if (x < 2) {
            return Number.MAX_VALUE;
        }
        
        if (cnt[x]) {
            return cnt[x];
        }
        
        let left = 1 + solve(x - 3, cnt);
        let right = 1 + solve(x - 2, cnt);
        
        cnt[x] = Math.min(left, right);
        return cnt[x];
    }
    
    let hash = {};
    for (let x of tasks) {
        hash[x] = hash[x] ? hash[x] + 1 : 1;
    }
    
    let ans = 0;
    for (let x of Object.values(hash)) {
        let temp = solve(x, {});
        if (temp == Number.MAX_VALUE) {
            ans = -1;
            break;
        } else {
            ans += temp;
        }
    }
    
    return ans;
};