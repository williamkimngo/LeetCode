# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def flipMatchVoyage(self, root: Optional[TreeNode], voyage: List[int]) -> List[int]:
        ans = []
        p = 0
        flag = False
        def dfs(node):
            nonlocal ans, p, flag
            if not node:
                return ans
            if node.val != voyage[p]: #even after flip/ no flip value doesnt match thus order cant be followed
                flag = True
                return
            p += 1        # if value matched increment curr pointer
            if node.left and node.left.val != voyage[p]: # flip required
                ans.append(node.val)
                dfs(node.right)
                dfs(node.left)
            else:                           # flip not required
                dfs(node.left)
                dfs(node.right)
        dfs(root)
        if flag:
            return [-1]
        return ans

                