var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++){
        const usedInRow = new Set()
        const usedInCollumn = new Set()
        for (let j = 0; j < 9; j++){
            if (board[i][j] != '.'){
                if (usedInRow.has(board[i][j]))
                    return false
                usedInRow.add(board[i][j])
            }
            if (board[j][i] != '.'){
                if (usedInCollumn.has(board[j][i]))
                    return false
                usedInCollumn.add(board[j][i])
            }
        }
    }
    for (let blockI = 0; blockI < 3; blockI++){
        for (let blockJ = 0; blockJ < 3; blockJ++){
            const usedInBlock = new Set()
            for (let i = blockI * 3; i < blockI * 3 + 3; i++){
                for (let j = blockJ * 3; j < blockJ * 3 + 3; j++){
                    if (board[i][j] == '.')
                        continue
                    if (usedInBlock.has(board[i][j]))
                        return false
                    usedInBlock.add(board[i][j])
                }
            }

        }
    }
    return true
};