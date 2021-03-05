For a problem, if there exists a recursive solution, follow the guidelines bellow:

For instance, we define the problem as the function F(X) to implement, where X
is the input of the function which also defines the scope of the problem.

Then, in the function F(X), we will:

1. break the problem into smaller scopes(subproblems)
2. call function F(x0),F(x1),...,F(xn), recursively to solve the subproblems of X;
3. process the results from the recursive function calls to solve the problem corresponding to X.


dfs template

class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        color = {}
        def dfs(x, c):
            if x in color: return color[x] == c
            color[x] = c
            return all(dfs(y, -c) for y in graph[x])
        
        return all(i in color or dfs(i, 1) for i in range(len(graph)))