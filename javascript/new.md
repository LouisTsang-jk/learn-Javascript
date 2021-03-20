# New
## 过程
- 新生成一个空对象
- 将空对象链接到原型中
- 绑定this
- 返回新对象
## 手写
```Sample
function _new (fn, ...args) {
  const temp = {};
  fn.apply(temp, args)
  return temp;
}
```