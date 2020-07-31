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