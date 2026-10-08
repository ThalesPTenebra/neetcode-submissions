class NumMatrix:

    def __init__(self, matrix: List[List[int]]):
        self.M = [[0 for _ in range(len(matrix[0]) + 1)] for _ in range(len(matrix) + 1)]

        for i in range(len(self.M)):
            for j in range(len(self.M[0])):
                if i == 0 or j == 0:
                    self.M[i][j] = 0
                    continue
                self.M[i][j] = matrix[i - 1][j - 1] + self.M[i][j - 1] + self.M[i - 1][j] - self.M[i - 1][j - 1]
    
        
    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        return self.M[row2 + 1][col2 + 1] - self.M[row2 + 1][col1] - self.M[row1][col2 + 1] + self.M[row1][col1]


# Your NumMatrix object will be instantiated and called as such:
# obj = NumMatrix(matrix)
# param_1 = obj.sumRegion(row1,col1,row2,col2)