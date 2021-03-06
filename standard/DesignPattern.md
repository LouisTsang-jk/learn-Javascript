# 设计模式六大原则
+ 单一原则(SRP)
实现类要职责单一，一个类只做一件事或一类事，不要将功能无法划分为一类的揉到一起。
+ 里氏替换原则(LSP)
不要破坏继承体系，子类完全可以替换掉他们所继承的父类，可以理解为调用父类方法的地方换成子类也可以正常执行调用
+ 依赖倒置原则(DIP)
如果某套功能或者业务逻辑可能之后会出现并行的另外一种模式或者较大的调整，那不如把这部分逻辑抽象出来，创建一个包含相关方法的抽象类，而实现类继承这个抽象类来重写抽象类中的方法，完成具体的实现，调用这些功能方法的类不需要关心自己调用的这些个方法的具体实现，只管调用这些抽象类中定义好的形式上的方法即可，不与实际实现这些方法的类发生直接依赖关系，方便之后的实现逻辑的替换更改
+ 接口隔离原则(ISP)
在设计抽象类的时候要精简单一，不需要的数据不需要提供
+ 迪米特法则(LoD)
降低耦合，尽量减少对象之间的直接交互，如果其中一个类需要调用另一个类的某一个方法，则可通过一个关系类发起这个调用
+ 开发-封闭(OCP)
对扩展开放，对修改关闭
