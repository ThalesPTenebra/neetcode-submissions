// [1, 2, 3, 4]
// [1, 2, 3, 4]
// [1, 2, 3, 4]
// [1, 2, 3, 4]

// 1,1,2,2 == 6

class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    matrix
    prefixMatrix
    constructor(matrix) {
        this.matrix = matrix
        this.prefixMatrix = Array.from({ length: matrix.length + 1 }, () => 
            new Array(matrix[0].length + 1).fill(0)
        )

        for(let row = 1; row < this.prefixMatrix.length; row++){
            for(let column = 1; column < this.prefixMatrix[0].length; column++){
                this.prefixMatrix[row][column] = this.matrix[row - 1][column - 1]
                    + this.prefixMatrix[row - 1][column]
                    + this.prefixMatrix[row][column - 1]
                    - this.prefixMatrix[row - 1][column - 1]
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        return this.prefixMatrix[row2 + 1][col2 + 1]
            - this.prefixMatrix[row2 + 1][col1]
            - this.prefixMatrix[row1][col2 + 1]
            + this.prefixMatrix[row1][col1]
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
