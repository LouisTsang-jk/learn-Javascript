## 规范

### 项目规范

1. 数据流方案统一使用Dva
2. utils(工具函数)/models(Dva)文件夹下的文件均需要编写测试用例
3. 功能复杂的大型通用组件抽到root层开发

### 代码规范

##### JavaScript编写规范

- React组件采用Hook编写

- State Hook使用标准命名
- 切勿贪图方便将本应拆分的State Hook组合成对象使用(性能原因)

```
// bad
const [modalVisible, setModalVisible] = useState({
	create: false,
	delConfirm: false
})
// good
const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
const [delConfirmModalVisible, setDelConfirmVisible] = useState<boolean>(false);
```

- JSX中请勿编写逻辑(代码语义性)

##### 注释规范

优秀的代码即注释。

- 描述代码意图及如何使用，而非行为。

- 尽量简洁明了
- 不应保留已注释的无用代码
- 必要时可以添加Example Code或者简单流程
- 可添加`Jira`或`Kb`链接加以说明

```
e.g.
/**
 * debounce 创建防抖函数
 * @category Function
 * @params { Function } 需要防抖的函数
 * @params {wait=0} 延迟wait毫秒
 * @returns { Function } 返回带防抖功能的函数
 * @example
 * const debounced = debounce(submit, 200);
 */
```



##### 命名规范

###### 常量命名

- 均采用大写描述

```
e.g.
const WIDTH = 1024;
```

###### 变量命名

- 普通变量采用驼峰命名

- 类(Class)、类型(type)、接口(interface)均需要大写开头

- 服务(Service)命名

  | 请求方式 | 动作描述 | 命名   |
  | -------- | -------- | ------ |
  | GET      | 读取     | Read   |
  | POST     | 操作     | Create |
  | PUT      | 更新     | Update |
  | PATCH    | 更新     | Update |
  | DELETE   | 删除     | Delete |

  - 数据列表使用List结尾
  - 分页数据列表使用Page结尾

  ```
  e.g.
  // 获取用户列表
  const GetUserList = function () {...}
  // 获取用户分页列表
  const GetUserPage = function () {...}
  ```

  

- 组件文件及文件夹除`index`采用小写外，其他一律采用大写开头。

- 组件实例使用小驼峰。

- 组件props使用小驼峰

  ```
  import Card from '@/components/Card';
  const card = <Card size="lg" />;
  ```

###### 样式命名

采用`BEM`命名方式

### Git规范
##### Git Message结构

```
<*types>(<scopes>): <*subject>
<blank line>
<body>
```
> `*`为必填

1. types**(必填)**

   | 类型     | 描述         | 备注 |
   | -------- | ------------ | ---- |
   | feat     | 新功能       | -    |
   | fix      | 修补bug      | -    |
   | docs     | 文档         | -    |
   | refactor | 重构         | -    |
   | test     | 增加测试用例 | -    |
   | chore    | 构建工具改动 | -    |

2. scopes

   描述影响范围。

   >  e.g.  (安保)。

3. subject**(必填)**

   本次commit的简述。

4. body

> e.g. 
>
> feat(安保): 新增登录功能
>
> 
>
> 1. 对接登录接口
>
> 2. 对接登出接口
>
> 3. 登陆界面
>
>    ...

##### Git分支规范

```
<*types>/<*branch description>/<YYYYMMDD>
```

1. types
2. branch description
3. YYYYMMDD

> e.g.
>
> feat/login
>
> fix/bug/20210630
>
> ...

