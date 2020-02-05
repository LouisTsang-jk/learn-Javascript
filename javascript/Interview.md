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