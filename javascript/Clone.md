# Clone

## ShallowClone浅克隆
1. Object.assign

## DeepClone深克隆
1. JSON.parse(JSON.stringify(obj));
优点：
+ 简单
缺点：
+ 引用类型
+ 拷贝函数
+ 循环引用
+ 空值
2. 递归遍历
每一层都进行遍历，基础类型就直接复制，引用类型就继续往里面遍历。  
+ 可以使用WeakMap避免循环引用的问题。
+ `function`和`null`要特殊处理，这两个应该直接赋值
+ 数据类型分类
> ->可继续遍历(Array,Object,Map,Set)
> ->可不继续遍历(String,Number,Boolean...)
+ `function`要通过prototype判断是否是箭头函数


[克隆](https://segmentfault.com/a/1190000020255831)