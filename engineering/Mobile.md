# 关于移动端前端需要注意的问题
## all
1. 键盘
2. 弹出层层级问题
3. 适配

## ios
1. 弹出层穿透问题
2. 无法兼容后行断言的正则表达式
3. 父元素使用transform，子元素使用position:fixed，bottom会错乱

## android
1. 使用bottom进行绝对定位元素与软键盘问题

## document.hidden
判断浏览器是否处于可是状态，同时可以监听事件`visibilitychange`。
该事件可以检测浏览器标签页是否处于展示状态或者隐藏状态。
```
document.addEventListener("visibilitychange", function() {
  console.log( document.visibilityState );
});
```