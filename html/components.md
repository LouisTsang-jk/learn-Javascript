# Components
允许创建可复用的定制元素
## Custom element(定制化元素)
- Custom element「自定义元素」
允许定义`custom elements`及其行为，在需要的地方使用
- Shadow DOM「影子DOM」
TODO没搞懂…
保持元素的功能私有，不用担心与文档其他部分发生冲突。
- HTML templates「HTML模版」
`<template>`和`<slot>`元素使您可以编写不在页面呈现的标记模版。然后可以作为自定义元素结构的基础被多次重用。

## 使用方法
1. 创建一个类或函数来指定web组件的功能
2. 使用`CustomElementRegistry.defin()`注册新自定义元素，并向其传递要定义的元素名称、指定元素功能的类、及其可继承的元素
3. 如果需要的话，使用`Element.attachShadow()`方法将一个shadow DOM附加到自定义元素上。使用通常的DOM方法向shadow DOM中添加子元素、事件监听器等等。
4. 如果需要的话，使用`template`和`slot`定义一个HTML模版。

## custom elements
- `CUstomElementRegistry`用来处理web文档中的custom elements，允许注册注册一个custom element，返回已注册custom elemtn的信息。
- `CustomElementRegistry.define()`
注册`custom element`，接受参数如下：  
  1. 「字符串」
  表示所创建的元素名称符合`DOMString`标准的字符串，**`custom element`的名称不能是单个单词，且其中必须有横短线。**
  2. 「类」
  用于定义元素行为的类
  3. 「对象」(可选参数)
  包含`extends`属性的配置对象，是可选参数。指定所创建的元素继承自哪个内置元素，可以继承任何内置元素。
示例：   
```
customElements.define('word-count', WordCount, { extends: 'p' });
```
这段代码表示这个元素叫`word-count`，它的类对象`WordCount`，继承自`<p>`元素。    
```
class WordCount extends HTMLParagraphElement {
  constructor() {
    // 必须首先调用 super 方法
    super();
    // 元素的功能代码
  }
}
```

# 参考
()[]