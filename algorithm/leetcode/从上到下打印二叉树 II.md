# 从上到下打印二叉树 II
```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let queue = [root];
    let result = [];
    let level = 0;
    while (queue.length) {
        result[level] = [];
        let size = queue.length;
        while (size--) {
            const node = queue.shift();
            result[level].push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        level++;
    }
    return result;
};
```