# 格式
```
<type>(<scope>): <subject>

<body>

<footer>
```
## Header
+ type(必填)

|value|意义|
-|-|
|`feat`|声明全局变量|
|`fix`|声明全局方法|
|`docs`|声明全局方法|
|`style`|声明全局方法|
|`refactor`|声明全局方法|
|`test`|声明全局方法|
|`chore`|声明全局方法|

+ scope(可选)
commit影响范围
+ subject(必填)
简短描述，首字母小写，结尾不需要句号。
## Body
commit详细描述
+ 第一人称
+ 更改动机及对比
## Footer
1. 与上个版本不兼容，以`BRAKING CHANGE`开头。后面是变动内容、动机、迁移方法
2. 关闭Issue
```
Close #000
```
3. 撤销以前的commit，用`revert:`开头，紧接被撤销Commit的Header