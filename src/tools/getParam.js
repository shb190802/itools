/**
 * 获取URL中的参数
 * @param {*} key 
 * @param {*} url ?
 */
const getParam = (key, url) => {
	url = url || window.location.search.substr(1)
	let reg = new RegExp(`(^|\\?|&)${key}=([^&#]*)`)
	let r = reg.exec(url)
	return r ? r[2] : ''
}

export default getParam