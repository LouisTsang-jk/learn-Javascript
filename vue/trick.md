# 判断是否有点击到某个元素
```
created () {
  document.addEventListener('click', event => {
    const e = event || window.event
    if (!this.$refs.temp.contains(e.target)) {
      console.log(`It's not in target element area`)
    } else {
      console.log(`It's in target element area`)
    }
  })
}
```
后来看了下`element`的`popover`实现方式也大致如此，此外`popover`也能通过`doClose`实现关闭，今天发现`v-model`有时候不生效，不知道是版本太久的问题还是什么。   
另外`contains`这种API也十分少用，之后也要总结一下，还是比较实用的。

# 判断是否为VNode
```
export function isVNode(node) {
  return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions');
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
};
```