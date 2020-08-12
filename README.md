# s-tools

前端开发中常用的工具方法



## Install

```javascript
npm i -S s-tools
```



## Usage

```javascript
// esm 
import sTools from 's-tools'

// cjs
const sTools = require('s-tools')

// iife
<script src='dist/s-tools.js'></script>
```



## API

* clone 

  对象深拷贝

  ```javascript
  let obj_a = { a: 1 }
  let obj_b = sTools.clone(obj_a) // cloneDeep
  ```

* cookie

  cookie 操作

  ```javascript
  sTools.cookie.set('name','value','exSeconds','path')
  let name = sTools.cookie.get('name')
  sTools.cookie.del('name')
  ```

* copy

  复制一个字符串到剪贴板
  
  ```javascript
let str = 'copy str'
  if(sTools.copy(str)){
      alert('copy success')
  }
  ```
  
* download

  保存一个路径到本地并重命名

  ```javascript
  let filename = '当前页面'
  let filePath = window.location.href
  sTools.download(filename, filePath)
  ```

* getParam

  获取浏览器地址栏中的参数

  ```javascript
  let name = sTools.getParam('name')
  let age = sTools.getParam('age', 'https://suohb.com?age=18')
  ```

* isBrowser

  判断当前环境是否是浏览器环境
  
  ```javascript
let isBrowser = sTools.isBrowser // 是否浏览器环境
  ```
  
* randomStr

  获取固定长度的随机字符串

  ```javascript
  let str = sTools.randomStr(10) // 
  let str2 = sTools.randomStr(9,'letter') // only letter
  let str3 = sTools.randomStr(8,'number') // only number
  console.log(str, str2, str3) // lq3hc8ogxl carijlvjz 83568934
  ```

* type

  判断变量类型

  ```javascript
  console.log(sTools.type('str')) // string
  console.log(sTools.type(124)) // number
  console.log(sTools.type(true)) // boolean
  console.log(sTools.type(null)) // null
  console.log(sTools.type([1, 2, 3])) // array
  console.log(sTools.type(() => { })) // function
  console.log(sTools.type({ a: 1 })) // object
  console.log(sTools.type(new Date())) // date
  console.log(sTools.type(undefined)) // undefined
  ```

* uniqueId

  获取唯一ID

  ```javascript
  console.log(sTools.uniqueId()) // kdqsnvmi_zri604sxb89
  ```

  

