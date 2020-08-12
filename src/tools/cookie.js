/**
 * 设置cookie
 * @param {String} name 名称
 * @param {String} value 值
 * @param {Number} seconds 失效的秒数，不传为session有效期
 * @param {String} path 路径默认是根路径
 */
const set = (name, value, seconds = 0, path = '/') => {
	let expires = ''
	if (seconds !== 0) {
		let exp = new Date()
		exp.setTime(exp.getTime() + seconds * 1000)
		expires = `expires=${exp.toGMTString()};`
	}
	document.cookie = `${name}=${value} ;${expires}path=${path}`
}
/**
 * 获取cookie
 * @param {*} name 
 */
const get = (name) => {
	var strCookies = document.cookie;
	var array = strCookies.split(';');
	for (var i = 0; i < array.length; i++) {
		var item = array[i].split("=");
		if (item[0] == name) {
			return item[1];
		}
	}
	return null;
}
/**
 * 删除cookie
 * @param {*} name 
 */
const del = (name) => {
	set(name, '', -1)
}

export default {
	set,
	get,
	del
}