# Less(Leaner Style Sheets)
Css预编译器
## 变量(Variables)
```
@width: 10px;
@height: @width + 10px;
#header {
  width: @width;
  height: @height;
}
```
变量也能是依靠其他变量进行计算的值
## 混合(Mixins)
将一组属性从一个规则集包含（或混入）到另一个规则集的方法  
```
.bordered {
  border-top: 1px dotted #000;
  border-bottom: 1px solid #000;
}

#menu a {
  color: #000;
  .bordered();
}
```
## 嵌套(Nesting)
嵌套代替层叠和层叠结合，让样式看起来更有结构性
```
#header {
  color: red;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```
其中`&`代表当前选择器的父级
## 运算(Operations)

## 转义(Escaping)

## 函数(Functions)

## 命名空间和访问符

## 映射(Maps)

## 作用域(Scope)

## 注释(Comments)

## 导入(Importing)