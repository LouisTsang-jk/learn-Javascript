# 2020-10-09
## 求输出
```
var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log(this.foo);
    console.log(self.foo);
    (function () {
      console.log(this.foo);
      console.log(self.foo);
    }());
  }
}
myObject.func();
```
---
## 以下4个选项哪个成立？「不定项」
1. undefined == null
2. isNaN("100")
3. parseInt("1a") === 1
4. [] instanceof Array
---
