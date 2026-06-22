class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // Not duplicates - 3 diff forms
        // Create 9 + 9 + 9 new Sets
        const colSets = Array.from({length: 9}, () => new Set())
        const rowSets = Array.from({length: 9}, () => new Set())
        const squareSets = Array.from({
                length: 3
            },
            () => Array.from({length: 3},  () => new Set())
        )

        // loops

        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                if(board[i][j] === '.') continue


                // Validar linha
                if(rowSets[i].has(board[i][j])){
                    return false
                } else {
                    rowSets[i].add(board[i][j])
                }

                // Validar coluna
                if(colSets[j].has(board[i][j])){
                    return false
                } else {
                    colSets[j].add(board[i][j])
                }                

                // Validar square
                if(squareSets[Math.floor(i / 3)][Math.floor(j / 3)].has(board[i][j])){
                    return false
                } else {
                    squareSets[Math.floor(i / 3)][Math.floor(j / 3)].add(board[i][j])
                }
            }
        }

        return true
    }
}
