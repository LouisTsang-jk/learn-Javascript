function TreeNode(key) {
  this.key = key;
  this.left = null;
  this.right = null;
}

// DLR(前序遍历)、 [3,9,20,15,7]
// LDR(中序遍历)、 [9,3,15,20,7] 
// LRD(后序遍历)
// Binary Search Tree
function BinarySearchTree({ DLR, LDR, LRD }) {
  // 必须有中序
  if (!LDR) {
    throw Error('LDR must exist');
  }
  // 前序，中序必须有一个
  if (DLR || LRD) {
    throw Error('DLR and LRD must have one');
  }

}