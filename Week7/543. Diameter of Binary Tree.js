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
var diameterOfBinaryTree = function(root) {
    sum = 0
    dfs(root); 
    return sum
};

var dfs = function(root){
    if(root == null) return 0
    let maxLeft = dfs(root.left)
    let maxRight = dfs(root.right)
    sum = Math.max(sum, maxLeft + maxRight)
    return Math.max(maxLeft, maxRight) + 1
}