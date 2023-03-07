/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//BFS
// var deepestLeavesSum = function(root) {
//     let q = [root], ans, qlen, curr
//     while (q.length) {
//         qlen = q.length, ans = 0
//         for (let i = 0; i < qlen; i++) {
//             curr = q.shift(), ans += curr.val
//             if (curr.left) {
//                 q.push(curr.left)
//             }
//             if (curr.right) {
//                 q.push(curr.right)
//             }
//         }
//     }
//     return ans
// };

var deepestLeavesSum = function(root) {
    let sums = []
    const dfs = (node, lvl) => {
        if (lvl === sums.length) {
            sums[lvl] = node.val
        } else {
            sums[lvl] += node.val
        }
        if (node.left) {
            dfs(node.left, lvl + 1)
        }
        if(node.right) {
            dfs(node.right, lvl + 1)
        }
    }
    dfs(root, 0)
    return sums[sums.length - 1]
}