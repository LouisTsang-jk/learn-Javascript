# Selector
选择器

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

### []