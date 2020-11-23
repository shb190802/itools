/**
 * 深层trim
 */
import type from './type'

const trim = (data) => {
	let _type = type(data)
	if (_type === 'string') {
		data = data.trim()
	} else if (_type === 'array') {
		data = data.map(item => trim(item))
	} else if (_type === 'object') {
		for (let key in data) {
			data[key] = trim(data[key])
		}
	}
	return data
}

export default trim