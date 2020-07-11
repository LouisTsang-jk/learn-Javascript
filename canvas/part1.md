# Canvas
## 绘制图形
`canvas`只支持两种图形绘制的形式。
1. 矩形
  - `fillRect(x, y, width, height)`
  绘制一个填充的矩形
  - `strokeRect(x, y, width, height)`
  绘制一个矩形的边框
  - `clearRect(x, y, width, height)`
  清除指定矩形区域，让清除部分完全透明
> 上述三个函数执行之后会实时绘制到canvas上。
2. 路径(由一系列点连成的线段)
  图形的基本元素是路径。而路径则又不同颜色/宽度的线段或曲线相连形成的不同形状的点的集合。
  `绘制步骤`:   
  1. 创建路径起始点
  2. `画图命令`绘制路径
  3. 封闭路径
  4. 通过描边或填充路径区域来渲染图形
  `绘制函数`:    
  1. `beginPath()`
  新建路径
  2. `moveTo(x, y)`
  移动笔触到指定坐标上 
  3. `lineTo(x, y)`
  绘制一条从当前位置到指定坐标的直线
  4. `arc(x, y, radius, startAngle, endAngle, anticlockwise)`
  以`(x, y)`为圆心画半径为`radius`圆弧，从`startAngle`开始到`endAngle`结束，方向为`anticlockwise`(默认为`false`，即顺时针)
  5. `arcTo(x1, y1, x2, y2, radius)`

  6. `closePath()`
  闭合路径
  > 如果`当前点`为`开始点`又或者调用`fill`函数，则视为closePath
  7. `stroke()`
  通过线条绘制图形轮廓
  8. `fill()`
  通过填充路径的内容区域