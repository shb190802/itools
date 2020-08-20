/*
 * @Author: suo
 * @Date: 2020-08-20 11:02:25
 * @LastEditTime: 2020-08-20 11:08:27
 * @LastEditors: suo
 * @Description: 节流函数
 */
const throttle = (fun, time) => {
	let timer
	return function () {
		let args = arguments
		if (timer) return
		timer = setTimeout(() => {
			timer = null
			fun.apply(this, args)
		}, time)
	}
}

export default throttle
