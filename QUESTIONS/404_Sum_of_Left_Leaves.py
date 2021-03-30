# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumOfLeftLeaves(self, root: TreeNode) -> int:
        self.res = 0
        def dfs(node):
            if not node: return None
            if node.left and not node.left.left and not node.left.right:
                self.res+=node.left.val
            dfs(node.left)
            dfs(node.right)
        dfs(root)
        return self.res