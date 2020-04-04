# 实例属性
## $data
Vue实例观察的数据对象，Vue会递归将data的属性转换为`getter/setter`，从而让`data`的属性能够响应数据变化。  
实例穿件之后，就可以用过`vm.$data`访问原始数据对象。同时Vue实例也代理了`data`对象上所有的属性，因此可以用`vm.a`访问`vm.$data.a`
## $props
当前组件接受到的`props`对象。Vue实例代理对其`props`对象属性的访问
## $el
当前Vue组件的根元素，注意声明周期(mounted)
## $options
当前Vue实例的初始化选项
## $parent
当前实例的父实例
## $root
整个组件树的根实例
## $children

## $slots
访问当前Vue实例的插槽内容
## $scopedSlots
访问作用域插槽
## $refs

## $isServer

## $attrs

## $listeners