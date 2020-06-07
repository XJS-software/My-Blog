### import vue from "vue" 的执行过程

> 使用 webpack 构建项目中执行此语句时，在 nodejs 环境下，相当于执行 require 
```
const vue = require("vue")
```
> nodejs 将会按照以下流程寻找目标模块
  1. 判断此模块是否为 nodejs 核心模块
  2. 判断此模块是否以 "/", "./", "../" 等路径开头
  3. 从 node_modules 文件中寻找此模块
  4. 报错
  
> 通过判断 nodejs 从 node_modules 文件夹下找到 vue 模块。此模块应满足 npm 规范。从 package.json 文件读取 main 字段对应文件，否则读取 index.js 文件。

> vue 的 package.json 文件中， 
```json
main: dist/vue.runtime.common.js
```

> nodejs 将从以上文件中读取 vue 模块

```js
const vue = require("./node_modules/vue/dist/vue.runtime.common.js")
```
