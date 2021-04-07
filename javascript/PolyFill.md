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

## flat
```
const arr = [1, 2, 3, [4, 5, 6, [7, [8]]]]
Array.prototype._flat = function (depth) {
  return this.reduce((acc, cur) => {
    if (depth === 0) {
      return [...acc, cur]
    }
    if (cur instanceof Array) {
      return [...acc, ...cur._flat(--depth)]
    } else {
      return [...acc, cur]
    }
  }, [])
}
arr._flat(2)
```

## Promise
<!-- TODO -->