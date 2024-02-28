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
var sumOfLeftLeaves = function (root) {
    sum = 0;
    dfs(root, null)
    return sum;
};

var dfs = function (root, bLeft) {
    if (root == null) return null;
    if (root.left == null && root.right == null && bLeft) 
        sum += root.val
    root.left = dfs(root.left, true)
    root.right = dfs(root.right, false)
}