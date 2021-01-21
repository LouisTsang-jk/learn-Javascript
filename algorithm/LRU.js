class DoubleNode {
  constructor (key, value) {
    this.next = null;
    this.prev = null;
    this.key = key;
    this.value = value;
  }
}
class LRU {
  constructor (capacity) {
    this.capacity = capacity;
    this.hashmap = {};
    this.dummyHead = new DoubleNode(null, null);
    this.dummyTail = new DoubleNode(null, null);
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }
  insertAfter (target, node) {
    const nextNode = target.next;
    target.next = node;
    if (nextNode) {
      nextNode.prev = node;
    }
    node.prev = target;
    node.next = nextNode;
    return node;
  }
  removeNode (node) {
    const nextNode = node.next;
    const prevNode = node.prev;
    console.log('remove:node:', node);
    if (nextNode) {
      console.log('point A');
      nextNode.prev = prevNode;
    }
    if (prevNode) {
      console.log('point B');
      prevNode.next = nextNode;
    }
  }
  get (key) {
    const node = this.hashmap[key]
    if (node) {
      this.removeNode(node);
      this.insertAfter(this.dummyHead, node);
    }
    return node ? node.value : -1;
  }
  put (key, value) {
    if (Object.keys(this.hashmap).length === this.capacity && !this.hashmap.hasOwnProperty(key)) {
      // oversize
      const overNode = this.dummyTail.prev;
      this.removeNode(overNode);
      delete this.hashmap[overNode.key];
    }
    const target = new DoubleNode(key, value);
    if (this.hasOwnProperty(key)) {
      
    } else {

    }
    this.insertAfter(this.dummyHead, target);
    this.hashmap[key] = target;
  }
}

const t1 = new LRU(2);
// t1.put(1, 1);
// t1.put(2, 2);
// t1.get(1);
// t1.put(3, 3);
// t1.get(2); // -> -1

// const arr = [];
// arr.push(t1.get(2));
// arr.push(t1.put(2, 6));
// arr.push(t1.get(1));
// arr.push(t1.put(1, 5));
// arr.push(t1.put(1, 2));
// arr.push(t1.get(1));
// arr.push(t1.get(2));

const arr = [];
arr.push(t1.put(2, 1));
arr.push(t1.put(1, 1));
arr.push(t1.put(2, 3));
arr.push(t1.put(4, 1));
arr.push(t1.get(1));
arr.push(t1.get(2));