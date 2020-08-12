(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.sTools = factory());
}(this, function () { 'use strict';

	/**
	 * 设置cookie
	 * @param {String} name 名称
	 * @param {String} value 值
	 * @param {Number} seconds 失效的秒数，不传为session有效期
	 * @param {String} path 路径默认是根路径
	 */
	var set = function set(name, value) {
	  var seconds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	  var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';
	  var expires = '';

	  if (seconds !== 0) {
	    var exp = new Date();
	    exp.setTime(exp.getTime() + seconds * 1000);
	    expires = "expires=".concat(exp.toGMTString(), ";");
	  }

	  document.cookie = "".concat(name, "=").concat(value, " ;").concat(expires, "path=").concat(path);
	};
	/**
	 * 获取cookie
	 * @param {*} name 
	 */


	var get = function get(name) {
	  var strCookies = document.cookie;
	  var array = strCookies.split(';');

	  for (var i = 0; i < array.length; i++) {
	    var item = array[i].split("=");

	    if (item[0] == name) {
	      return item[1];
	    }
	  }

	  return null;
	};
	/**
	 * 删除cookie
	 * @param {*} name 
	 */


	var del = function del(name) {
	  set(name, '', -1);
	};

	var cookie = {
	  set: set,
	  get: get,
	  del: del
	};

	/**
	 * 获取变量类型
	 * @param {any} obj 
	 */
	var type = function type(obj) {
	  var toString = Object.prototype.toString;
	  var map = {
	    '[object Boolean]': 'boolean',
	    '[object Number]': 'number',
	    '[object String]': 'string',
	    '[object Function]': 'function',
	    '[object Array]': 'array',
	    '[object Date]': 'date',
	    '[object RegExp]': 'regExp',
	    '[object Undefined]': 'undefined',
	    '[object Null]': 'null',
	    '[object Object]': 'object'
	  };
	  return map[toString.call(obj)];
	};

	/**
	 * 深拷贝
	 * @param {*} data 
	 */

	var clone = function clone(data) {
	  var type$1 = type(data);
	  var obj;

	  if (type$1 === 'array') {
	    obj = [];
	  } else if (type$1 === 'object') {
	    obj = {};
	  } else {
	    return data;
	  }

	  if (type$1 === 'array') {
	    for (var i = 0, len = data.length; i < len; i++) {
	      obj.push(clone(data[i]));
	    }
	  } else if (type$1 === 'object') {
	    for (var key in data) {
	      obj[key] = clone(data[key]);
	    }
	  }

	  return obj;
	};

	/**
	 * 获取URL中的参数
	 * @param {*} key 
	 * @param {*} url ?
	 */
	var getParam = function getParam(key, url) {
	  url = url || window.location.search.substr(1);
	  var reg = new RegExp("(^|\\?|&)".concat(key, "=([^&#]*)"));
	  var r = reg.exec(url);
	  return r ? r[2] : '';
	};

	/**
	 * 下载URL另存为文件名
	 * @param {*} filename 
	 * @param {*} data 
	 */
	var download = function download(filename, data) {
	  var DownloadLink = document.createElement('a');

	  if (DownloadLink) {
	    document.body.appendChild(DownloadLink);
	    DownloadLink.style = 'display: none';
	    DownloadLink.download = filename;
	    DownloadLink.href = data;

	    if (document.createEvent) {
	      var DownloadEvt = document.createEvent('MouseEvents');
	      DownloadEvt.initEvent('click', true, false);
	      DownloadLink.dispatchEvent(DownloadEvt);
	    } else if (document.createEventObject) DownloadLink.fireEvent('onclick');else if (typeof DownloadLink.onclick == 'function') DownloadLink.onclick();

	    document.body.removeChild(DownloadLink);
	  }
	};

	/**
	 * 复制内容到剪贴板
	 * @param {*} text 
	 */
	var copy = function copy(text) {
	  var input = document.createElement('input');
	  input.style.position = 'absolute';
	  input.style.opacity = 0;
	  input.value = text;
	  var res = true;

	  try {
	    input.select();
	    document.execCommand('Copy');
	  } catch (e) {
	    res = false;
	  }

	  document.body.appendChild(input);
	  return res;
	};

	/**
	 * 不重复ID
	 */
	var uniqueId = function uniqueId() {
	  var time = (+new Date()).toString(36);
	  var random = Math.random().toString(36).split('.')[1];
	  return "".concat(time, "_").concat(random);
	};

	/**
	 * 是否是浏览器环境
	 */
	var isBrowser = !!window;

	/**
	 * 
	 * @param {*} len 
	 * @param {*} type Letter Number All
	 */
	var randomStr = function randomStr(len) {
	  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'All';
	  type = type.toLowerCase();
	  type = ['letter', 'number', 'all'].includes(type) ? type : 'all';
	  var letter = 'abcdefghijklmnopqrstuvwxyz';
	  var number = '0123456789';
	  var str = {
	    letter: letter,
	    number: number,
	    all: letter + number
	  }[type];
	  var res = '';

	  for (var i = 0; i < len; i++) {
	    res += str[~~(Math.random() * str.length)];
	  }

	  return res;
	};

	var index = {
	  cookie: cookie,
	  type: type,
	  clone: clone,
	  getParam: getParam,
	  download: download,
	  copy: copy,
	  uniqueId: uniqueId,
	  isBrowser: isBrowser,
	  randomStr: randomStr
	};

	return index;

}));
