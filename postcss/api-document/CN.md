# CLASSES
## AtRule
一个`at-rule`是一个CSS语句，以`@`符号开头，后面跟着一个标识符，并包括直到下一个分号的所有内容；或下一个CSS块。
> [@规则-MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/At-rule)
### `new AtRule()`
|||
| - | - |
|继承|`Container`|
|出处|`at-rule.es6,line 21`|
|类型|构造函数|
### 示例「Example」
```
const root = postcss.parse('@charset "UTF-8"; @media print {}')
const charset = root.first
charset.type // => 'atrule'
charset.nodes // => undefined

const media = root.last
media.nodes // => []
```
### 成员「Members」
#### `1.first: Node`
表示该节点`root`里的第一个元素
```
rule.first === rules.nodes[0]
```
|||
| - | - |
|类型|Node|
|出处|`container.es6,line 568`|
|继承|`Container#first`|
#### `2.last`
表示该节点`root`里的最后一个元素
```
rule.last === rule.nodes[rule.nodes.length - 1]
```
|||
| - | - |
|类型|Node|
|出处|`container.es6,line 581`|
|继承|`Container#last`|
### 方法「Methods」
- 

### 
## Comment
## Container
## CssSyntaxError
## Deciaration
## Input
## LazyResult
## Node
## PreviousMap
## Processor
## Result
## Root
## Rule
## Warning
---
# NAMESPACES
## List
## Postcss
## vendor
---
# GLOBAL