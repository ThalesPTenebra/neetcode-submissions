class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const set = new Set()

        for(let k = 0; k < 9; k = k + 3){
            for(let l = 0; l < 9; l = l + 3){
                for(let i = k; i < k + 3; i++){
                    for(let j = l; j < l + 3; j++){
                        if(board[i][j] === ".") continue
                        if(set.has(board[i][j])){
                            return false
                        }
                        set.add(board[i][j])
                    }
                }
                set.clear()
            }
        }

        set.clear()
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board.length; j++){
                if(board[i][j] === ".") continue
                if(set.has(board[i][j])){
                    return false
                }
                set.add(board[i][j])
            }
            set.clear()            
        }

        set.clear()
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board.length; j++){
                if(board[j][i] === ".") continue
                if(set.has(board[j][i])){
                    return false
                }
                set.add(board[j][i])
            }
            set.clear()            
        }

        return true
    }
}
