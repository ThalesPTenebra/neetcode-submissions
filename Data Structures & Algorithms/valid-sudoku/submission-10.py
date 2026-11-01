class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = [set() for _ in range(9)]
        cols = [set() for _ in range(9)]
        squares = [[set() for _ in range (3)] for _ in range(3)]

        for i in range(9):
            for j in range(9):
                cell = board[i][j]
                if cell == '.':
                    continue

                if cell in rows[i] or cell in cols[j] or cell in squares[i // 3][j // 3]:
                    return False
                else:
                    rows[i].add(cell)
                    cols[j].add(cell)
                    squares[i // 3][j // 3].add(cell)
        return True
