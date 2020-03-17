# 二叉搜索树的第k大节点
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
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    let result = [];
    (function LDR(tree){
        if(!tree) return;
        LDR(tree.right);
        result.push(tree.val);
        LDR(tree.left);
    })(root)
    return result[k - 1];
};
```