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

- - - - 
update time: 2021-2-11 11:11:11
# CSS盒模型
完整的 CSS 盒模型应用于块级盒子，内联盒子只使用盒模型中定义的部分内容。模型定义了盒的每个部分 —— margin, border, padding, and content —— 合在一起就可以创建我们在页面上看到的内容。为了增加一些额外的复杂性，有一个标准的和替代（IE）的盒模型。   
`块级模型`：
- Content box:
这个区域是用来显示内容，大小可以通过设置 width 和 height。
- Padding box:
包围在内容区域外部的空白区域； 大小通过 padding 相关属性设置。
- Border box:
边框盒包裹内容和内边距。大小通过 border 相关属性设置。
- Margin box:
这是最外面的区域，是盒子和其他元素之间的空白区域。大小通过 margin 相关属性设置。

## 标准盒模型
在标准模型中，如果你给盒设置 `width` 和 `height`，实际设置的是`content box`。 `padding` 和 `border` 再加上设置的宽高一起决定整个盒子的大小。
## 替代(IE)盒模型
默认浏览器会使用标准模型。如果需要使用替代模型，您可以通过为其设置 box-sizing: border-box 来实现。 这样就可以告诉浏览器使用 border-box 来定义区域，从而设定您想要的大小。

## 外边距折叠(margin collapse)
理解外边距的一个关键是外边距折叠的概念。如果你有两个外边距相接的元素，这些外边距将合并为一个外边距，即最大的单个外边距的大小。这种行为只会发生在垂直方向。
### 避免坍塌
- 不是block元素
- 有padding或者border
- 设置position:absolute
> 规避技巧：给父元素添加padding: 0.05px;

# 参考
(盒模型-MDN)[https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model#%E4%BB%80%E4%B9%88%E6%98%AFcss_%E7%9B%92%E6%A8%A1%E5%9E%8B]
(为什么margin只会上下溢出/重叠而不会左右溢出/重叠?)[https://www.zhihu.com/question/442096581/answer/1707288787?utm_source=wechat_session&utm_medium=social&utm_oi=909824170932719616&utm_content=group2_Answer&utm_campaign=shareopn]