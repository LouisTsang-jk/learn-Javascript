# String.prototype.replace
replace() 方法返回一个由替换值（replacement）替换一些或所有匹配的模式（pattern）后的新字符串。模式可以是一个字符串或者一个正则表达式，****`替换值可以是一个字符串或者一个每次匹配都要调用的回调函数`****，且原字符串不回改变。
# 参数
```
str.replace(regexp|substr, newSubStr|function)
```
- regexp(pattern)
`RegExp`对象或其字面量。其匹配内容会被第二个参数的返回值替换掉。
- substr(pattern)
将被`newSubStr`替换的字符串。**仅第一个匹配项会被替换。**
- newSubStr(replacement)
用于替换掉第一个参数在原字符串中的匹配部分的字符串。该字符串可以内插一些特殊的变量名。
