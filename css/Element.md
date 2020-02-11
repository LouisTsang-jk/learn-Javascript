# 可替换元素

# 行内元素/内联元素(Inline box)  
1. 盒子不会产生换行
2. `width`和`height`不会其作用
3. paddin、margin、border会被应用，但是不会把其他处于`inline`状态的盒子推开。

+ <a>
+ <span>
+ <em> 
+ <strong>


# 块状元素(Block box)  
1. 盒子会在内联方向上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽  
2. 每个盒子都会换行  
3. `width`和`height`可以发挥作用  
4. padding、margin、border会将其他元素从当前盒子周围推开

+ 标题<h1>等
+ <p>