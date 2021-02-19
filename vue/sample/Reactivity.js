let obj = { foo: 123 };
convert(obj);
console.log('obj.foo:1', obj.foo);
obj.foo = 234;
console.log('obj.foo:2', obj.foo);
function convert (obj) {
  Object.keys(obj).forEach(key => {
    let internalValue = obj[key];
    Object.defineProperty(obj, key, {
      get () {
        return 'head' + internalValue;
      },
      set (newValue) {
        internalValue = newValue + 'tail';
      }
    })
  })
}