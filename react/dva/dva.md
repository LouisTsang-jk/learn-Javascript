# DVA

#### 核心概念

- State

  保存整个应用状态的对象

- View

  React组件构成的视图层

- Action

  描述事件的对象

- connect

  绑定`State`到`View`的函数

- dispatch

  发送`Action`到`State`的函数

#### Action

```
{
	type: 'click-submit-button',
	payload: this.form.data
}
```

#### connect

```
import { connect } from 'dva';
function mapStateToProps(state) {
	return { todos: state.todos };
}
connect(mapStateToProps)(App);
```

#### dispatch



