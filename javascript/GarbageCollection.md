# 垃圾回收机制

## 引用计数垃圾收集  
最*初级*的垃圾收集算法。  
**如果没有引用指向该对象(零引用)，对象会被垃圾回收机制回收**  
`限制：循环引用`  
```
function f(){
  var o = {};
  var o2 = {};
  o.a = o2; // o 引用 o2
  o2.a = o; // o2 引用 o

  return "azerty";
}

f();
```  
引用计数算法认为它们互相至少有一次引用，所以不会被回收。

## 标记-清除算法  
**对象是否可以获得**  
垃圾回收器将定期从*根(root)*开始，找所有从根开始引用的对象，然后找这些对象引用的对象……从根开始，垃圾回收器将找到所有可以获得的对象和收集所有不能获得的对象。
`限制：无法从根对象查询到的对象都会被清楚`