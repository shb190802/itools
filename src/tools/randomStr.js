/**
 * 
 * @param {*} len 
 * @param {*} type Letter Number All
 */
const randomStr = (len, type = 'All') => {
	type = type.toLowerCase()
	type = ['letter', 'number', 'all'].includes(type) ? type : 'all'
	let letter = 'abcdefghijklmnopqrstuvwxyz'
	let number = '0123456789'

	let str = {
		letter,
		number,
		all: letter + number
	}[type]

	let res = ''
	for (let i = 0; i < len; i++) {
		res += str[~~(Math.random() * str.length)]
	}
	return res
}

export default randomStr