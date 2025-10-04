/**
 * @param {number} n
 * @return {string[][]}
 */
function isSafe(board, row, col,n){
    //column-check
    for(let i=0;i<n;i++){
        if(board[i][col] == "Q"){
            return false;
        }
    }
    // left diagonal
    for(let i=row-1,j=col-1;i>=0 && j>=0;i--, j--){
        if(board[i][j] == "Q"){
            return false;
        }
    }
    // right diagonal
    for(let i=row-1,j=col+1;i>=0 && j<n;i--, j++){
        if(board[i][j] == "Q"){
            return false;
        }
    }
    return true;
}

function helper(board, row, col,n, ans){
    if(row == n){
        ans.push(board.map((row)=>row.join("")))
        return true;
    }
    for(let col=0;col<n;col++){
        if(isSafe(board,row,col,n)){
            board[row][col] = "Q";
            helper(board, row+1, col,n, ans);
            board[row][col] = ".";
        }
    }
    return false;
}

var solveNQueens = function(n) {
    const board = Array.from({length:n},()=> Array(n).fill("."));
    let ans = [];
    helper(board,0,0,n,ans);
    return ans;
};
