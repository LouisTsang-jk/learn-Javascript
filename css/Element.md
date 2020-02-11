# 可替换元素
 它们的内容不受当前文件的样式影响。CSS可以影响可替换元素的位置，但不会影响到可替换元素自身的内容。
 + <iframe>  
 + <video>  
 + <embed>
 + <img>
还有某些特定情况下可作为可替换元素处理：
+ <option>  
+ <audio>  
+ <canvas>  
+ <object>  
+ <applet>
某些可替换元素，其本身具有的尺寸和基线(baseline)会被一些CSS属性用到，加入计算中，如`vertical-align`
## 控制内容框中的对象位置
+ `object-fit:`
指定可替换元素的内容对象在元素盒区域中的填充方式(类似`background-size`)
+ `object-position:`
指定可替换元素的内容对象在元素盒区域中的位置(类似`background-position`)
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