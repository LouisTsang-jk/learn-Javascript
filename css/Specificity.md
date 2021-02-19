# CSS权重(Specificity)
表示css selector和其元素的相关性。相关性越强，表示权重越高。   

当同一个元素有多个声明的时候，优先级才会有意义。因为每一个直接作用于元素的 CSS 规则总是会接管/覆盖（take over）该元素从祖先元素继承而来的规则。
# 选择器类型
1. 类型选择器(`h1`)和伪元素(`::before`)
2. 类选择器(`.example`)，属性选择器(`[type="radio"]`)和伪类(`:hover`)
3. ID选择器(`#example`)
> 通配选择符（universal selector）（*）关系选择符（combinators）（+, >, ~, ' ', ||）和 否定伪类（negation pseudo-class）（:not()）对优先级没有影响。（但是，在 :not() 内部声明的选择器会影响优先级）。

> `给元素添加的内联样式 (例如，style="font-weight:bold") 总会覆盖外部样式表的任何样式 ，因此可看作是具有最高的优先级。`

# !important 例外规则
当在一个样式声明中使用一个 !important 规则时，此声明将覆盖任何其他声明。虽然，从技术上讲，!important 与优先级无关，但它与最终的结果直接相关。使用 !important 是一个坏习惯，应该尽量避免，因为这破坏了样式表中的固有的级联规则 使得调试找bug变得更加困难了。当两条相互冲突的带有 !important 规则的声明被应用到相同的元素上时，拥有更大优先级的声明将会被采用。

# 参考
[W3C](https://www.w3.org/TR/CSS2/cascade.html#specificity)