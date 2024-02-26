/**
 * @param {number[][]} isConnected
 * @return {number}
 * time O(n^2)
 * space O(n)
 */
var findCircleNum = function (isConnected) {
    existed = []
    let count = 0
    for (let i = 0; i < isConnected.length; i++) {
        if (!existed[i]) {
            dfs(isConnected, i)
            count++
        }
    }
    return count
};


var dfs = function (isConnected, index) {
    existed[index] = true
    for (let i = 0; i < isConnected[index].length; i++) {
        if (isConnected[index][i] == 1 && !existed[i]) {
            dfs(isConnected, i)
        }
    }
}

var isConnected = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]
findCircleNum(isConnected)