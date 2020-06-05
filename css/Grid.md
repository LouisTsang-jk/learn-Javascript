# 网格系统

## 语法
- grid-template[grid-template-columns|grid-template-rows|grid-template-areas]
定义grid-template
- grid-template-rows
基于`网格列`的维度，去定义网格线的名称和网格轨道的尺寸大小。
1. none
2. length
3. percentage
4. flex
5. max-content
6. min-content
7. minmax(min, max)
- grid-template-columns
- grid-auto-flow
控制自动布局算法如何运作
1. row
按照逐行填充来排列元素，必要时增加新行。
2. column
通过逐列填充来排列元素，必要时增加新列。
3. dense
