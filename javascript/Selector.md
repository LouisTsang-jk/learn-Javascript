# 选择符 API
Selectors API
## Level1
1. querySelector()
接受一个CSS选择符，返回第一个匹配的元素，若无则返回null。
2. querySelectorAll()
返回一个NodeList实例

## Level2
1. matchesSelector()
Element类型的方法，接受一个CSS选择符，如果匹配则返回true
```
if(document.body.matchesSelector("body.page1")){
  // true
}
```

# Element Traversal API
1. childElementCount 
返回元素的子元素个数
2. firstElementChild
返回元素的第一个子元素
3. lastElementChild
返回元素的最后一个子元素
4. previousElementSibling
指向前一个同辈元素
5. nextElementSibling
指向后一个同辈元素