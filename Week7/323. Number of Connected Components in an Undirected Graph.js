
/**
 * @param {number} n
 * @param {number[][]} edges
 * time O(v + e)
 * space O(v + e)
 */
var countComponents = function (edges, n) {
    let adjList = getAdjacencyList(edges, n)
    let count = 0;
    visited = []
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(adjList, i)
            count++
        }
    }
    return count
}

var dfs = function (adjList, index) {
    visited[index] = true;
    for (const item of adjList[index]) {
        if (!visited[item]) {
            dfs(adjList, item);
        }
    }
}

var getAdjacencyList = function (edges, n) {
    var result = Array(n).fill().map(() => []);
    for (const [n, v] of edges) {
        result[n].push(v);
        result[v].push(n);
    }
    return result;
}


// Driver Code
const v = 5;

const edges = [
    [0, 1],
    [1, 2],
    [3, 4],
];

countComponents(edges, v)