# Hide「隐藏元素」
- overflow: hidden;
占用文档流，不可点击
- opacity: 0;
占用文档流，可点击
- visibilty: hidden;
占用文档流，不可点击
- display: none;
不占用文档流，不可点击
- position: absolute;
不占用文档流
- clip/clip-path: rect()/inset()/polygon()
占用文档流，不可点击「考虑兼容性」
- z-index: -1000;
不占用文档流，不可点击「利用其他元素进行遮盖」
- transform: scaleY(0);
占用文档流，不可点击