# itools

前端开发中常用的工具方法



## Install

```javascript
npm i -S itools.js
```



## Usage

```javascript
// esm 
import iTools from 'itools.js'
// vue
Vue.prototype.$tools = iTools

// cjs
const iTools = require('itools.js')

// iife
<script src='dist/itools.js'></script>
```



## API

* clone 

  对象深拷贝

  ```javascript
  let obj_a = { a: 1 }
  let obj_b = iTools.clone(obj_a) // cloneDeep
  ```

* cookie

  cookie 操作

  ```javascript
  iTools.cookie.set('name','value','exSeconds','path')
  let name = iTools.cookie.get('name')
  iTools.cookie.del('name')
  ```

* copy

  复制一个字符串到剪贴板
  
  ```javascript
	let str = 'copy str'
  if(iTools.copy(str)){
      alert('copy success')
  }
  ```
  
* download

  保存一个路径到本地并重命名

  ```javascript
  let filename = '当前页面'
  let filePath = window.location.href
  iTools.download(filename, filePath)
  ```

* getParam

  获取浏览器地址栏中的参数

  ```javascript
  let name = iTools.getParam('name')
  let age = iTools.getParam('age', 'https://suohb.com?age=18')
  ```

* isBrowser

  判断当前环境是否是浏览器环境
  
  ```javascript
	let isBrowser = iTools.isBrowser // 是否浏览器环境
  ```
  
* randomStr

  获取固定长度的随机字符串

  ```javascript
  let str = iTools.randomStr(10) // 
  let str2 = iTools.randomStr(9,'letter') // only letter
  let str3 = iTools.randomStr(8,'number') // only number
  console.log(str, str2, str3) // lq3hc8ogxl carijlvjz 83568934
  ```

* type

  判断变量类型

  ```javascript
  console.log(iTools.type('str')) // string
  console.log(iTools.type(124)) // number
  console.log(iTools.type(true)) // boolean
  console.log(iTools.type(null)) // null
  console.log(iTools.type([1, 2, 3])) // array
  console.log(iTools.type(() => { })) // function
  console.log(iTools.type({ a: 1 })) // object
  console.log(iTools.type(new Date())) // date
  console.log(iTools.type(undefined)) // undefined
  ```

* uniqueId

  获取唯一ID

  ```javascript
  console.log(iTools.uniqueId()) // kdqsnvmi_zri604sxb89
  ```

* debounce & throttle

  防抖和节流函数

  ```javascript
	function logPos(e) {
		console.log(e.pageX, e.pageY)
	}
	// debounce
	// document.addEventListener('mousemove', iTools.debounce(logPos, 500))
	// throttle
	document.addEventListener('mousemove', iTools.throttle(logPos, 500))
  ```
* trim

	针对 string、array、object格式，深度trim

	```javascript
	let str4 = ' aa '
	let arr = [' aa ', ' bb ']
	let obj = { a: ' aa ', b: [' bb  '] }
	console.log(iTools.trim(str4)) // aa
	console.log(iTools.trim(arr)) // ['aa','bb']
	console.log(iTools.trim(obj)) // {a:'aa',b:['bb']}
	```
  

