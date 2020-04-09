# box-decoration-break
这个属性也是我比较少用的属性，这次用来处理换行的问题。  
国内好像也没搜到什么靠谱的信息，结果随手google一下就有一遍比较好的文章(详情参见`参考`)
## 定义
参考MDN这句话：
> The box-decoration-break CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
可以知道这个属性是用来处理元素多行跨行、列、页面的时候应该如何渲染。 

|参数|意义|备注|
|-|-|-|
|slice|切片|跨行的时候直接切开|
|clone|克隆|跨行的时候前后使用相同的样式|
|initial|默认|global|
|inherit|继承|global|
|unset|默认&继承|父元素有继承样式则继承，否则默认|
## 影响的样式
+ `background` 
+ `border` 
+ `border-image` 
+ `box-shadow` 
+ `clip-path` 
+ `margin` 
+ `padding` 
## 应用场景
1. 当正常换行的时候，我们会遇到单词被打断的情况，这时候第一行的结果是没有`padding-right`右边距的，同时换行之后也是没有`padding-left`左边距的，在某些场景的时候，如这个单词有特殊样式的时候会显得十分丑，那么这个时候就可以用这个属性处理。
2. 多行渐变，详情参见参考3(张鑫旭博客)
## 用法
```
box-decoration-break: clone;
-webkit-box-decoration-break: clone;
box-shadow: 8px 8px 10px 0 red, -5px -5px 5px 0 green, 5px 5px 15px 0 yellow;
```
*注意前缀-webkit-box*否则chrome上可能不生效。



# 参考
[multi-line-padded-text](https://css-tricks.com/multi-line-padded-text/)
[MDN|box-decoration-break](https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break)
[CSS/CSS3 box-decoration-break属性简介](https://www.zhangxinxu.com/wordpress/2019/01/css-css3-box-decoration-break/)