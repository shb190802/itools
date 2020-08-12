# i-libs

前端开发中常用的工具方法



## Install

```javascript
npm i -S i-libs
```



## Usage

```javascript
// esm 
import iLibs from 'i-libs'

// vue
Vue.prototype.$libs = iLibs
// cjs
const iLibs = require('i-libs')

// iife
<script src='dist/i-libs.js'></script>
```



## API

* clone 

  对象深拷贝

  ```javascript
  let obj_a = { a: 1 }
  let obj_b = iLibs.clone(obj_a) // cloneDeep
  ```

* cookie

  cookie 操作

  ```javascript
  iLibs.cookie.set('name','value','exSeconds','path')
  let name = iLibs.cookie.get('name')
  iLibs.cookie.del('name')
  ```

* copy

  复制一个字符串到剪贴板
  
  ```javascript
	let str = 'copy str'
  if(iLibs.copy(str)){
      alert('copy success')
  }
  ```
  
* download

  保存一个路径到本地并重命名

  ```javascript
  let filename = '当前页面'
  let filePath = window.location.href
  iLibs.download(filename, filePath)
  ```

* getParam

  获取浏览器地址栏中的参数

  ```javascript
  let name = iLibs.getParam('name')
  let age = iLibs.getParam('age', 'https://suohb.com?age=18')
  ```

* isBrowser

  判断当前环境是否是浏览器环境
  
  ```javascript
	let isBrowser = iLibs.isBrowser // 是否浏览器环境
  ```
  
* randomStr

  获取固定长度的随机字符串

  ```javascript
  let str = iLibs.randomStr(10) // 
  let str2 = iLibs.randomStr(9,'letter') // only letter
  let str3 = iLibs.randomStr(8,'number') // only number
  console.log(str, str2, str3) // lq3hc8ogxl carijlvjz 83568934
  ```

* type

  判断变量类型

  ```javascript
  console.log(iLibs.type('str')) // string
  console.log(iLibs.type(124)) // number
  console.log(iLibs.type(true)) // boolean
  console.log(iLibs.type(null)) // null
  console.log(iLibs.type([1, 2, 3])) // array
  console.log(iLibs.type(() => { })) // function
  console.log(iLibs.type({ a: 1 })) // object
  console.log(iLibs.type(new Date())) // date
  console.log(iLibs.type(undefined)) // undefined
  ```

* uniqueId

  获取唯一ID

  ```javascript
  console.log(iLibs.uniqueId()) // kdqsnvmi_zri604sxb89
  ```

  

