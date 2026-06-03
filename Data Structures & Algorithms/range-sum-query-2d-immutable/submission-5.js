class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.prefixSum = Array.from({ length: matrix.length + 1 }, () => new Array(matrix[0].length + 1).fill(0))

        for(let i = 0; i < this.prefixSum.length; i++){
            for(let j = 0; j < this.prefixSum[0].length; j++){
                if(i === 0 || j === 0) continue

                this.prefixSum[i][j] = 
                    matrix[i - 1][j - 1] +
                    this.prefixSum[i - 1][j] +
                    this.prefixSum[i][j - 1] -
                    this.prefixSum[i - 1][j - 1]
            }
        }

        console.log(this.prefixSum)
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        return this.prefixSum[row2 + 1][col2 + 1] -
                this.prefixSum[row2 + 1][col1] -
                this.prefixSum[row1][col2 + 1] +
                this.prefixSum[row1][col1]
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
