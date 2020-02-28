# RegExp
 *https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions*

获取正则的捕获组
使用全局/.../g的时候不出现捕获组
// todo 
test和exec会影响reg的lastIndex
获取捕获组$1的时候需要加引号->‘$1’

## 符号
### 括号()
表示提取的内容
### 中括号[]
表示匹配的内容
### 大括号{}
表示匹配的长度

# demo
#### 匹配括号内容
```
const str = `this is (param1).And this is the (params2).Normal test text`;
const reg2 = /\[.+?\]/g // 会把括号匹配进内
const reg3 = /(?<=\()[^\(\)]+(?=\))/g // 完美 
```
在面对前面的字符不想包括在匹配中的话可以使用后行断言?<=
在面对后面的字符不想包括在匹配中的话可以使用断言?=
断言并不会将加入匹配内

## (?:pattern)
非获取匹配，匹配`pattern`，但是不获取匹配结果
## (?=pattern)
非获取匹配，正向肯定预查