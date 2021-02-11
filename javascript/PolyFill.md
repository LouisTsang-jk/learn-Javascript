# Polyfill
## scrollTo
```
Element.prototype.scrollTo = function (x, y) {
    if (x) {
      this.scrollTop = x;
    }
    if (y) {
      this.scrollLeft = y;
    }
}
document.documentElement.scrollTo(100);
```

## call
```
Function.prototype.xcall = function (context, ...arg) {
  const fn = Symbol('temp');
  context[fn] = this;
  context[fn](...arg);
  delete context[fn];
}
```
## apply
```
Function.prototype.yapply = function () {
  const fn = Symbol('temp');
  context[fn] = this;
  context[fn](...arg);
  delete context[fn];
}
```

## bind
```
Function.prototype.zbind = function (context, ...firstarg) {
  const _this = this;
  const bindFn = function (...secondarg) {
    return _this.
  }
}
```

## Promise
<!-- TODO -->