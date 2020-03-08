# 声明(declare)
|语法|意义|
-|-|
|`declare var`|声明全局变量|
|`declare function`|声明全局方法|
|`declare class`|声明全局类|
|`declare enum`|声明全局枚举类型|
|`declare namespace`|声明(含有子属性)全局变量|
|`interface` & `type`|声明全局类型|
|`export`|导出变量|
|`export namespace`|导出(含有子属性的)对象|
|`export default`|ES6默认导出|
|`export =`|commonjs导出模块|
|`export as namespace`|UMD库声明全局变量|
|`declare global`|扩展全局变量|
|`declare module`|扩展模块|
|`/// <reference />`|三斜线指令|

## 用途
引入第三方库，如jQuery
```
$('#foo')
jQuery('#foo')
```
在TypeScript中会报错，这时候需要使用声明。
```
declare var jQuery: (selector: string) => any;
jQuery('#foo');
```
`declare var`并没有真正声明一个变量，只是定义全局变量`jQuery`的类型，编译结果中会被删除
## 声明文件*
一般会把声明语句放到一个单独的文件(`jQuery.d.ts`)中，如
```
// src/jQuery.d.ts
declare var jQuery: (selector: string) => any;
```