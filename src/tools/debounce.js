/*
 * @Author: suo
 * @Date: 2020-08-20 11:02:25
 * @LastEditTime: 2020-08-20 11:14:02
 * @LastEditors: suo
 * @Description: 防抖函数
 */
const debounce = (fun, time) => {
	let timer
	return function () {
		let args = arguments
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => {
			fun.apply(this, args)
		}, time)
	}
}

export default debounce
