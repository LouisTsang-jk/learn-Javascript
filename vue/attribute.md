# Vue 特殊attribute
- key
1. Vue的虚拟DOM算法，新旧nodes的辨识位。使用key，Vue会基于key的变化重新排列元素顺序，并且移除key不存在的元素。   
2. **有相同父元素的子元素必须有独特的key，重复key会导致渲染错误。**
3. 强制替换元素/组件? TODO
  - 完整地触发组件的生命周期钩子
  - 触发过渡(下面示例在`text`变化时，`<span>`总是替换而不是修改，因此触发过渡)
  ```
  <transition>
    <span :key="text">{{ text }}</span>
  </transition>
  ```

- ref

- is
- slot
- slot-scope
- scope