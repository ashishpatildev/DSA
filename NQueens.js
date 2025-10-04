/**
 * @param {number} n
 * @return {string[][]}
 */
function isSafe(board, row, col, n) {
    //colcheck
    for (let i = 0; i < row; i++) {
        if (board[i][col] == "Q") {
            return false;
        }
    }
    //leftdiagonal
    for (let i = row-1, j = col-1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] == "Q") {
            return false;
        }
    }

    //rightdiagonal
    for (let i = row-1, j = col+1; i >= 0 && j < n; i--, j++) {
        if (board[i][j] == "Q") {
            return false;
        }
    }
    return true;
}

function nQueenSolver(board, row, n, ans) {
    if (row == n) {
        ans.push(board.map(r => r.join("")));
        return true;
    }
    for (let i = 0; i < n; i++) {
        if (isSafe(board, row, i, n)) {
            board[row][i] = "Q";
            nQueenSolver(board, row + 1, n, ans);
            board[row][i] = "."
        }
    }
    return false;
}

function solveNQueens(n) {
    let ans = [];
    const board = Array.from({ length: n }, () => Array(n).fill("."));
    nQueenSolver(board, 0, n, ans)
    return ans;
}
