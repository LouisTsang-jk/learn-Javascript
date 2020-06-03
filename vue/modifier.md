# 修饰符「Modifier」
## `.sync`
针对一个prop进行**双向绑定**。
```
this.$emit('updata:title', newTitle);
```
父组件监听事件并根据需要更新一个本地的数据属性。
```
<text-document
  v-bind:title="doc.title"
  v-on:update:title="doc.title = $event"
></text-document>
```
语法糖
```
<text-document v-bind:title.sync="doc.title"></text-document></text-document>>
```