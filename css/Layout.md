# 布局
## 流式布局(liquid layout)
优点：
调整不同的屏幕尺寸，保持相同的列宽度比例
缺点：
当变得非常窄的时候，列会变得很糟糕

### 水平居中/垂直居中
```
display: grid;
place-items: center;
```
### 侧边栏「Sidebar」
```
display: grid;
grid-template-columns: minmax(150px, 25%) 1fr;
```
### header&footer
```
display: grid;
grid-template-rows: auto 1fr auto;
```