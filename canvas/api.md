# measureText
canvas2D的API，返回被测量文本`TextMetrics`对象包含的信息(如宽度)。

# isPointInPath
检测当前路径是否有检测点

# isPointInStroke
检测某点是否在路径的描边线上的方法

# getLineDash
获取当前线段样式的方法

# quadraticCurveTo
二次贝塞尔曲线路径

# save
将当前状态放入栈中，保存canvas全部状态的方法
保存内容:
- 当前的变换矩阵
- 当前的剪切区域
- 当前的虚线列表
- strokeStyle
- fillStyle
- globalAlpha
- lineWidth
- lineCap
- lineJoin
- miterLimit
- lineDashOffset
- shadowOffsetX
- shadowOffsetY
- shadowBlur
- shadowColor
- globalCompositeOperation
- font
- textAlign
- textBaseline
- direction
- imageSmoothingEnabled
# restore
恢复`save()`方法保存默认的状态