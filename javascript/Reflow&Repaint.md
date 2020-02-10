# 回流Reflow
影响布局，性能消耗较大
# 重绘Repaint
不影响布局，性能消耗较小


## 优化
1. 除了写操作，读操作同样会引起回流和重绘(使用函数节流)
2. 通过改变class或者cssText，一次性修改而不是一条一条修改
3. 使用DocumentFragment(轻量DOM)或者cloneNode，在克隆的节点上操作再替换
4. 使用虚拟DOM
5. requestAnimationFrame、requestIdleCallback调节渲染