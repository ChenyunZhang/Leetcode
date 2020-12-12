class Solution:
    def solve(self, matrix):
        '''
        Approach 1:
        check each row, if there is any 0,
        replace the whole array with 0
        check each column, if there is any 0
        replace the column with 0
        
        Approach 2:
        record the row index, of each 0
        record the column index of each column,
        example: 
            row [0,2,3]
            column[0,1,2]
        '''
        row_arr = []
        col_arr = []
        
        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                if matrix[i][j] == 0:
                    if i not in row_arr:
                        row_arr.append(i)
                    if j not in col_arr:
                        col_arr.append(j)
        
        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                if i in row_arr:
                    matrix[i][j] = 0
                if j in col_arr:
                    matrix[i][j] = 0
        
        return(matrix)