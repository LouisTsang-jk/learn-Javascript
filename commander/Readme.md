# Commander.js
## 安装
```
npm i commander -D
```

## 声明
1. 全局对象
```
const { program } = require('commander');

```
2. 创建`Command`对象
```
const { Command } = require('commander');
const program = new Command();
```
---
## 选项
`Commander`使用`.option()`方法定义选项，同时可以添加选项的简介。   
选项可以通过`Commander`对象的同名属性获取，对于多个单词个长选项，使用驼峰获取。
### boolean型选项&带参数选项
带参数选项需要通过`<arg>`设置参数。
```
program
 .option('-d, --debug', 'output extra debugging')
 .option('-s, --small', 'small pizza size')
 .option('-p, --pizza-type <type>', 'flavour of pizza'); // 带参数


program.parse(process.argv);

if (program.debug) console.log(program.opts());
console.log('pizza details:');
if (program.small) console.log('- small pizza size');
if (program.pizzaType) console.log(`- ${program.pizzaType}`);
```
> 通过`program.parse(args)`方法处理参数。
### 选项的默认值
```
program
  .option('-c, --cheese <type>', 'add the specified type of cheese', 'blue');
```
### 取反选项
