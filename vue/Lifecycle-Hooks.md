# 生命周期「lifecycle Hooks」
## 常规
## 组件
### 加载渲染
父组件`「beforeCreate」` ->
父组件`「created」` ->
父组件`「beforeMount」` ->
子组件`「beforeCreate」` ->
子组件`「created」` ->
子组件`「beforeMount」` ->
子组件`「mounted」` ->
父组件`「mounted」` ->

## 子组件更新
父组件`「beforeUpdate」` ->
子组件`「beforeUpdate」` ->
子组件`「updated」` ->
父组件`「updated」` ->

## 父组件更新
父组件`「beforeUpdate」` ->
父组件`「updated」` ->

## 销毁
父组件`「beforeDestroy」` ->
父组件`「beforeDestroy」` ->
父组件`「destroyed」` ->
父组件`「destroyed」` ->
