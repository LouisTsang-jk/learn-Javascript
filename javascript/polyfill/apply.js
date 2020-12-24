Function.prototype.apply = function (context, args) {
  context = context ? Object(context): window;
  context.fn = this;
  if (!args) {
    return context.fn();
  }
  const res = eval(`context.fn(${args})`);
  delete context.fn;
  return res;
}