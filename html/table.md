# table
`table`类标签的父元素
# caption
表格的标题，一般为table第一个子元素
# col

# colgroup

# thead

# tbody

# tr

# th
## 属性
+ `colspan`
每单元格中扩展列的数量。默认值为`1`，超过`1000`则视为`1000`
+ `headers`
+ `rowspan`
+ `scope`

# td

# tfoot
定义了一组表格中各列的汇总行


<table border="1">
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>Sum</td>
      <td>$180</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
</table>