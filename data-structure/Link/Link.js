// 链表节点
function LinkNode(value,next = null){
  this.val = value;
  this.next = next;
}

// 链表生成器
// linkGenerator(1,2,3,4)
function linkGenerator(){
  let args = [...arguments];
  let head = cur = new LinkNode(args.shift());
  while(args.length){
    cur.next = new LinkNode(args.shift());
    cur = cur.next;
  }
  return head;
}

// 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList
function printListFromTailToHead(head){
  let result = [];
  while(head){
    result.unshift(head.val);
    head = head.next;
  }
  return result;
}
// const linkList = linkGenerator(1,2,3,4,5);
// const result = printListFromTailToHead(linkList);

// 反转单向链表
function reverseLinkList(head){
  let temp;
}