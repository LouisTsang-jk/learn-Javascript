# Dialog 
## 输入(props&v-model)
|属性 | 说明 | 类型 | 默认值 | 备注 |
|----|-----|------|------|------|
|v-model|开关|Boolean| `false`|-|
|title|标题|String|-|限制字数x|
|context|描述文字 |String|-|限制字数x|
|has-cancel|是否可取消|Boolean|`true`|-|
|cancel-text|取消按钮文案 |String |`取消`|-|
|confirm-text|确定按钮文案 |String |`确定`|-|
|on-body|挂载到body|Boolean |`true`|-|

> 注意
> 1. ios穿透问题
> 2. z-index

## 事件
@show
模态窗打开事件
@hide
模态窗关闭事件
@confirm
确认按钮点击事件
@cancel
取消按钮点击事件