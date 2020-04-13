# table
`table`类标签的父元素
## caption
表格的标题，一般为table第一个子元素
## col
定义表格中的列，并用于定义所有公共单元格上的公共语义。它通常位于`<colgroup>`元素内
+ span
## colgroup

## thead
定义一组定义表格的列头的行
## tbody
定义表格主体(正文)
## tr
定义表格中的行
## th
## 属性
+ `colspan`
每单元格中扩展列的数量。默认值为`1`，超过`1000`则视为`1000`
+ `headers`
+ `rowspan`
包含一个正整数表示了每单元格中扩展列的数量，默认值为1
+ `scope`
## td
定义一个包含数据的表格单元格
## tfoot
定义一组表格中各列的汇总行

# Code
<table>
    <caption>支出收入表</caption>
    <tr>
        <th class="header" scope="col">
          <span style="float:left">项目名</span>
          <span style="float:right">时间</span>
        </th>
        <th scope="col">周一</th>
        <th scope="col">周二</th>
        <th scope="col">周三</th>
        <th scope="col">周四</th>
        <th scope="col">周五</th>
    </tr>
    <tr>
        <th scope="row">早餐</th>
        <td>9</td>
        <td>13</td>
        <td>9</td>
        <td>9</td>
        <td>9</td>
    </tr>
    <tr>
        <th scope="row">午饭</th>
        <td>19</td>
        <td>20</td>
        <td>22</td>
        <td>18</td>
        <td>16</td>
    </tr>
    <tr>
        <th scope="row">晚饭</th>
        <td>20</td>
        <td>22</td>
        <td>28</td>
        <td>22</td>
        <td>30</td>
    </tr>
    <tfoot>
      <th>合计</th>
      <td>48</td>
      <td>55</td>
      <td>59</td>
      <td>49</td>
      <td>55</td>
    </tfoot>
</table>
<style>
td,
th {
    border: 1px solid rgb(190, 190, 190);
    padding: 10px;
}
td {
    text-align: center;
}
tr:nth-child(even) {
    background-color: #eee;
}
th[scope="col"] {
    background-color: #696969;
    color: #fff;
}
th[scope="row"] {
    background-color: #d7d9f2;
}
caption {
    padding: 10px;
    caption-side: top;
}
table {
    border-collapse: collapse;
    border: 2px solid rgb(200, 200, 200);
    letter-spacing: 1px;
    font-family: sans-serif;
    font-size: .8rem;
}
.header {
  font-size: 10px;
  padding: 4px;
  height: 30px;
  width: 80px;
  background: linear-gradient(
    to top right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) calc(50% - 1px),
    rgb(190, 190, 190) 50%,
    rgba(0, 0, 0, 0) calc(50% + 1px),
    rgba(0, 0, 0, 0) 100%
  )
}
.header span:first-child {
  position: relative;
  top: 10px;
}
.header span:last-child {
  position: relative;
  top: -10px;
}
</style>