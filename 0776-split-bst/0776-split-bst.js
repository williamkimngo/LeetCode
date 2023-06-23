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
 * @param {number} target
 * @return {TreeNode[]}
 */
var splitBST = function(root, V) {
    if (root == null) return [null, null];
    
    if (root.val <= V) {
        const [lessThan, greaterThan] = splitBST(root.right, V);
        root.right = lessThan;
        return [root, greaterThan];
    }
    else {
        const [lessThan, greaterThan] = splitBST(root.left, V);
        root.left = greaterThan;
        return [lessThan, root];
    };
};