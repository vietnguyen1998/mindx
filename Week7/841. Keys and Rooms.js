/**
 * @param {number[][]} rooms
 * @return {boolean}
 * time O(n+m)
 * space O(n)
 */
var canVisitAllRooms = function(rooms) {
    visited = []
    for(let i =0;i<rooms.length;i++){
        if(!visited[i]) {
            dfs(rooms, i)
            break;
        }
    }
    return visited.length == rooms.length
};

var dfs = function(rooms, i){
    visited[i] = true
    for(const item of rooms[i]){
        if(!visited[item]){
            dfs(rooms, item)
        }
    }
}

let  rooms = [[1,3],[3,0,1],[2],[0]]
canVisitAllRooms(rooms)