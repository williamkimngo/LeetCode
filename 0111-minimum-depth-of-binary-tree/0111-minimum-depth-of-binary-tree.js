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
var minDepth = function(root) {
    if(!root) return 0;
    let depth = 1;
    let queue = [root];
    if(!root.left && !root.right) return depth;

    while(queue.length > 0 ){
      let queueLength = queue.length;

      for(let i = 0; i < queueLength; i++){
        let node = queue.shift();

        if(!node.left && !node.right) return depth;
        else{
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
        }
      }

      depth++;
    }

    return depth;
};