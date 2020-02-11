# 盒模型(Box model)
每个盒子有四个边界：
1. 内容边界 Content Edge
> 如果box-sizing:`content-box`，则内容区域的大小可明确地通过`width`、`min-width`、`max-width`、`height`、`min-height`和`max-height`控制
2. 内边距边界 Padding Edge
3. 边框边界 Border Edge
4. 外边框边界 Margin Edge
![box model](https://mdn.mozillademos.org/files/8685/boxmodel-(3).png) 

*除可替换元素外，对于内行元素来说，尽管内容周围存在内边距与边框，但占用空间(每一行文字的高度)由`line-height`属性决定*

## box-sizing
`box-sizing`属性定义了`user agent`应该如何计算一个元素的总宽度和总高度。
+ content-box(默认值-标准盒子模型)
任何边框和内边距都会被增加到最后绘制出来的元素宽度中。
+ border-box(Quirks模式IE使用的盒模型)
设置的边框和内边距的值是包含在width内的。即content的值是width - (border + padding)  
*`border-box`不包含`margin`*