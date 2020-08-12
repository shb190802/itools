/**
 * 不重复ID
 */
const uniqueId = () => {
	let time = (+ new Date).toString(36)
	let random = Math.random().toString(36).split('.')[1]
	return `${time}_${random}`
}

export default uniqueId