# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        res, max_depth = None, -1
        # 00 -> nothing
        # 10 -> contains p
        # 01 -> contains    q
        # 11 -> contains p, q

        # return whether seen p, q represented by a bitmask
        def DFS_contains(root, depth) -> int:
            nonlocal res, max_depth
            if not root: return 0
            tmp = 0
            if root == p: tmp |= 2
            if root == q: tmp |= 1
            # get mask from left l, right r
            l, r = DFS_contains(root.left, depth + 1), \
                DFS_contains(root.right, depth + 1)
            # Union l & r
            tmp |= l | r
            # Seen both and the node is deeper
            if tmp == 3 and depth > max_depth:
                max_depth = depth
                res = root
            return tmp

        DFS_contains(root, 0)
        return res