import operator
class Solution:
    def solve(self, nums, op, val):
        dict = {
            "+": operator.add,
            "-": operator.sub,
            "*": operator.mul,
            "/": operator.floordiv,
        }
        new_arr = []
        for i in nums:
            new_arr.append(dict[op](i,val))
        
        return new_arr