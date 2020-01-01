/**
 * name : prototype-pattern
 * scene : Deep clone
 */

/** shallow clone */
function clone(target){
  let result = {};
  for (let key in target){
    if(target.hasOwnProperty(key)){
      result[key] = target[key];
    }
  }
  return result;
}