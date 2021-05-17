# package.json

- `files`

  描述使用`npm publish`推送到`npm`服务器的文件列表，如果指定文件夹，则文件夹内的所有内容都会包含。

  参考`antd`

  ```
  {
  	...
  	"files": [
  		"dist",
  		"lib",
  		"es"
  	]
  }
  ```

  除此之外，还可以通过配置`.npmignore`来排除某些文件，防止这些文件推送到`npm`上。

- `private`

  非开源项目需要设置`private`为`true`，防止发布出去。

- `engines`

  指定`node`版本

  ```
  "engines": {
  	"node": ">= x.x.x" // version
  }
  ```

- ***`bin`**

  自定义命令，新建一个命令与本地文件名做映射。例如`vue create`/`create-react-app`。

  安装带有`bin`字段的包

  - 全局安装

    链接到`/usr/local/node_modules/.bin`

  - 本地安装

    链接到`./node_modules/.bin`

  Demo：test-cli(package.json)

  ```
  {
  	...
  	"bin": {
  		"test": "./bin/index"
  	}
  }
  ```

  在安装了`test-cli`的项目中

  ```
  {
  	...
  	"scripts": {
  		start: "node_modules/.bin/test-cli"
  	}
  }
  ```

  

  >  `#! /usr/bin/env node`在文件顶部添加这句表示该文件使用`node`执行。

  