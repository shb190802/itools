# s-tools

前端开发中常用的工具方法



## Install

```javascript
npm i -S s-tools
```



## Usage

```javascript
// esm 
import shbTools from 'shb-tools'

// cjs
const shbTools = require('shb-tools')

// iife
<script src='dist/shb-tools.js'></script>
```



## API

* clone 

  对象深拷贝

  ```javascript
  let obj_a = { a: 1 }
  let obj_b = shbTools.clone(obj_a) // cloneDeep
  ```

* cookie

  cookie 操作

  ```javascript
  shbTools.cookie.set('name','value','exSeconds','path')
  let name = shbTools.cookie.get('name')
  shbTools.cookie.del('name')
  ```

* copy

  复制一个字符串到剪贴板
  
  ```javascript
	let str = 'copy str'
  if(shbTools.copy(str)){
      alert('copy success')
  }
  ```
  
* download

  保存一个路径到本地并重命名

  ```javascript
  let filename = '当前页面'
  let filePath = window.location.href
  shbTools.download(filename, filePath)
  ```

* getParam

  获取浏览器地址栏中的参数

  ```javascript
  let name = shbTools.getParam('name')
  let age = shbTools.getParam('age', 'https://suohb.com?age=18')
  ```

* isBrowser

  判断当前环境是否是浏览器环境
  
  ```javascript
	let isBrowser = shbTools.isBrowser // 是否浏览器环境
  ```
  
* randomStr

  获取固定长度的随机字符串

  ```javascript
  let str = shbTools.randomStr(10) // 
  let str2 = shbTools.randomStr(9,'letter') // only letter
  let str3 = shbTools.randomStr(8,'number') // only number
  console.log(str, str2, str3) // lq3hc8ogxl carijlvjz 83568934
  ```

* type

  判断变量类型

  ```javascript
  console.log(shbTools.type('str')) // string
  console.log(shbTools.type(124)) // number
  console.log(shbTools.type(true)) // boolean
  console.log(shbTools.type(null)) // null
  console.log(shbTools.type([1, 2, 3])) // array
  console.log(shbTools.type(() => { })) // function
  console.log(shbTools.type({ a: 1 })) // object
  console.log(shbTools.type(new Date())) // date
  console.log(shbTools.type(undefined)) // undefined
  ```

* uniqueId

  获取唯一ID

  ```javascript
  console.log(shbTools.uniqueId()) // kdqsnvmi_zri604sxb89
  ```

  

