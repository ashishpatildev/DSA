const getanswers = (maze, row, col, path, ans, visited) => {
    const n = maze.length;
    if(row < 0 || col < 0 || row >= n || col >= n || maze[row][col] == 0 || visited[row][col]){
        return
    };
    
    if(row == n-1 && col == n-1){
        console.log("solution found");
        ans.push(path)
        return;
    };

    // Mark as visited
    visited[row][col] = true;

    //down call
    getanswers(maze,row+1,col,path+"D",ans, visited);
    //up call
    getanswers(maze,row-1,col,path+"U",ans, visited);
    //left call
    getanswers(maze,row,col-1,path+"L",ans, visited);
    //right call
    getanswers(maze,row,col+1,path+"R",ans, visited);

    // Backtrack
    visited[row][col] = false;
}

const solveMaze = (maze) => {
    let path = "";
    const n = maze[0].length;
    const visited = Array.from({length:n},()=> Array(n).fill(false));
    const ans = [];
    if (maze[0][0] === 0) {
        console.log("Start blocked.");
        return;
    }
    getanswers(maze,0,0,path,ans,visited);
    console.log(ans)
}


const arr = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1]
]

solveMaze(arr);
