        # write a recursive function to check the node value
        # the recursive function is taking 3 parameters(node, lowerbound, higherbound)
        # 1. check if the root node is null, if it is null, return true
        # 2. constantly check if the node.val is within the lower and upper bound.
        # 3. if the value is lower or higher than the bound, return false. 
        # 4. return True if all the if statement is passed.
        
class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        def dfs(node,low=float('-inf'),high=float('inf')):
            if not node:
                return True
            
            val=node.val
            if val<low or val>high: return False
            if not dfs(node.left,low,val): return False
            if not dfs(node.right,val,high): return False
            return True
        return dfs(root)
