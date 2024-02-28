class TreeNode {
    constructor(data) {
        this.val = data;
        this.left = null;
        this.right = null;
    }
}

var map = new Map();

var findFrequentTreeSum = function (root) {
    dfs(root)
    console.log(map)
    const max = Math.max(...map.values());
    let result = []
    map.forEach((value, key, map) => {
        if (value == max) result.push(key)
    })
    return result;
};

var dfs = function (root) {
    if (root == null) return null
    let sum = sumChild(root)
    map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1);
    root.left = dfs(root.left)
    root.right = dfs(root.right)
    return
}

var sumChild = function (root) {
    let val = 0;
    if (root == null)
        return 0
    val = root.val + sumChild(root.left) + sumChild(root.right)
    return val
}

var bst = new TreeNode(5);
bst.left = new TreeNode(2)
bst.right = new TreeNode(-3)

findFrequentTreeSum(bst)
''