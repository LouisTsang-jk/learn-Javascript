# 遍历DOM
HTML
```
<div  id="box">
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ul>
</div>
```
JavaScript
```
const box = document.getElementById('box');
const iterator = document.createNodeIterator(box,NodeFilter.SHOW_ELEMENT,null,false);
const node = iterator.nextNode();
while (node !== null) { alert(node.tagName);
node = iterator.nextNode();
}
```
# 通过字符串生成DOM
`DOMParser`可以让HTML字符串解析为DOM树
```
const parser = new DOMParser();
const dom = parser.parseFromString(String, mimeType);
```
- String
DOMString
- mimeType

|  MimeType   | ResponseType  |
|  ----  | ----  |
| text/html  | Document |
| text/xml  | XMLDocument |
| application/xml  | XMLDocument |
| application/xhtml+xml  | XMLDocument |
| image/svg+xml  | XMLDocument |
# DOM转字符串
`XMLSerializer`可以让DOM序列化为字符串
```
const xmlSerializer = new XMLSerializer();
const string = xmlSerializer.serializeToString(rootNode);
```