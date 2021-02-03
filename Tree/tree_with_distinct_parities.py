# class Tree:
#     def __init__(self, val, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def solve(self, root):
        # setup a var to store the final result
        ans = 0

        def dfs(root):
            # set the ans as nonlocal for the outter function to return the final solution
            nonlocal ans
            if not root:
                return 0
            l = dfs(root.left)
            r = dfs(root.right)
            if root.left and root.right:
                ans += ((l % 2) + (r % 2)) % 2
            return root.val + l + r

        dfs(root)
        return ans