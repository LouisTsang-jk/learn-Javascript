function observe(obj) {
  Object.keys(obj).forEach(key => {
    let internalValue = obj[key];
    const dep = new Dep();
    Object.defineProperty(obj, key, {
      get() {
        dep.depend();
        return internalValue;
      },
      set(newValue) {
        internalValue = newValue;
        dep.notify();
      }
    })
  })
}
let activeUpdate;
window.Dep = class Dep {
  constructor () {
    this.subs = new Set();
  }
  depend () {
    if (activeUpdate) {
      this.subs.add(activeUpdate);
    }
  }
  notify () {
    this.subs.forEach(sub => sub());
  }
}
function autorun(update) {
  function wrappedUpdate () {
    activeUpdate = wrappedUpdate; // *
    update();
    activeUpdate = null;
  }
  wrappedUpdate();
}
const state = {
  count: 0
}
// 依赖收集
autorun(() => {
  console.log('autorun:', state.count); // 这里触发getter
})
observe(state);
console.log('count is:', state.count);
// count is: 0
state.count++;
console.log('count is:', state.count);
// count is: 1
