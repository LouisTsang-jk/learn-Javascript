Function.prototype.call = function (context) {
  context = context ? Object(context) : window;
  context.fn = this;
  const args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push(`arguments[${i}]`);
  }
  const res = eval(`context.fn(${args})`);
  delete context.fn;
  return res;
}
/**
 * 1. context存在就使用context,否则用window
 * 2. 使用Object(context)将context转换成对象，并通过context.fn将this指向context
 * 3. 循环参数,注意从1开始,第0个是上下文,后面才是我们需要的参数
 * 4. 将参数字符串push进args
 * 5. 字符串和数组拼接时，数组会调用toString方法,这样可以实现将参数一个个传入，并用eval执行
 * 6. 拿到结果返回之前删除掉fn
 */