/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    n = grid.length;
    m = grid[0].length;
    visited = Array(m).fill().map(() => []);
    count = 0
    for (let i=0; i < n; i++) {
        for (let j=0; j < m; j++) {
            if(!visited[i][j]){
                dfs(grid, i, j)
                count++
            }
        }
    }
    return count
};

let dr = [0, 1, 0, -1];
let dc = [1, 0, -1, 0];

var dfs = function (grid, r, c) {
    visited[r][c] = true;
    for (let k = 0; k < 4; k++) {
        let i = r + dr[k];
        let j = c + dc[k];
        if (i >= 0 && i < n && j >= 0 && j < m && !visited[i][j] && grid[i][j] == "1") {
            dfs(grid, i, j);
        }
    }
}


let grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]]

numIslands(grid)