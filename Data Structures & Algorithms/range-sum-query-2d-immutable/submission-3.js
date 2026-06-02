class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        // create the prefix matrix
        this.prefixMatrix = Array.from({ length: matrix.length + 1 }, () => new Array(matrix[0].length + 1))
        for(let i = 0; i < this.prefixMatrix.length; i++){
            for(let j = 0; j < this.prefixMatrix[0].length; j++){
                if(i === 0 || j === 0) {
                    this.prefixMatrix[i][j] = 0
                    continue
                }

                this.prefixMatrix[i][j] = 
                    this.prefixMatrix[i - 1][j] +
                    this.prefixMatrix[i][j - 1] -
                    this.prefixMatrix[i - 1][j - 1] +
                    matrix[i - 1][j - 1]
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
        // O(1) O(1)
        return this.prefixMatrix[row2 + 1][col2 + 1] 
        - (this.prefixMatrix[row2 + 1][col1])
        - (this.prefixMatrix[row1][col2 + 1])
        + (this.prefixMatrix[row1][col1])
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
