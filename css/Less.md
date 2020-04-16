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
基本四则运算`+`,`-`,`*`,`/`可以对数字、颜色和变量进行运算。(有单位会进行单位换算，最终结果以最左侧为基准)，此外乘法、除法的计算结果没有意义。  
```
@base: 2cm * 3mm; // => 6cm
```
## 转义(Escaping)
允许使用字符串作为属性或变量值。
+ `~"<string>"`
+ `~'<string>'`
```
@min768: ~"(min-width: 768px)";
// @min768: (min-width: 768px); 
// need Less3.5+ version support
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
```
## 函数(Functions)
Less内置函数，一般用于转换颜色、字符串处理、算术运算。
```
@base: #f04615;
@width: 0.5;
.class {
  width: percentage(@width); // 转换百分数=>'50%'
  color: staturate(@base, 5%); // 饱和增加5%
}
```
## 命名空间和访问符
出于组织结构或封装目的，将`混合(mixins)`分组。
```
#bundle() {
  .button {
    display: block;
    border: 1px solid #000;
    background-color: #333;
    &:hover {
      background-color: #666;
    }
  }
}

#header a {
  color: #999;
  #bundle.button();
  // #bundle > .button
}
```
## 映射(Maps)

## 作用域(Scope)

## 注释(Comments)

## 导入(Importing)