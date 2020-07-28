# IE
## ES「support」

## `max-width`和`flex:1`
在ie环境下宽度会错乱，这是一个ie的bug，可以尝试在父元素使用`width: calc(100%);`去解决。
## `Array.from`
可以尝试在控制台输入`Array.from`看看是否有返回`[Native Code]`，有则证明在此环境下可以使用。若无则需要`polyfill`，即使有`babel`也不一定会转换，因为`babel`主要去转换ES6以上的新语法，ES5语法应该用`babel-polyfill`去实现。
## `dispatchEvent`
ie11无法使用`dispatchEvent`
```
if (typeof(Event) === 'function') {
  event = new Event('submit');
} else {
  event = document.createEvent('Event');
  event.initEvent('submit', true, true);
}
```

## `document.scrollingElement`
IE全系不支持
(document.scrollingElement)[https://github.com/mathiasbynens/document.scrollingElement/blob/master/scrollingelement.js]