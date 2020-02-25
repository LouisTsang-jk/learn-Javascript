# 链表中倒数第k个节点
```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    let p1 = head, p2 = head;
    while (p1) {
        if (k !== 0) {
            k -= 1;
        } else {
            p2 = p2.next;
        }
        p1 = p1.next;
    }
    return p2;
};
```
定义两个指针