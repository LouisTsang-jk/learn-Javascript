# Attribute
是HTML标签上面的特性，值只能是字符串  
如：
+ `id`
+ `class`
+ `title`
# Property
是DOM的属性，就JavaScript的对象
+ `childNodes`
+ `firstChild`

# 操作
## Attribute
+ `getAttribute`
+ `setAttribute`

## `Property`
+ 直接用`.`赋值，本质就是JavaScirpt对象
# 注意
1. 在`property`中可以找到`attributes`，所以`attributes`是属于`property`的一个子集。
2. `property`能够从`attribute`中得到同步
3. `attribute`不会同步`property`上的值
4. 更改两者中任意值，都能更新反映到HTML页面中

// TODO 待实际运行

[What is the difference between properties and attributes in HTML?
](https://stackoverflow.com/questions/6003819/what-is-the-difference-between-properties-and-attributes-in-html#answer-6004028)
[JS中attribute和property的区别](cnblogs.com/lmjZone/p/8760232.html)