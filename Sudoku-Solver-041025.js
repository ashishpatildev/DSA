function isSafe(board, row, col, digit){
    //check row
    for(let i=0;i<9;i++){
        if(board[row][i] == digit){
            return false;
        }
    }
    //check column
    for(let i=0;i<9;i++){
        if(board[i][col] == digit){
            return false;
        }
    }
    //check 3*3 grid
    let r = Math.floor(row/3)*3;
    let c = Math.floor(col/3)*3;
    for(let i=r;i<=r+2;i++){
        for(let j=c;j<=c+2;j++){
            if(board[i][j] == digit){
                return false;
            }
        }
    }
    return true;
}

function sudokuSolver(board, row,col){
    if(row == 9){
        return true;
    };
    if(col == 9){
        return sudokuSolver(board, row+1,0);
    }
    //skip filled cells
    if(board[row][col] != "."){
        return sudokuSolver(board, row,col+1);
    }
    for(let i=1;i<=9;i++){
        const digit = String(i);
        if(isSafe(board,row,col,digit)){
            board[row][col] = digit;
            if(sudokuSolver(board, row,col+1)){
                return true;
            };
            board[row][col] = ".";
        }
    }
    return false;
}

var solveSudoku = function(board) {
    sudokuSolver(board,0,0)
};
