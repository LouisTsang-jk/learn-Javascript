# webpack

## loader
`loader`能让webpack处理非JavaScript文件(webpack只能解析JavaScript)。`loader`将所有类型的文件转换为webpack能处理的有效模块，*然后再利用webpack的打包能力进行处理*。
## plugin
+ 打包优化
+ 压缩
+ 重新定义环境中的变量
+ ...

> 一般来说Loader是在打包前或打包时作用于单个文件。而Plugin一般在打包过程结束之后作用于包或者chunk级别。