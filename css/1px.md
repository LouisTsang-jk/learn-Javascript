# 移动端1px渲染
对于750的设计稿，iphone6实际宽度为375，即dpr为2，所以实际渲染`border: 1px;`的时候相当于渲染了`2px`的边框。
`devicePixelRatio` = 物理像素 / 独立像素
1. svg
2. box-shadow
```
box-shadow: 0  -1px 1px -1px #000,   // 上
            1px  0  1px -1px #000,   // 右
            0  1px  1px -1px #000,   // 下
            -1px 0  1px -1px #000;   // 左
```
3. 伪类元素 + transform
```
div::after {
  position: absolute;
  content: '';
  z-index: 1;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  box-sizing: border-box;
  border: 1px solid #000;
  transform: scale(0.5);
  transform-origin: left top;
}
```
4. 边框图片
```
border: 1px solid rgba(0, 0, 0, 0);
border-image: url('./border.jpg') 2 repeat;
```
5. flex布局下直接设置`border: 1px;`