# 探索WASM下OpenCV在前端中的应用

## WebAssembly

### WebAssembly是什么？

### WebAssembly可以做什么？

### WebAssembly 原理

​	- C与JS通信

##### 编译/运行Hello程序

### WebAssembly 实践

##### 使用WASM移植的opencv对图像进行处理

- OpenCV的基本用法

	- 傅立叶变换「盲水印」「图片压缩」
	- 边缘检测
	- 降噪
	- 机器人部门里实际应用

### WebAssembly 实际意义「为前端带来另一种可能性」

#### WebAssembly 实践


> 编译OpenCV python ./opencv/platforms/js/build_js.py build_js --emscripten_dir=/usr/local/opt/emscripten/libexec/llvm/bin --cmake_option="-DCMAKE_TOOLCHAIN_FILE=/Users/louistsang/Desktop/OpenCV/opencv/emsdk/upstream/emscripten/cmake/Modules/Platform/Emscripten.cmake" --cmake_option="-DCMAKE_CROSSCOMPILING_EMULATOR='/usr/local/bin/node'"


> 为什么官方编译的OpenCV.js不需要.wasm文件呢，是因为已经编译转成base64的格式在js文件里了，可以通过搜索`var wasmBinaryFile=data:application/octet-stream;base64`