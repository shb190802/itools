/**
 * 复制内容到剪贴板
 * @param {*} text 
 */
const copy = (text) => {
	let input = document.createElement('input')
	input.style.position = 'absolute'
	input.style.opacity = 0
	input.value = text
	let res = true
	try {
		input.select()
		document.execCommand('Copy')
	} catch (e) {
		res = false
	}
	document.body.appendChild(input)
	return res
}

export default copy