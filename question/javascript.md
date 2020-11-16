# javascript
- e.target和e.currentTarget区别
```
const ul = document.createElement('ul');
document.body.appendChild(ul);
const liList = [];
for (let i = 0; i < 3; i++) {
    liList.push(document.createElement('li'));
    liList[i].innerText = `li${i}`;
    ul.appendChild(liList[i]);
}
function hide (e) {
    console.log('e.target', e.target); // -> 触发事件的对象。当事件处理程序在事件的冒泡或捕获阶段被调用时，于currentTarget不同(事件绑定)
    console.log('e.currentTarget', e.currentTarget); // -> 指向事件绑定的元素
    e.target.style.background = 'red';
    e.currentTarget.style.background = 'blue';
}
ul.addEventListener('click', hide, false);
```