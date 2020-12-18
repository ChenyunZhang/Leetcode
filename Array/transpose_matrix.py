class Solution:
    def solve(self, matrix):
        new_matrix = []
        for i in range(len(matrix)):
            new_matrix.append([])
            for j in range(len(matrix[i])):
                new_matrix[i].append(matrix[j][i])
                
        return new_matrix