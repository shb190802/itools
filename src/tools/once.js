/**
 * 方法仅执行一次
 */
const once = (fn, context) => {
	let isRun = false
	return function () {
		if (isRun) return
		isRun = true
		try {
			fn.apply(context, arguments)
		} catch (e) { }
	}
}

export default once