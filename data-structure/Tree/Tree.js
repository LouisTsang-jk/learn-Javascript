function TreeNode(key) {
  this.key = key;
  this.left = null;
  this.right = null;
}

// DLR(前序遍历)、
// LDR(中序遍历)、
// LRD(后序遍历)

function Tree({ DLR, LDR, LRD }) {
  // 必须有中序
  if (!LDR) {
    throw Error('LDR must exist');
  }
  // 前序，中序必须有一个
  if (DLR || LRD) {
    throw Error('DLR and LRD must have one');
  }

}