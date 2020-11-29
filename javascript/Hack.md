# 修改原生的API
```
const originConsole = console;
console.log = function (...args) {
    originConsole.info.apply(this, args.map(e => `<-${e}->`));
}
```