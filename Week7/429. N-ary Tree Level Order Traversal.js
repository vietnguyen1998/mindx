/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
let result = [];
let arr = []
var levelOrder = function (root) {
    result = [];
    traversal(root, 0)
    return result
};

var traversal = function (root, level) {
    if (root == null) return null;
    if (result[level]) result[level].push(root.val)
    else result[level] = [root.val]
    for (let i = 0; i < root.children.length; i++)
        traversal(root.children[i], level + 1)
    return
}