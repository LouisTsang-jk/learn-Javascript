# BFC(Block formatting context)
块格式化上下文

## 触发方式
+ float的值不为`none`   
+ overflow的值为`auto`、`scroll`或`hidden`  
+ display的值为`table-cell`、`table-caption`、`inline-block`中的任何一个  
+ position的值不为`relative`和`static`

# IFC(Inline Formatting Contexts)
内联格式化上下文   
> 块级元素中仅包含内联级别元素，当IFC中有块级元素插入时，会产生两个匿名块将父元素分割开来，产生两个IFC。
## 渲染规则
- 子元素横向排列
- 子元素只会计算横向样式空间(padding + border + margin)，垂直方向样式空间不会被计算
- 垂直方向上，子元素会以不同形式来对其(vertical-align)

# 参考
[](https://juejin.im/post/5ea45801e51d4546d4399055?utm_source=gold_browser_extension#heading-15)