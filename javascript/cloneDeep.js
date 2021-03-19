// TODO
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