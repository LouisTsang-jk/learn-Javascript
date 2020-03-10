// 链表节点
function LinkNode(value,next = null){
  this.val = value;
  this.next = next;
}

// 链表
function Link(){
  let list = [...arguments];
  let link = new LinkNode(list.shift());
  let head = link;
  while(list.length){
      link.next = new LinkNode(list.shift());
      link = link.next;
  }
  return head;
}

// 反转单向链表
function reverseLink(head){
  let prev = null,
      current = head,
      next = head;
  while(next){
    next = next.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}
// const result = reverseLink(new Link(1,2,3,4,5));
// console.log(result);
