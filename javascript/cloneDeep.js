// TODO
// 对象不可枚举 -> Reflect.ownKeys
// Symbol -> Reflect.ownKeys
// Date/RegExp -> 生成新的实例返回
// 原型链 -> 使用getOwnPropertyDescriptors
// 循环引用 -> weakMap
function cloneDeep (target) {
  let result = null;
  if (typeof target === 'object') {

  } else {
    return target;
  }
  return result;
}
function $type (target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}