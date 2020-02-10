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