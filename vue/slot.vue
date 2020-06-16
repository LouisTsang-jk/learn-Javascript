# v-slot(缩写:`#`)
## 用法
1.```
<!-- 具名插槽 -->
<base-layout>
  <template v-slot:header>
    Header content
  </template>
  Default slot content
  <template v-slot:footer>
    Footer content
  </template>
</base-layout>
<!-- 接收 prop 的具名插槽 -->
<infinite-scroll>
  <template v-slot:item="slotProps">
    <div class="item">
      {{ slotProps.item.text }}
    </div>
  </template>
</infinite-scroll>
<!-- 接收 prop 的默认插槽，使用了解构 -->
<mouse-position v-slot="{ x, y }">
  Mouse position: {{ x }}, {{ y }}
</mouse-position>
````