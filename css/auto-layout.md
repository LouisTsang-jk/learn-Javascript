css
```
ul {
  padding: 0; margin: 0;
  list-style-type: none;
  width: 240px;
  height: 240px;
  background-color: #eee;
  overflow: scroll;
  display: flex;
}
li {
  display: inline-block;
  background: red;
  background-size: 100%;
  outline: 1px solid #fff;
  border-radius: 30px;
  width: 33.3%;
  height: 100%;
  flex-shrink: 0;
}
/* 1个 */
li:only-child {
  height: 100%;width: 100%;
}
/* 2个 */
li:first-child:nth-last-child(2),
li:first-child:nth-last-child(2) + li {
  width: 50%; height: 100%;
}
li:first-child:nth-last-child(2) + li {
  margin-left: auto;
}
/* 3个 */
li:first-child:nth-last-child(3),
li:first-child:nth-last-child(3) ~ li {
  width: 33.3%; height: 100%;
}
li:first-child:nth-last-child(3) {
  margin: auto;
}
li:first-child:nth-last-child(3) ~ li {
  float: left;
}
/* 4个 */
li:first-child:nth-last-child(4),
li:first-child:nth-last-child(4) ~ li {
  width: 50%; height: 100%;
  flex-shrink: 0;
}

```
html
```
<h4>1个头像</h4>
<ul><li></li></ul>
<h4>2个头像</h4>
<ul><li></li><li></li></ul>
<h4>3个头像</h4>
<ul><li></li><li></li><li></li></ul>
<h4>4个头像</h4>
<ul><li></li><li></li><li></li><li></li></ul>
<h4>5个头像</h4>
<ul><li></li><li></li><li></li><li></li><li></li></ul>
```