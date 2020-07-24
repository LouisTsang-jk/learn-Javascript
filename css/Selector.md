# Selector
选择器
## 常规选择器
正则、匹配开头/结尾
1. [attr]
匹配属性名为`attr`的元素
2. [attr=value]
匹配属性`attr`为`value`的元素
3. [attr~=value]
匹配属性`attr`为**空格分隔**的单词列表，`value`是其中一个
4. [attr|=value]
匹配属性`attr`为`value`或者`value-[any]`的元素
5. [attr^=value]
匹配属性`attr`为`value`或者`value[any]`的元素
6. [attr$=value]
7. [attr*=value]
8. [attr operator value i]
9. [attr operator value s]
## CSS level 4 (Stage 1)
### Validity pseudo-class
+ `:invalid`
+ `:valid`
表示任意内容未通过验证的`<input>`   
`CSS PART`
```
input:invalid {
  background-color: red;
}
input:valid {
  background-color: green;
}
```
`HTML`
```
<form>
  <input type="url" id="url_input" />
</form>
```

### Attribute case-sensitivity
+ [attribute='value' i]
+ [attribute='value' s]

### Blank pseudo-class
+ `:blank()`

### Structural pseudo-class
+ `:nth-child()`

### Dir pseudo-class
+ `:dir(ltr)`

### Hyperlink pseudo-class
+ `:any-link`

### Lang pseudo-class
+ `:lang(en-*)`

### Local link pseudo-class
+ `:local-link`

### Matches-any pseudo-class
+ `is(s1, s2, ...)`

### Specificity-adjustment pseudo-class
+ `where(s1, s2, ...)`

### Mutability pseudo-class
+ `read-only`
+ `read-write`

### Negation pseudo-class
+ `not(s1, s2, ...)`

### Optionality pseudo-class
+ `:required`
+ `:optional`

### Placeholder pseudo-class
+ `:placeholder-shown`

### Indeterminate-value pseudo-class
+ `:indeterminate`

### Validity pseudo-class
+ `:valid`
+ `:invalid`

### User-interaction pseudo-class
+ `:user-invalid`

### Relational pseudo-class
+ `:has`

### Scope pseudo-class
+ `:scope`

### Range pseudo-class
+ `:in-range`
+ `:out-of-range`

### Grid-Structural pseudo-class
+ `:nth-col(n)`
+ `:nth-last-col(n)`

### Time-dimensional pseudo-class
+ `:current`
+ `:past`
+ `:future`

### Default option pseudo-class
+ `:default`

### Focus container pseudo-class
+ `:focus-within`

### Focus indicated pseudo-class
+ `:focus-visible`

### Target container pseudo-class
+ `:target-within`

### Column combination
+ `E || F`