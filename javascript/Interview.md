# 1. 
实现[…].count(n)，返回数组中出现次数超过n的数。
例如：[1,2,2,3,3,3].count(2)
返回：[2,3]
```
Array.prototype.cal=function(num){
    let count = {};
    let result = [];
    this.forEach((item,index)=>{
        if(count.hasOwnProperty(item)){
            count[item]++;
            if(count[item] >= num && !result.includes(item)){
                result.push(item);
            }
        }else{
            count[item] = 1;
        }
    })
    return result;
}
```

# 2. 页面打开所需要经过的流程
1. DNS Lookup
> 请求DNS服务器对域名进行查询
> 一般进行多次查询,除页面域名查询外，还有加载的JS、CSS、Image、Video等资源
2. 建立TCP请求连接
3. 服务端对请求进行响应
4. 客户端下载、解析、渲染页面
> + 解压gzip
> + 解析HTML头部代码，下载头部中的样式资源文件(CSS)和脚本资源文件(JS)
> + 遍历DOM树和CSSOM树，浏览器计算每个节点大小、坐标、颜色等样式，构造渲染树
> + 根据渲染树完成绘制过程

# 3. JavaScript的基础数据类型
+ Undefined
+ Null 
+ Boolean
+ Number
+ String
+ Symbol

# 4. in和hasOwnProperty
## in 

## hasOwnProperty

# 5. JavaScript位置不同的影响
## head
初始化页面时就加载JavaScript，阻塞后续代码执行
## body(结尾)
页面初始化完毕才加载

# 6. CSS加载
+ CSS文件是并行下载的
+ CSS文件下载不会阻塞后续JS的*下载*
+ CSS文件下载会阻塞后续JS的*执行*

# 7. CSS引入方式
+ 内联
嵌入HTML标签中
+ 页级
Head中
+ 外联
外部引入

# 8. 变量引用
```
let obj = {};
function changeValue(obj){
  obj.name = 'ConardLi';
  // 这里相当于给obj重新赋予新对象的地址引用
  obj = {name:'code秘密花园'};
}
changeValue(obj);
console.log(obj.name); //-> 'ConardLi'
```


# 9. new的过程
1. 创建新对象
2. 将构造函数的作用域赋给新对象
3. 执行构造函数中的代码
4. 返回新对象
demo
```
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.hello = function(){
    return `My name is ${this.name}`;
} 
const tom = new Person('tom',22);
```
process
```
function $new(){
    var obj = {}; //stage 1
    obj.__proto__ = Person.prototype; //stage 2
    obj.name = 'tom'; //stage 3
    obj.age = 22;//stage 3
    obj.hello = function(){ //stage 3
        return 'tom';
    }
    return obj;
}
```
polyfill
```
function $new(){

}
```

# 10. MVC和MVVM
## MVC
业务逻辑、数据、界面分离的设计模式
+ Model 模型
功能的实现、数据库管理，主要负责数据存储
+ View 视图
用户所能看到的界面，主要负责数据展示
+ Controller 控制器
对请求进行处理，连接Model和View

## MVVM
是一种双向绑定的响应式设计模式
+ Model 数据层
+ View 视图层
+ ViewModel 数据视图层

# 优化首屏幕
1. Vue-router异步路由
2. 不打包库文件,外部引入，防止阻塞
3. gzip

# 减少白屏时间
1. Vue-router异步路由
2. webpack打包优化
3. 骨架屏
4. 模版预加载

# Tree-shaking原理
利用ES6模块的静态引入，编译时可以知道实际加载情况，分析变量是否被使用或引用，从而删除代码。
为了达到更高的效果，减少代码的副作用。

# docContentLoad和onLoad区别


# TODO
```
(function() {
    console.log(age);
    console.log(name);
    let name = 'PapaerCrane';
    var age = 24;
})();
```

# TODO
```
const myPromise = () =>
  Promise.resolve('I have resolved')

const firstFunc = () => {
    myPromise().then((res) => {
      console.log(res + ' first');
    });
    console.log('first');
}
async function secondFunc() {
    console.log(await myPromise());
    console.log('second');
}
firstFunc();
secondFunc();
```

# 在一个字符串中找到第一个只出现一次的字符。如输入abaccdefbf，则输出d，找不到则输出false
```
let str = "abaccdefbf";
function firstOne(str){
    let arr = str.split('');
    let repeatPool = [];
    while(arr.length){
        const tempReg = new RegExp(arr[0],'g');
        const tempValue = arr.shift();
        if(repeatPool.includes(tempValue)){
            continue;
        }
      	console.log("Traverse");
      	const temp = [...str.matchAll(tempReg)];
        if([...str.matchAll(tempReg)].length === 1){
          	console.log(temp);
            return tempValue;
        }else{
            repeatPool.push(tempValue)
        }
    }
    return -1;
}
console.log(firstOne(str));
```