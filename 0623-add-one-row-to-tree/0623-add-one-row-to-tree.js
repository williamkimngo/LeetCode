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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
// Time: O(n + m) n = num nodes; m = num edges
// Space: Unsure :( if you know leave in comments pls
const addOneRow = (root, val, depth) => {    
    // If depth is 1, it's a root change
    if (depth === 1) {
        let n = new TreeNode(val);
        n.left = root;
        return n;
    }
    
    // Regular traverse function
    // added a 'dir' variable to know which way we came from
    const traverse = (node, depth, dir) => {
        // if we reached depth, and on a null node
        // on null node === node.left/node.right is null
        // We want node.left or node.right of prev node
        // to be this new TreeNode(val)
        if (depth === 0 && !node) {
            return new TreeNode(val);
        }
        // Depth is 0
        // There exists a node at this point, so we make
        // a new node and assign either it's left or right
        // the current node we are at and return
        if (depth === 0 && node) {
            let n = new TreeNode(val);
            n[dir] = node;
            return n;
        }
    
        // depth is not 0, but node is null, hence we can't go farther
        if (!node) {
            return null;
        }
        
        // traverse left and right subtrees
        // Put a "dir" so we know where we came from
        node.left = traverse(node.left, depth - 1, 'left')
        node.right = traverse(node.right, depth - 1, 'right')
        return node;
    }
    
    // Do DFS
    return traverse(root, depth - 1);
};