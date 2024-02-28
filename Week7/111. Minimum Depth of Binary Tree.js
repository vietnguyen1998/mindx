/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    min = null
    dfs(root, 1)
    return min
};

var dfs = function(root, level){
    if(root ==null) return null
    if(root.left == null && root.right == null){
        if(level < min || min == null) min = level
    }
    root.left = dfs(root.left, level + 1)
    root.right = dfs(root.right, level + 1)
}