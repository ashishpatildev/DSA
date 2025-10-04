function isSafe(board, row, col, digit){
    // row-check
    for(let i=0;i<9;i++){
        if(board[row][i] == digit){
            return false;
        }
    }
    // col-check
    for(let i=0;i<9;i++){
        if(board[i][col] == digit){
            return false;
        }
    }
    // grid-check
    let r = Math.floor(row / 3) * 3;
    let c = Math.floor(col / 3) * 3;
    for(let i=r;i<=r+2;i++){
        for(let j=c;j<=c+2;j++){
            if(board[i][j] == digit){
                return false;
            }
        }
    }
    return true;
}

function sudokuSolver(board,row, col){
    if(row==9){
        return true;
    }

    let nextrow = row, nextcol = col+1;
    if(nextcol==9){
        nextrow+=1;
        nextcol = 0;
    }

    if(board[row][col] !="."){
        return sudokuSolver(board,nextrow,nextcol);
    }

    for(let i=1;i<=9;i++){
        if(isSafe(board, row, col,i.toString())){
            board[row][col] = i.toString();
            if(sudokuSolver(board, nextrow, nextcol)){
                return true;
            }
            board[row][col]=".";
        }
    }
    return false;
}
var solveSudoku = function(board) {
    sudokuSolver(board,0,0)
};
