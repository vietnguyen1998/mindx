


class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        // root of a binary search tree
        this.root = null;
    }
    insert(data) {
        var newNode = new TreeNode(data);

        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }

        else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }

    preorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
}

var trimBST = function (root, low, high) {
    if (root == null) {
        return null;
    }
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
    if (root.val < low) {
        return root.right;
    }
    if (root.val > high) {
        return root.left;
    }
    return root;
};

let bst = new BinarySearchTree();
bst.insert(3)
bst.insert(0)
bst.insert(4)
bst.insert(null)
bst.insert(2)
bst.insert(null)
bst.insert(null)
bst.insert(1)
bst.preorder(bst.root)
// let b = trimBST(bst.root, 1, 3)
// console.log(bst)