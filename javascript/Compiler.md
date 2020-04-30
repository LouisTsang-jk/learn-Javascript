# 编译器
一些前端常见场景
- JSX
- Babel
- CSS预处理器
- TypeScript
- HTML渲染
## 类型
- `AOT`「Ahead-Of-Time」
提前编译，静态编译的程序会在执行前，会使用指定编译器，将全部代码编译成机器码。
`Source Code` >>> `AOT Compilation` >>> `Code` >>> `VM Code`   
- `JIT`「Just-In-Time」
即时编译，动态解释的程序会使用指定解释器，一边`编译`一边`执行`程序。   
`Source Code` >>> `JIT Compilation` >>> `Code Gen` >>> `VM Code`
## 编译核心
- 「解析(Parsing)」:
通过`词法分析`和`语法分析`，将原始代码字符串解析成「抽象语法树」(Abstract Syntax Tree)
- 「转换(Transformation)」:
对抽象语法树进行转换处理操作
- 「生成代码(Code Generation)」:
将转换之后的AST对象生成目标语言代码字符串
## 实现小型编译器
1. 输入「原始代码」
```
// origin code 
(add 2 (subtract 42))
```

```
function compiler (input) {
  let tokens = tokenizer(input);
  let ast = parser(tokens);
  let newAst = transformer(ast);
  let output = codeGenerator(newAst);
  return output;
}
```
2. 「解析阶段(Parsing)」
原始代码字符串通过「词法分析器(Tokenizer)」转换为词法单元数组，然后通过「语法分析器(Parser)」将「词法单元数组」转换为「抽象语法树(AST)」