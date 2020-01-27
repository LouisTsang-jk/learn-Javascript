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